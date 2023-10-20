package service

import (
	"log"

	"blendwith.me/services/user_creation/workers"
	"github.com/nats-io/nats.go"
)

type Instance struct {
	NatsConn       *nats.Conn
	Workers        []workers.Worker
	onShutdownHook func(*Instance)
}

func NewInstance() *Instance {
	return &Instance{
		Workers: []workers.Worker{
			workers.NewPingWorker(),
			&workers.Action1Worker{},
			&workers.Action2Worker{},
			&workers.Action3Worker{},
		},
	}
}

func (i *Instance) Start() error {
	if err := i.ConnectToNats(); err != nil {
		log.Print("failed to connect to NATS server !")
		return err
	}
	log.Print("successfully connected to NATS server")

	// Start the workers.
	if err := i.startWorkers(); err != nil {
		return err
	}

	return nil
}

func (i *Instance) startWorkers() error {
	log.Print("starting workers ...")
	for _, w := range i.Workers {
		log.Printf("starting worker '%v' ...", w.Name())
		if err := w.Start(i.NatsConn); err != nil {
			log.Printf("failed to start worker '%v' ...", w.Name())
			return err
		}
	}
	log.Print("successfully started all workers ...")
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
