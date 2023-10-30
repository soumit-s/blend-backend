package service

type Worker interface {
	// Name returns the name of the worker.
	Name() string

	// Register registers the worker.
	Register(sc ServiceContext) error
}
