package red

import (
	"log"

	pb "blendwith.me/services/user_creation/models"
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/reflect/protoreflect"
)

var (
	Action1_ResponseInvalidNumber      []byte
	Action1_ResponseNumberAlreadyTaken []byte
	ResponseInternalError              []byte
	ResponseTxnNotFound                []byte
	ResponseInvalidAction              []byte
	ResponseInvalidOTP                 []byte
	ResponseOK                         []byte
	ResponseOtpMissing                 []byte
	ResponseInvalidUID                 []byte
	ResponseUIDAlreadyTaken            []byte
)

func marshalProto(m protoreflect.ProtoMessage) []byte {
	v, err := proto.Marshal(m)
	if err != nil {
		panic(err)
	}
	return v
}

func init() {
	defer func() {
		err := recover()
		if err != nil {
			log.Fatal(err)
		}
	}()

	ResponseOK = NewResponse(true, pb.StatusCode_STATUS_CODE_OK)

	ResponseOtpMissing = NewErrResponse(pb.StatusCode_STATUS_CODE_OTP_MISSING)
	ResponseInternalError = marshalProto(&pb.Response{Ok: false, Code: pb.StatusCode_STATUS_CODE_INTERNAL_ERROR})
	Action1_ResponseInvalidNumber = marshalProto(&pb.Response{Ok: false, Code: pb.StatusCode_STATUS_CODE_INVALID_NUMBER})
	Action1_ResponseNumberAlreadyTaken = marshalProto(&pb.Response{Ok: false, Code: pb.StatusCode_STATUS_CODE_NUMBER_ALREADY_TAKEN})
	ResponseTxnNotFound = marshalProto(&pb.Response{Ok: false, Code: pb.StatusCode_STATUS_CODE_TXN_NOT_FOUND})
	ResponseInvalidAction = NewErrResponse(pb.StatusCode_STATUS_CODE_INVALID_ACTION)
	ResponseInvalidOTP = NewErrResponse(pb.StatusCode_STATUS_CODE_INVALID_OTP)
	ResponseInvalidUID = NewErrResponse(pb.StatusCode_STATUS_CODE_INVALID_UID)
	ResponseUIDAlreadyTaken = NewErrResponse(pb.StatusCode_STATUS_CODE_UID_ALREADY_TAKEN)
}

func NewResponse(ok bool, code pb.StatusCode) []byte {
	return marshalProto(&pb.Response{Ok: ok, Code: code})
}

func NewErrResponse(code pb.StatusCode) []byte {
	return NewResponse(false, code)
}

func NewAction1ResponseOK(txnId string, otp string) []byte {
	return marshalProto(&pb.Response{
		Ok:   true,
		Code: pb.StatusCode_STATUS_CODE_OK,
		Data: &pb.Response_Action_1{
			Action_1: &pb.Action1Response{
				TxnId: txnId,
				Otp:   otp,
			},
		},
	})
}

func NewResponseUserAlreadyExists(uid bool, phone bool, email bool) *pb.Response {
	return &pb.Response{
		Ok:   false,
		Code: pb.StatusCode_STATUS_CODE_USER_ALREADY_EXISTS,
		Errors: []*pb.Error{
			{
				Value: &pb.Error_UserAlreayExists{
					UserAlreayExists: &pb.UserAlreadyExistsError{
						Uid:   uid,
						Phone: phone,
						Email: email,
					},
				},
			},
		},
	}
}

func ResponseUserAlreadyExists(uid bool, phone bool, email bool) []byte {
	raw, _ := proto.Marshal(NewResponseUserAlreadyExists(uid, phone, email))
	return raw
}
