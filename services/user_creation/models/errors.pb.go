// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        v3.12.4
// source: services/user_creation/proto/errors.proto

package models

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type UserAlreadyExistsError struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uid   bool `protobuf:"varint,1,opt,name=uid,proto3" json:"uid,omitempty"`
	Phone bool `protobuf:"varint,2,opt,name=phone,proto3" json:"phone,omitempty"`
	Email bool `protobuf:"varint,3,opt,name=email,proto3" json:"email,omitempty"`
}

func (x *UserAlreadyExistsError) Reset() {
	*x = UserAlreadyExistsError{}
	if protoimpl.UnsafeEnabled {
		mi := &file_services_user_creation_proto_errors_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UserAlreadyExistsError) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UserAlreadyExistsError) ProtoMessage() {}

func (x *UserAlreadyExistsError) ProtoReflect() protoreflect.Message {
	mi := &file_services_user_creation_proto_errors_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UserAlreadyExistsError.ProtoReflect.Descriptor instead.
func (*UserAlreadyExistsError) Descriptor() ([]byte, []int) {
	return file_services_user_creation_proto_errors_proto_rawDescGZIP(), []int{0}
}

func (x *UserAlreadyExistsError) GetUid() bool {
	if x != nil {
		return x.Uid
	}
	return false
}

func (x *UserAlreadyExistsError) GetPhone() bool {
	if x != nil {
		return x.Phone
	}
	return false
}

func (x *UserAlreadyExistsError) GetEmail() bool {
	if x != nil {
		return x.Email
	}
	return false
}

type Error struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Types that are assignable to Value:
	//
	//	*Error_UserAlreayExists
	Value isError_Value `protobuf_oneof:"value"`
}

func (x *Error) Reset() {
	*x = Error{}
	if protoimpl.UnsafeEnabled {
		mi := &file_services_user_creation_proto_errors_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Error) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Error) ProtoMessage() {}

