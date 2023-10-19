package workers

import "github.com/nats-io/nats.go"

type Worker interface {
	// Starts the worker.
	Start(nc *nats.Conn) error

	// Returns the name of the worker.
	Name() string
}

// Type of the worker function in a Generic Worker.
type GenericWorkerFn func(GenericWorkerContext)

// Rrepresents a single function reply request service worker.
type GenericWorker struct {
	name   string
	worker GenericWorkerFn

	Subject string
	Grp     string
}

// Struct passed to the worker function in a Generic Worker.
type GenericWorkerContext struct {
	Worker *GenericWorker
	Msg    *nats.Msg
}

// Creates a new generic worker with the given name, subject, queue group and single function worker.
func NewGenericWorker(name string, subject string, grp string, worker GenericWorkerFn) *GenericWorker {
	return &GenericWorker{
		name: name, Subject: subject, Grp: grp, worker: worker,
	}
}

// Changes the name of the worker.
func (w *GenericWorker) SetName(name string) {
	w.name = name
}

// Returns the name of the worker.
func (w *GenericWorker) Name() string {
	return w.name
}

// Starts the worker.
func (w *GenericWorker) Start(nc *nats.Conn) error {
	_, err := nc.Subscribe(w.Subject, func(m *nats.Msg) {
		w.worker(GenericWorkerContext{Worker: w, Msg: m})
	})
	return err
}
