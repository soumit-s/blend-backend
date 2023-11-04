package service

import (
	"errors"
	"strings"
	"sync"

	"blendwith.me/services/user_mgmt/config"
	"blendwith.me/services/user_mgmt/db"
	"github.com/nats-io/nats.go"
)

type Service struct {
	Logger
	Config *config.Config

	NatsConn *nats.Conn
	workers  []Worker

	mut *sync.Mutex

	running chan error
}

func NewService(cfg *config.Config, workers []Worker) (*Service, error) {
	s := &Service{
		Logger:  Logger{Prefix: "[ user-mgmt ]"},
		Config:  cfg,
		workers: workers,
		mut:     &sync.Mutex{},
	}

	if err := s.init(); err != nil {
		return nil, err
	}

	s.running = make(chan error, 1)

	return s, nil
}

// Returns the name of the service.
func (s *Service) Name() string {
	return "user-mgmt"
}

// Initializes the service.
func (s *Service) init() error {
	if err := s.initDb(); err != nil {
		s.LogERR("failed to establish connection to Postgres database")
		return err
	}

	if err := s.initNats(); err != nil {
		return err
	}

	if err := s.registerWorkers(); err != nil {
		s.LogERR("failed to register workers")
		return err
	}
	s.LogOK("successfully registered all workers")
	return nil
}

func (s *Service) initDb() error {
	return db.Connect(s.Config)
}

func (s *Service) initNats() error {
	conn, err := nats.Connect(s.getNatsURL())
	if err != nil {
		s.LogERR("failed to connect to NATS")
		return err
	}
	s.LogOK("successfully connected to NATS")
	s.NatsConn = conn
	return nil
}

func (s *Service) getNatsURL() string {
	url := ""
	for _, server := range s.Config.Nats.Servers {
		url += server + ", "
	}
	return strings.TrimSuffix(url, ",")
}

func (s *Service) registerWorkers() error {
	for _, w := range s.workers {
		err := w.Register(ServiceContext{Service: s})
		if err != nil {
			s.LogERR("failed to register worker '%v'", w.Name())
			return err
		}
		s.LogOK("successfully registered worker '%v'", w.Name())
	}

	return nil
}

func (s *Service) Running() chan error {
	return s.running
}

func (s *Service) Shutdown() error {
	s.mut.Lock()
	defer s.mut.Unlock()

	if s.NatsConn == nil {
		return errors.New("service not running")
	}

	// Close the NATS connection.
	if err := s.NatsConn.Drain(); err != nil {
		return err
	}

	// Close connection pool to database.
	db.Disconnect()

	close(s.running)
	return nil
}
