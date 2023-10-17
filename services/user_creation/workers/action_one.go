package workers

import (
	"blendwith.me/services/user_creation/red"
	"github.com/nats-io/nats.go"
)

// In Action 1, it is checked whether a transaction
// exists with the given number or not. If it does
// not exist then, the transaction is started and
// an OTP is generated, while the secret is stored
// in the redis database. The ID of the transaction
// is the E.164 standard adhering phone number.
func Action1Worker(msg *nats.Msg) {
	phn := msg.Subject[len(Action1SubjectName)+1:]
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

	err = red.StartTxn(phn)
	if err != nil {
		switch err.(type) {
		case red.ErrInternal:
			msg.Respond(red.ResponseInternalError)
		case red.ErrNumberAlreadyTaken:
			msg.Respond(red.Action1_ResponseNumberAlreadyTaken)
		}
		return
	}

	msg.Respond(red.Action1_ResponseOK)
}

// Starts the Action 1 worker.
func StartAction1Worker(nc *nats.Conn) (*nats.Subscription, error) {
	return nc.Subscribe(Action1SubjectName+".*", Action1Worker)
}
