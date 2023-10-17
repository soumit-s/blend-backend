package workers

import (
	"fmt"

	"github.com/nats-io/nats.go"
)

func StartPingWorker(nc *nats.Conn) {
	nc.Subscribe(PingSubjectName+".*", func(msg *nats.Msg) {
		name := msg.Subject[len(PingSubjectName+"."):]
		msg.Respond([]byte(fmt.Sprintf("Pong ! Your(%v) message was %v :)", name, string(msg.Data))))
	})
}
