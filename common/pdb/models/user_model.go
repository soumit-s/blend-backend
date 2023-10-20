package models

import "gorm.io/gorm"

// Represents a User.
type User struct {
	gorm.Model
	UID         string `gorm:"unique"` // User ID must be unique.
	PhoneNumber string `gorm:"unique"` // The phone number must be unque as well.
	Email       string // User recovery email.
	DisplayName string // User display name.
	Bio         string `gorm:"text"`
}
