package main

import (
	"context"
	"log"
	"os"
	"os/signal"
	"sync"
	"syscall"

	"blendwith.me/services/user_creation/service"
)

func main() {
	wg := &sync.WaitGroup{}
	wg.Add(1)

	s := service.NewInstance()

	s.SetShutdownHook(func(*service.Instance) { wg.Done() })

	// Starting the instance.
	err := s.Start()
	if err != nil {
		log.Fatal(err)
	}

	// Create a global context.
	// Cancelling this context will cause the service to
	// gracefully shutdown.
	ctx, cancel := context.WithCancelCause(context.Background())

	// Start a go routine that listens to syscalls
	// and exits on Ctrl + C.
	go func() {
		defer cancel(nil)

		sigterm := make(chan os.Signal, 1)
		signal.Notify(sigterm, syscall.SIGTERM, syscall.SIGINT)

		<-sigterm
	}()

	// Wait fot the context to be cancelled.
	<-ctx.Done()

	// Stop the instance.
	err = s.Stop()
	if err != nil {
		log.Fatal(err)
	}

	// Wait for the NATS connection to be closed.
	wg.Wait()

	log.Print("successfully shutdown service")
}
