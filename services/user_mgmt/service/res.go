package service

import (
	"blendwith.me/services/user_mgmt/pb"
	"google.golang.org/protobuf/proto"
)

var (
	ResponseInvalidQuery      []byte
	ResponseInvalidFieldName  []byte
	ResponseInternalError     []byte
	ResponseInvalidSchema     []byte
	ResponseUserAlreadyExists []byte
)

func init() {
	ResponseInvalidQuery = ErrorResponse(pb.ResponseCode_INVALID_QUERY)
	ResponseInvalidFieldName = ErrorResponse(pb.ResponseCode_INVALID_FIELD_NAME)
	ResponseInternalError = ErrorResponse(pb.ResponseCode_INTERNAL_ERROR)
	ResponseInvalidSchema = ErrorResponse(pb.ResponseCode_INVALID_SCHEMA)
	ResponseUserAlreadyExists = ErrorResponse(pb.ResponseCode_USER_ALREADY_EXISTS)
}

func ErrorResponse(code pb.ResponseCode) []byte {
	raw, _ := proto.Marshal(&pb.Response{
		Ok:   false,
		Code: code,
	})
	return raw
}
