package red

import (
	"log"
	"runtime"

	"github.com/redis/go-redis/v9"
)

const DbId = 0

var (
	rclient *redis.Client
)

func init() {
	rclient = redis.NewClient(&redis.Options{
		Addr: "localhost:6379",
		DB:   DbId,
	})

	// Add a finalizer to close the client.
	runtime.SetFinalizer(rclient, func(o interface{}) {
		r, _ := o.(*redis.Client)
		if err := r.Close(); err != nil {
			log.Printf("failed to close redis connection: %v", err)
		}
	})
}
