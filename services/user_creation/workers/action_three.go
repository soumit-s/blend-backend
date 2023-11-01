package workers

import (
	"errors"
	"log"
	"time"

	pb "blendwith.me/services/user_creation/models"
	"blendwith.me/services/user_creation/red"
	mgpb "blendwith.me/services/user_mgmt/pb"
	"github.com/nats-io/nats.go"
	"google.golang.org/protobuf/proto"
)

type Action3Worker struct {
	nc *nats.Conn
}

func (w *Action3Worker) Name() string {
	return "action.3"
}

func (w *Action3Worker) Start(nc *nats.Conn) error {
	w.nc = nc
	_, err := nc.QueueSubscribe(Action3SubjectName+".*", Action3GrpName, w.worker)
	return err
}

func (w *Action3Worker) worker(msg *nats.Msg) {
	defer w.errorHandler(msg)

	// Fetch the transaction ID from the subject.
	txnID := w.getTxnID(msg.Subject)

	// Unmarshal the request to get the UID and the Email.
	req := pb.Action3Request{}
	if err := proto.Unmarshal(msg.Data, &req); err != nil {
		panic(err)
	}

	// Fetch the transaction. Send TxnNotFound if not
	// found.
	txn := red.Transaction{TxnID: txnID}
	if err := red.GetTxnByID(txnID, &txn.Data); err != nil {
		panic(err)
	}

	if txn.Data.GetStage() != pb.StageType_STAGE_2 {
		msg.Respond(red.ResponseInvalidAction)
		return
	}

	// Verify the UID and the email.
	err := red.VerifyEmailAndUID(req.Uid, req.Email)
	if err != nil {
		panic(err)
	}

	// Create the user.
	err = w.createUser(req.Uid, txn.Data.GetStage_1().Number, req.Email)
	if err != nil {
		panic(err)
	}

	// And then delete the transaction.
	if err = red.EndTransaction(txnID); err != nil {
		panic(err)
	}

	// Send the verification email.
	if err = red.SendVerificationMail(req.Email); err != nil {
		panic(err)
	}

	msg.Respond(red.ResponseOK)
}

func (w *Action3Worker) errorHandler(msg *nats.Msg) {
	r := recover()
	if r == nil {
		return
	}

	err, _ := r.(error)
	log.Print(err)

	if errors.Is(err, red.ErrInvalidUID) {
		msg.Respond(red.ResponseInvalidUID)
	} else if errors.Is(err, red.ErrUIDAlreadyTaken) {
		msg.Respond(red.ResponseUIDAlreadyTaken)
	} else if errors.Is(err, red.ErrTxnNotFound) {
		msg.Respond(red.ResponseTxnNotFound)
	} else if errors.Is(err, red.ErrUserAlreadyExists) {
		e, _ := red.AsUserAlreadyExistsError(err)
		msg.Respond(red.ResponseUserAlreadyExists(e.Uid, e.Phone, e.Email))
	} else {
		msg.Respond(red.ResponseInternalError)
	}
}

func (w *Action3Worker) createUser(uid string, phn string, email string) error {
	u := mgpb.CreateUserRequest{
		Uid:   uid,
		Phone: phn,
		Email: email,
	}
	req, _ := proto.Marshal(&u)
	reply, err := w.nc.Request("service.user-mgmt.create.user", req, 5*time.Second)
	if err != nil {
		return err
	}

	res := mgpb.Response{}
	err = proto.Unmarshal(reply.Data, &res)
	if err != nil {
		return err
	}

	if res.Ok {
		return nil
	}

	switch res.Code {
	default:
		fallthrough
	case mgpb.ResponseCode_INTERNAL_ERROR:
		return red.NewErrInternal(errors.New("user-mgmt service encountered an internal error"))
	case mgpb.ResponseCode_USER_ALREADY_EXISTS:
		err := res.Errors[0].GetUserAlreadyExistsError()
		return red.NewErrUserAlreadyExists(err.UIDAlreadyTaken, err.PhoneNumberAlreadyTaken, err.EmailAlreadyTaken)
	}
}

func (w *Action3Worker) getTxnID(subj string) string {
	return subj[len(Action3SubjectName)+1:]
}
