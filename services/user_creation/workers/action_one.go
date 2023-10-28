package workers

import (
	"log"

	"blendwith.me/services/user_creation/red"
	"github.com/nats-io/nats.go"
)

type Action1Worker struct{}

// Returns the name of the worker.
func (w *Action1Worker) Name() string {
	return "action.1"
}

func (w *Action1Worker) logf(format string, v ...any) {
	log.Printf("[ action.1 ] "+format, v...)
}

// In Action 1, it is checked whether a transaction
// exists with the given number or not. If it does
// not exist then, the transaction is started and
// an OTP is generated, while the secret is stored
// in the redis database. The ID of the transaction
// is the E.164 standard adhering phone number.
func (w *Action1Worker) worker(msg *nats.Msg) {
	phn := msg.Subject[len(Action1SubjectName)+1:]
	w.logf("request recieved at subject %v for phone number %v", msg.Subject, phn)
	// Check if the phone number is valid or not.
	valid, err := red.CheckIfPhoneNumberIsValid(phn)
	if err != nil {
		msg.Respond(red.ResponseInternalError)
		return
	}

	if !valid {
		msg.Respond(red.Action1_ResponseInvalidNumber)
		return
	}

	txnId, otp, err := red.StartTxn(phn)
	if err != nil {
		switch err.(type) {
		case red.ErrInternal:
			msg.Respond(red.ResponseInternalError)
		case red.ErrNumberAlreadyTaken:
			msg.Respond(red.Action1_ResponseNumberAlreadyTaken)
		}
		return
	}

	msg.Respond(red.NewAction1ResponseOK(txnId, otp))
}

// Starts the Action 1 worker.
func (w *Action1Worker) Start(nc *nats.Conn) error {
	_, err := nc.QueueSubscribe(Action1SubjectName+".*", Action1GrpName, w.worker)
	return err
}
