package workers

import (
	"errors"
	"strings"

	"blendwith.me/services/user_creation/red"
	"github.com/nats-io/nats.go"
)

type Action2Worker struct{}

func (w *Action2Worker) Name() string {
	return "action.2"
}

func (w *Action2Worker) Start(nc *nats.Conn) error {
	_, err := nc.QueueSubscribe(Action2SubjectName+".*.*", Action2GrpName, w.worker)
	return err
}

// Verifies the OTP.
func (w *Action2Worker) worker(msg *nats.Msg) {
	txnID, otp, err := w.extractTxnIdAndOTP(msg.Subject)
	if err != nil {
		msg.Respond(red.ResponseOtpMissing)
		return
	}

	valid, err := red.VerifyOTPAndPromote(txnID, otp)
	if err != nil {
		if errors.Is(err, red.ErrTxnNotFound) {
			msg.Respond(red.ResponseTxnNotFound)
		} else if errors.Is(err, red.ErrInvalidAction) {
			msg.Respond(red.ResponseInvalidAction)
		} else {
			msg.Respond(red.ResponseInternalError)
		}
		return
	}

	if !valid {
		msg.Respond(red.ResponseInvalidOTP)
		return
	}

	msg.Respond(red.ResponseOK)
}

func (*Action2Worker) extractTxnIdAndOTP(subj string) (string, string, error) {
	suffix := subj[len(Action2SubjectName)+1:]
	i := strings.Index(suffix, ".")
	if i == -1 {
		return suffix, "", red.ErrOtpMissing
	} else if len(suffix) == i+1 {
		return suffix[:i], "", red.ErrOtpMissing
	}

	return suffix[:i], suffix[i+1:], nil
}
