package db

import (
	"errors"

	"blendwith.me/services/user_mgmt/db/model"
	"gorm.io/gorm"
)

// FetchIdByUid fetches the ID of the user using their UID.
func FetchIdByUid(uid string) (uint64, error) {
	m := model.User{}
	err := Blend.Table(TableUsers).Where("uid = ?", uid).Select("id").First(&m).Error
	return uint64(m.ID), err
}

// FetchIdByPhone fetches the ID of the user registered with the phone number.
func FetchIdByPhone(phone string) (uint64, error) {
	m := model.User{}
	err := Blend.Table(TableUsers).Where("phone_number = ?", phone).Select("id").Error
	return uint64(m.ID), err
}

func FetchIdByField(field string, value string) (uint64, error) {
	switch field {
	case "uid":
		return FetchIdByUid(value)
	case "phone":
		return FetchIdByPhone(value)
	default:
		return 0, ErrInvalidFieldName
	}
}

func CreateUser(user *model.User) error {
	if err := Blend.Create(user).Error; err != nil {
		if errors.Is(err, gorm.ErrDuplicatedKey) {
			return ErrUserAlreadyExists
		} else {
			return ErrInternal
		}
	}

	return nil
}
