package service

type ServiceContext struct {
	// The service the worker is running inside.
	Service *Service
}

func NewServiceContext(s *Service, wname string) ServiceContext {
	sc := ServiceContext{
		Service: s,
	}

	return sc
}
