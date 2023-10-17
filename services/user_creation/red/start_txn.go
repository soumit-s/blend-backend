package red

import (
	"context"
	"crypto/md5"
	"encoding/hex"
	"fmt"
	"time"

	"blendwith.me/common/pdb"
	"blendwith.me/services/user_creation/models"
	"github.com/redis/go-redis/v9"
	"google.golang.org/protobuf/proto"
)

// Generates a new Transaction Id.
func GenerateTxnId(phn string) string {
	for i := 0; true; i++ {
		hb := md5.Sum([]byte(fmt.Sprintf("%v-%d", phn, i)))
		txnId := hex.EncodeToString(hb[:])

		_, err := rclient.Get(context.TODO(), txnId).Result()
		if err == redis.Nil {
			return txnId
		}
	}

	hb := md5.Sum([]byte(phn))
	return hex.EncodeToString(hb[:])
}

// Starts a transaction to open a new account
// with the given phone number. The transaction
// ID is the phone number itself.
// If a transaction already exists with the
// given number, then it returns an error.
func StartTxn(phn string) error {
	// Check if an user is registered with the number.
	exists, err := pdb.CheckIfUserExistsByPhoneNumber(phn)
	if err != nil {
		return NewErrInternal(err)
	} else if exists {
		return NewErrNumberAlreadyTaken(phn)
	}

	// Generate a transaction Id.
	txnId := GenerateTxnId(phn)

	// Generate an OTP.
	secret := GenerateOTP(phn)

	data, _ := proto.Marshal(&models.Stage{
		Stage: models.StageType_STAGE_1,
		Data: &models.Stage_Stage_1{
			Stage_1: &models.Stage1{
				Secret: secret,
				Number: phn,
			},
		},
	})

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	// Save the Secret.
	err = rclient.Set(ctx, txnId, data, 0).Err()
	if err != nil {
		return NewErrInternal(err)
	}

	return nil
}
