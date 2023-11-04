package config

import (
	"encoding/json"
	"os"
	"path"
	"runtime"
)

// Config represents the configuration of the service.
type Config struct {
	Nats struct {
		Servers []string `json:"servers"`
	} `json:"nats"`

	Db struct {
		Blend struct {
			URI string `json:"uri"`
		} `json:"blend"`
	} `json:"db"`
}

// Load loads configuration file relative to the location
// of this go file which is `${SERVICE_ROOT}/config`.
func Load(p string) (*Config, error) {
	_, f, _, _ := runtime.Caller(0)
	return LoadFrom(path.Join(path.Dir(f), p))
}

// LoadFrom loads configuration file from the
// given path.
func LoadFrom(path string) (*Config, error) {
	data, err := os.ReadFile(path)
	if err != nil {
		return nil, err
	}

	config := &Config{}
	err = json.Unmarshal(data, config)
	return config, err
}
