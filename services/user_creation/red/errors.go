package red

import (
	"errors"
	"fmt"
)

type ErrNumberAlreadyTaken struct {
	Number string
}

func (e ErrNumberAlreadyTaken) Error() string {
	return fmt.Sprintf("An user already exists with the number: %v", e.Number)
}

func NewErrNumberAlreadyTaken(phn string) ErrNumberAlreadyTaken {
	return ErrNumberAlreadyTaken{Number: phn}
}

type ErrInternal struct {
	Err error
}

func NewErrInternal(err error) ErrInternal {
	return ErrInternal{Err: err}
}

func (e ErrInternal) Unwrap() error {
	return e.Err
}

func (e ErrInternal) Error() string {
	return fmt.Sprintf("internal error: %v", e.Err)
}

type ErrTxnNotFound struct {
	TxnID string
}

func NewErrTxnNotFound(id string) ErrTxnNotFound {
	return ErrTxnNotFound{TxnID: id}
}

func (e ErrTxnNotFound) Error() string {
	return fmt.Sprintf("failed to find transaction with id: %v", e.TxnID)
}

var ErrInvalidAction = errors.New("invalid action on current transaction stage")
var ErrOtpMissing = errors.New("otp is missing from the subject name")
