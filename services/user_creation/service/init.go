package service

import (
	"log"

	"blendwith.me/services/user_creation/workers"
	"github.com/nats-io/nats.go"
)

type Instance struct {
	NatsConn *nats.Conn

	onShutdownHook func(*Instance)
}

func (i *Instance) Start() error {
	if err := i.ConnectToNats(); err != nil {
		log.Print("failed to connect to NATS server !")
		return err
	}
	log.Print("successfully connected to NATS server")

	// Start the workers.
	log.Print("starting ping worker")
	workers.StartPingWorker(i.NatsConn)
	log.Print("successfully started ping worker")

	// Start action.1 worker
	log.Print("starting action.1 worker")
	_, err := workers.StartAction1Worker(i.NatsConn)
	if err != nil {
		log.Print("failed to start action.1 worker !")
		return err
	}
	log.Print("successfully started action.1 worker")

	log.Print("successfully started all workers")

	return nil
}

func (i *Instance) Stop() error {
	log.Print("draining and closing the NATS connection")
	err := i.NatsConn.Drain()
	if err != nil {
		log.Print("error while trying to drain NATS connection")
	}
	return err
}

func (i *Instance) ConnectToNats() error {
	nc, err := nats.Connect(nats.DefaultURL, nats.ClosedHandler(i.closeHandler))
	if err != nil {
		return err
	} else {
		i.NatsConn = nc
	}

	return nil
}

func (i *Instance) closeHandler(c *nats.Conn) {
	log.Print("successfully closed NATS connection")
	i.onShutdownHook(i)
}

func (i *Instance) SetShutdownHook(hook func(*Instance)) {
	i.onShutdownHook = hook
}
