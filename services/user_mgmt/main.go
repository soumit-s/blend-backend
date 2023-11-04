package main

import (
	"os"
	"os/signal"
	"sync"
	"syscall"

	"blendwith.me/services/user_mgmt/config"
	"blendwith.me/services/user_mgmt/service"
	"blendwith.me/services/user_mgmt/worker"
)

func main() {
	// Create the service logger.
	logger := service.NewLogger("[ user-mgmt ]")

	// Load the configuration.
	cfg, err := config.Load("config.json")
	if err != nil {
		logger.LogERR("failed to load configuration file ...")
		logger.LogERR("%v", err)
		return
	}

	s, err := service.NewService(cfg, []service.Worker{
		worker.NewFetchWorker(),
		worker.NewCreateWorker(),
	})

	if err != nil {
		s.LogERR("failed to start service")
		s.LogERR("%v", err)
		return
	}

	wg := &sync.WaitGroup{}
	wg.Add(2)

	// Listen for Ctrl + C
	go func() {
		defer wg.Done()

		sigterm := make(chan os.Signal, 1)
		signal.Notify(sigterm, syscall.SIGTERM, syscall.SIGINT)
		<-sigterm

		s.LogINFO("Ctrl + C detected")
		s.LogINFO("initiating service shutdown")

		if err := s.Shutdown(); err != nil {
			s.LogERR("failed to gracefully shutdown service")
			s.LogERR("%v", err)
		}

	}()

	go func() {
		defer wg.Done()
		// Block until the service finishes
		<-s.Running()
		s.LogOK("service has successfully shutdown")
	}()

	// Wait for all the routines to finish executing.
	wg.Wait()
}
