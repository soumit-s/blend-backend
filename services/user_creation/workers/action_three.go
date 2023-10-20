package workers

import (
	"errors"
	"log"

	"blendwith.me/common/pdb"
	"blendwith.me/common/pdb/models"
	pb "blendwith.me/services/user_creation/models"
	"blendwith.me/services/user_creation/red"
	"github.com/nats-io/nats.go"
	"google.golang.org/protobuf/proto"
)

type Action3Worker struct{}

func (w *Action3Worker) Name() string {
	return "action.3"
}

func (w *Action3Worker) Start(nc *nats.Conn) error {
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
	} else {
		msg.Respond(red.ResponseInternalError)
	}
}

func (w *Action3Worker) createUser(uid string, phn string, email string) error {
	u := models.User{
		UID:         uid,
		PhoneNumber: phn,
		Email:       email,
	}

	return pdb.CreateUser(&u)
}

func (w *Action3Worker) getTxnID(subj string) string {
	return subj[len(Action3SubjectName)+1:]
}
