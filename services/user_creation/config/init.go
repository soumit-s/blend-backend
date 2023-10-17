package config

import (
	"errors"
	"log"
	"os"

	"github.com/joho/godotenv"
)

var (
	TwilioUserSID       string
	TwilioUserAuthToken string
)

func init() {
	// Load the ENV file.
	if err := godotenv.Load(".env"); err != nil {
		log.Fatal(err)
	}

	var ok bool

	TwilioUserSID, ok = os.LookupEnv("TWILIO_USER_SID")
	if !ok {
		log.Fatal(errors.New("env variable TWILLIO_USER_SID not set"))
	}

	TwilioUserAuthToken, ok = os.LookupEnv("TWILIO_USER_AUTH_TOKEN")
	if !ok {
		log.Fatal(errors.New("env variable TWILLIO_USER_AUTH_TOKEN not set"))
	}
}
