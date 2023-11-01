package worker

import (
	"errors"

	"blendwith.me/services/user_mgmt/db"
	"blendwith.me/services/user_mgmt/db/model"
	"blendwith.me/services/user_mgmt/pb"
	"blendwith.me/services/user_mgmt/service"
	"github.com/nats-io/nats.go"
	"google.golang.org/protobuf/proto"
)

type CreateWorker struct {
	service.Logger
	workerCreateUserSub *nats.Subscription
}

func NewCreateWorker() *CreateWorker {
	return &CreateWorker{}
}

func (w *CreateWorker) Name() string {
	return "create"
}

func (w *CreateWorker) Register(sc service.ServiceContext) (err error) {
	w.Logger = service.NewLogger(sc.Service.Logger.Prefix + " [ " + w.Name() + " ]")

	w.workerCreateUserSub, err = sc.Service.NatsConn.QueueSubscribe("service.user-mgmt.create.user", "service.user-mgmt.create.user", w.workerCreateUser)
	if err != nil {
		return err
	}

	return nil
}

func (w *CreateWorker) workerCreateUser(msg *nats.Msg) {
	req := pb.CreateUserRequest{}
	err := proto.Unmarshal(msg.Data, &req)
	if err != nil {
		msg.Respond(service.ResponseInvalidSchema)
		return
	}

	m := model.User{
		UID:         req.Uid,
		PhoneNumber: req.Phone,
		Email:       req.Email,
		DisplayName: req.DisplayName,
		Bio:         req.Bio,
	}

	if err := db.CreateUser(&m); err != nil {
		if errors.Is(err, db.ErrUserAlreadyExists) {
			msg.Respond(service.ResponseUserAlreadyExists(true, true, true))
		} else {
			msg.Respond(service.ResponseInternalError)
		}
		return
	}

	res, err := proto.Marshal(&pb.Response{
		Ok:   true,
		Code: pb.ResponseCode_OK,
		Data: &pb.Response_CreateUser{
			CreateUser: &pb.CreateUserResponse{Id: uint64(m.ID)},
		},
	})

	msg.Respond(res)
}
