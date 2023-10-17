package pdb

import (
	"log"

	"blendwith.me/common/pdb/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

const (
	uri = "host=localhost user=soumit password=soumit dbname=blend port=5432 sslmode=disable TimeZone=Asia/Shanghai"
)

var (
	Blend *gorm.DB // The database.
	Users *gorm.DB // "users" table.
)

// Connects to the Postgres Database.
// Returns error on failure.
func Connect() (err error) {
	Blend, err = gorm.Open(postgres.Open(uri), &gorm.Config{})
	return err
}

// For now it does nothing
func Disconnect() error {
	return nil
}

// Registers new models and migrates existing
// models. It returns a list of errors.
func RegisterModels() []error {
	errs := make([]error, 0)
	addToErr := func(err error) {
		if err != nil {
			errs = append(errs, err)
		}
	}

	addToErr(Blend.AutoMigrate(&models.User{}))

	return errs
}

// Iniitalize the tables.
func Setup() {
	Users = Blend.Table("users")
}

func init() {
	if err := Connect(); err != nil {
		log.Fatal(err)
	}

	if errs := RegisterModels(); len(errs) != 0 {
		log.Fatal(errs)
	}

	Setup()
}
