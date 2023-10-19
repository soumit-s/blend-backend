package red

import (
	"context"
	"crypto/md5"
	"encoding/hex"
	"errors"
	"fmt"
	"time"

	"blendwith.me/common/pdb"
	pb "blendwith.me/services/user_creation/models"
	"github.com/redis/go-redis/v9"
	"google.golang.org/protobuf/proto"
)

// GenerateTxnId generates a new Transaction Id.
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

// StartTxn starts a transaction to open a new account
// with the given phone number.
// It returns the transaction ID and the OTP.
// If a transaction already exists with the
// given number, then it returns an error.
func StartTxn(phn string) (string, string, error) {
	// Check if an user is registered with the number.
	exists, err := pdb.CheckIfUserExistsByPhoneNumber(phn)
	if err != nil {
		return "", "", NewErrInternal(err)
	} else if exists {
		return "", "", NewErrNumberAlreadyTaken(phn)
	}

	// Generate a transaction Id.
	txnId := GenerateTxnId(phn)

	// Generate an OTP.
	otp, secret := GenerateOTP(phn)

	data, _ := proto.Marshal(&pb.Stage{
		Stage: pb.StageType_STAGE_1,
		Data: &pb.Stage_Stage_1{
			Stage_1: &pb.Stage1{
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
		return "", "", NewErrInternal(err)
	}

	return txnId, otp, nil
}

// GetTxnByID fetches data about the transaction if it exists.
// If the transaction does not exist, then it returns
// error [ErrTxnNotFound].
func GetTxnByID(txnId string, data *pb.Stage) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	raw, err := rclient.Get(ctx, txnId).Result()
	if errors.Is(err, redis.Nil) {
		return NewErrTxnNotFound(txnId)
	} else if err != nil {
		return err
	}

	return proto.Unmarshal([]byte(raw), data)
}

// PromoteTxnToStage2 promotes a Stage-1 transaction to
// a Stage-2 transaction
func PromoteTxnToStage2(txnID string, data *pb.Stage) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	data.Stage = pb.StageType_STAGE_2
	raw, _ := proto.Marshal(data)

	err := rclient.Set(ctx, txnID, raw, 0).Err()
	return err
}
