package db

import "errors"

var (
	ErrInvalidFieldName  = errors.New("invalid field name")
	ErrUserAlreadyExists = errors.New("user with following uid, email or phone number already exists")
	ErrInternal          = errors.New("internal error")
)
