USER_CREATION_SERVICE_PATH=services/user_creation
GATEWAY_PATH=gateway

.PHONY: proto run-local-dev

proto: proto-gateway

proto-gateway:
	pbjs -t static-module -w es6 --es6 -o ${GATEWAY_PATH}/proto/index.js  ${USER_CREATION_SERVICE_PATH}/proto/actions.proto ${USER_CREATION_SERVICE_PATH}/proto/stages.proto
	pbts -o ${GATEWAY_PATH}/proto/index.d.ts ${GATEWAY_PATH}/proto/index.js

run-local-dev:
	python3 ./scripts/run-local-dev.py