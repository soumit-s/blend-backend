package db

import (
	"blendwith.me/services/user_mgmt/db/model"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var (
	// The 'blend' database.
	Blend *gorm.DB
)

const (
	TableUsers = "users"
)

// Connect establishes connection to the database.
func Connect() error {
	if blend, err := gorm.Open(postgres.Open(URI)); err != nil {
		return err
	} else {
		Blend = blend
	}
	return nil
}

// Disconnect closes the connection to the database.
func Disconnect() error {
	return nil
}

// RegisterModels runs migration for the models.
func RegisterModels() error {
	if err := Blend.AutoMigrate(&model.User{}); err != nil {
		return err
	}
	return nil
}
