package db

import "errors"

var (
	ErrInvalidFieldName  = errors.New("invalid field name")
	ErrUserAlreadyExists = errors.New("user with following uid, email or phone number already exists")
	ErrInternal          = errors.New("internal error")
)

type userAlreadyExistsError struct {
	Uid   bool
	Phone bool
	Email bool
}

func NewErrAlreadyExists(forUid bool, forPhone bool, forEmail bool) *userAlreadyExistsError {
	return &userAlreadyExistsError{
		Uid:   forUid,
		Phone: forPhone,
		Email: forEmail,
	}
}
