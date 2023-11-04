package worker

import (
	"errors"
	"fmt"
	"strings"

	"blendwith.me/services/user_mgmt/db"
	"blendwith.me/services/user_mgmt/pb"
	"blendwith.me/services/user_mgmt/service"
	"github.com/nats-io/nats.go"
	"google.golang.org/protobuf/proto"
)

type FetchWorker struct {
	service.Logger

	fetchIdSub *nats.Subscription
}

// Name returns the name of the worker.
func (w *FetchWorker) Name() string { return "fetch" }

// NewFetchWorker creates a new fetch worker.
func NewFetchWorker() *FetchWorker {
	return &FetchWorker{}
}

// Registers registers the worker into the service.
func (w *FetchWorker) Register(sc service.ServiceContext) (err error) {
	w.Logger = service.NewLogger(fmt.Sprintf("%v [ %v ]", sc.Service.Logger.Prefix, w.Name()))

	w.fetchIdSub, err = sc.Service.NatsConn.QueueSubscribe("service.user-mgmt.fetch.id.*.>", "service.user-mgmt.fetch.id", w.workerFetchId)
	if err != nil {
		return err
	}

	return nil
}

func (w *FetchWorker) workerFetchId(msg *nats.Msg) {
	// Extract the field that is to be used as a key.
	query := msg.Subject[len("service.user-mgmt.fetch.id."):]

	i := strings.IndexRune(query, '.')
	if i == -1 {
		err := msg.Respond(service.ResponseInvalidQuery)
		if err != nil {
			w.LogERR("failed to respond to message at subject %v", msg.Subject)
		}
		return
	}

	field, value := query[:i], query[i+1:]
	id, err := db.FetchIdByField(field, value)
	if err != nil {
		w.LogERR("%v", err)
		if errors.Is(err, db.ErrInvalidFieldName) {
			msg.Respond(service.ResponseInvalidFieldName)
		} else if errors.Is(err, db.ErrUserDoesNotExist) {
			msg.Respond(service.ResponseUserNotFound)
		} else {
			msg.Respond(service.ResponseInternalError)
		}
		return
	}

	res, _ := proto.Marshal(&pb.Response{
		Ok:   true,
		Code: pb.ResponseCode_OK,
		Data: &pb.Response_FetchId{
			FetchId: &pb.FetchIdResponse{Id: id},
		},
	})

	msg.Respond(res)
}
