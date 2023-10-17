package pdb

import (
	"errors"

	"blendwith.me/common/pdb/models"
	"gorm.io/gorm"
)

type errUserNotFound struct{}

func (e errUserNotFound) Error() string {
	return "user with the given properties was not found !"
}

// Represents that the user was not found.
var ErrUserNotFound = errUserNotFound{}

func CheckIfUserExistsByPhoneNumber(phn string) (bool, error) {
	err := Users.Where("phone_number = ?", phn).Select("uid").First(&models.User{}).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return false, nil
	} else if err != nil {
		return false, err
	}
	return true, nil
}

func CheckIfUserExistsByUID(uid string) (bool, error) {
	err := Users.Where("uid = ?", uid).Select("uid").First(&models.User{}).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return false, nil
	} else if err != nil {
		return true, err
	}

	return true, nil
}

func FindUserByUID(uid string, user *models.User) error {
	r := Users.Where("uid = ?", uid).First(user)
	if r.Error != nil {
		if errors.Is(r.Error, gorm.ErrRecordNotFound) {
			return ErrUserNotFound
		} else {
			return r.Error
		}
	}

	return nil
}
