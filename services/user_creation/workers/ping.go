package workers

import (
	"fmt"
)

type PingWorker = GenericWorker

func NewPingWorker() *PingWorker {
	return (*PingWorker)(NewGenericWorker("ping", PingSubjectName+".*", PingGrpName, func(ctx GenericWorkerContext) {
		msg := ctx.Msg
		name := msg.Subject[len(PingSubjectName+"."):]
		msg.Respond([]byte(fmt.Sprintf("Pong ! Your(%v) message was %v :)", name, string(msg.Data))))
	}))
}
