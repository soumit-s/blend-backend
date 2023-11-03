USER_CREATION_SERVICE_PATH=services/user_creation
USER_AUTH_SERVICE_PATH=services/user_auth
USER_MGMT_SERVICE_PATH=services/user_mgmt
GATEWAY_PATH=gateway

.PHONY: proto run-local-dev proto-user-mgmt

proto: proto-gateway proto-user-mgmt proto-user-creation

proto-gateway:
	pbjs -t static-module -w es6 --es6 -o ${GATEWAY_PATH}/proto/index.js  ${USER_CREATION_SERVICE_PATH}/proto/*.proto
	pbts -o ${GATEWAY_PATH}/proto/index.d.ts ${GATEWAY_PATH}/proto/index.js

proto-user-mgmt:
	protoc -I="." --proto_path="." --go_out="." --go_opt=module="blendwith.me" ${USER_MGMT_SERVICE_PATH}/proto/*.proto

proto-user-creation:
	protoc -I="." --proto_path="." --go_out="." --go_opt=module="blendwith.me" ${USER_CREATION_SERVICE_PATH}/proto/*.proto

run-local-dev:
	python3 ./scripts/run-local-dev.py