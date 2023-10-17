package red

import (
	"log"

	pb "blendwith.me/services/user_creation/models"
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/reflect/protoreflect"
)

var (
	Action1_ResponseOK                 []byte
	Action1_ResponseInvalidNumber      []byte
	Action1_ResponseNumberAlreadyTaken []byte
	ResponseInternalError              []byte
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

	ResponseInternalError = marshalProto(&pb.Action1Response{Ok: false, Code: pb.StatusCode_STATUS_CODE_INTERNAL_ERROR})
	Action1_ResponseOK = marshalProto(&pb.Action1Response{Ok: true, Code: pb.StatusCode_STATUS_OK})
	Action1_ResponseInvalidNumber = marshalProto(&pb.Action1Response{Ok: false, Code: pb.StatusCode_STATUS_CODE_INVALID_NUMBER})
	Action1_ResponseNumberAlreadyTaken = marshalProto(&pb.Action1Response{Ok: false, Code: pb.StatusCode_STATUS_CODE_NUMBER_ALREADY_TAKEN})
}