func (x *Error) ProtoReflect() protoreflect.Message {
	mi := &file_services_user_creation_proto_errors_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Error.ProtoReflect.Descriptor instead.
func (*Error) Descriptor() ([]byte, []int) {
	return file_services_user_creation_proto_errors_proto_rawDescGZIP(), []int{1}
}

func (m *Error) GetValue() isError_Value {
	if m != nil {
		return m.Value
	}
	return nil
}

func (x *Error) GetUserAlreayExists() *UserAlreadyExistsError {
	if x, ok := x.GetValue().(*Error_UserAlreayExists); ok {
		return x.UserAlreayExists
	}
	return nil
}

type isError_Value interface {
	isError_Value()
}

type Error_UserAlreayExists struct {
	UserAlreayExists *UserAlreadyExistsError `protobuf:"bytes,1,opt,name=userAlreayExists,proto3,oneof"`
}

func (*Error_UserAlreayExists) isError_Value() {}

var File_services_user_creation_proto_errors_proto protoreflect.FileDescriptor

var file_services_user_creation_proto_errors_proto_rawDesc = []byte{
	0x0a, 0x29, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2f, 0x75, 0x73, 0x65, 0x72, 0x5f,
	0x63, 0x72, 0x65, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x65,
	0x72, 0x72, 0x6f, 0x72, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x22, 0x62, 0x6c, 0x65,
	0x6e, 0x64, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x75, 0x73, 0x65, 0x72,
	0x5f, 0x63, 0x72, 0x65, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22,
	0x56, 0x0a, 0x16, 0x55, 0x73, 0x65, 0x72, 0x41, 0x6c, 0x72, 0x65, 0x61, 0x64, 0x79, 0x45, 0x78,
	0x69, 0x73, 0x74, 0x73, 0x45, 0x72, 0x72, 0x6f, 0x72, 0x12, 0x10, 0x0a, 0x03, 0x75, 0x69, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x08, 0x52, 0x03, 0x75, 0x69, 0x64, 0x12, 0x14, 0x0a, 0x05, 0x70,
	0x68, 0x6f, 0x6e, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x08, 0x52, 0x05, 0x70, 0x68, 0x6f, 0x6e,
	0x65, 0x12, 0x14, 0x0a, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x18, 0x03, 0x20, 0x01, 0x28, 0x08,
	0x52, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x22, 0x7a, 0x0a, 0x05, 0x45, 0x72, 0x72, 0x6f, 0x72,
	0x12, 0x68, 0x0a, 0x10, 0x75, 0x73, 0x65, 0x72, 0x41, 0x6c, 0x72, 0x65, 0x61, 0x79, 0x45, 0x78,
	0x69, 0x73, 0x74, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x3a, 0x2e, 0x62, 0x6c, 0x65,
	0x6e, 0x64, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x75, 0x73, 0x65, 0x72,
	0x5f, 0x63, 0x72, 0x65, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e,
	0x55, 0x73, 0x65, 0x72, 0x41, 0x6c, 0x72, 0x65, 0x61, 0x64, 0x79, 0x45, 0x78, 0x69, 0x73, 0x74,
	0x73, 0x45, 0x72, 0x72, 0x6f, 0x72, 0x48, 0x00, 0x52, 0x10, 0x75, 0x73, 0x65, 0x72, 0x41, 0x6c,
	0x72, 0x65, 0x61, 0x79, 0x45, 0x78, 0x69, 0x73, 0x74, 0x73, 0x42, 0x07, 0x0a, 0x05, 0x76, 0x61,
	0x6c, 0x75, 0x65, 0x42, 0x2c, 0x5a, 0x2a, 0x62, 0x6c, 0x65, 0x6e, 0x64, 0x77, 0x69, 0x74, 0x68,
	0x2e, 0x6d, 0x65, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2f, 0x75, 0x73, 0x65,
	0x72, 0x5f, 0x63, 0x72, 0x65, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2f, 0x6d, 0x6f, 0x64, 0x65, 0x6c,
	0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_services_user_creation_proto_errors_proto_rawDescOnce sync.Once
	file_services_user_creation_proto_errors_proto_rawDescData = file_services_user_creation_proto_errors_proto_rawDesc
)

func file_services_user_creation_proto_errors_proto_rawDescGZIP() []byte {
	file_services_user_creation_proto_errors_proto_rawDescOnce.Do(func() {
		file_services_user_creation_proto_errors_proto_rawDescData = protoimpl.X.CompressGZIP(file_services_user_creation_proto_errors_proto_rawDescData)
	})
	return file_services_user_creation_proto_errors_proto_rawDescData
}

var file_services_user_creation_proto_errors_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_services_user_creation_proto_errors_proto_goTypes = []interface{}{
	(*UserAlreadyExistsError)(nil), // 0: blend.services.user_creation.proto.UserAlreadyExistsError
	(*Error)(nil),                  // 1: blend.services.user_creation.proto.Error
}
var file_services_user_creation_proto_errors_proto_depIdxs = []int32{
	0, // 0: blend.services.user_creation.proto.Error.userAlreayExists:type_name -> blend.services.user_creation.proto.UserAlreadyExistsError
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_services_user_creation_proto_errors_proto_init() }
func file_services_user_creation_proto_errors_proto_init() {
	if File_services_user_creation_proto_errors_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_services_user_creation_proto_errors_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UserAlreadyExistsError); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_services_user_creation_proto_errors_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Error); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	file_services_user_creation_proto_errors_proto_msgTypes[1].OneofWrappers = []interface{}{
		(*Error_UserAlreayExists)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_services_user_creation_proto_errors_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_services_user_creation_proto_errors_proto_goTypes,
		DependencyIndexes: file_services_user_creation_proto_errors_proto_depIdxs,
		MessageInfos:      file_services_user_creation_proto_errors_proto_msgTypes,
	}.Build()
	File_services_user_creation_proto_errors_proto = out.File
	file_services_user_creation_proto_errors_proto_rawDesc = nil
	file_services_user_creation_proto_errors_proto_goTypes = nil
	file_services_user_creation_proto_errors_proto_depIdxs = nil
}