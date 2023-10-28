PROTO_FILES=./proto/stages.proto ./proto/actions.proto

.PHONY: proto
# Builds the proto files.
proto:
	protoc -I=. --proto_path="../../" --go_out="." --go_opt=module="blendwith.me/services/user_creation" ${PROTO_FILES}