package red

import (
	"regexp"

	"blendwith.me/common/pdb"
)

var RegexpUid *regexp.Regexp

func init() {
	r, err := regexp.Compile("^[0-9a-zA-Z_\\$\\.]+$")
	if err != nil {
		panic(err)
	}

	RegexpUid = r
}

func ValidateUID(uid string) error {
	if !RegexpUid.Match([]byte(uid)) {
		return ErrInvalidUID
	}

	exists, err := pdb.CheckIfUserExistsByUID(uid)
	if err != nil {
		return err
	}

	if exists {
		return ErrUIDAlreadyTaken
	}

	return nil
}
