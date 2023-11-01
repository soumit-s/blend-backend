package service

import (
	"blendwith.me/services/user_mgmt/pb"
	"google.golang.org/protobuf/proto"
)

var (
	ResponseInvalidQuery     []byte
	ResponseInvalidFieldName []byte
	ResponseInternalError    []byte
	ResponseInvalidSchema    []byte
)

func init() {
	ResponseInvalidQuery = ErrorResponse(pb.ResponseCode_INVALID_QUERY)
	ResponseInvalidFieldName = ErrorResponse(pb.ResponseCode_INVALID_FIELD_NAME)
	ResponseInternalError = ErrorResponse(pb.ResponseCode_INTERNAL_ERROR)
	ResponseInvalidSchema = ErrorResponse(pb.ResponseCode_INVALID_SCHEMA)
}

func ErrorResponse(code pb.ResponseCode) []byte {
	raw, _ := proto.Marshal(&pb.Response{
		Ok:   false,
		Code: code,
	})
	return raw
}

func NewResponseUserAlreadyExists(uid bool, phone bool, email bool) *pb.Response {
	return &pb.Response{
		Ok:   false,
		Code: pb.ResponseCode_USER_ALREADY_EXISTS,
		Errors: []*pb.Error{
			{
				Value: &pb.Error_UserAlreadyExistsError{
					UserAlreadyExistsError: &pb.UserAlreadyExistsError{
						UIDAlreadyTaken:         uid,
						PhoneNumberAlreadyTaken: phone,
						EmailAlreadyTaken:       email,
					},
				},
			},
		},
	}
}

func ResponseUserAlreadyExists(uid bool, phone bool, email bool) []byte {
	res := NewResponseUserAlreadyExists(uid, phone, email)
	raw, _ := proto.Marshal(res)
	return raw
}
