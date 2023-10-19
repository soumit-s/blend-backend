package red

import (
	"time"

	pb "blendwith.me/services/user_creation/models"
	"github.com/pquerna/otp/totp"
)

// Generates an OTP that is valid for 2000 seconds and
// returns the otp and secret.
func GenerateOTP(phn string) (string, string) {
	key, _ := totp.Generate(totp.GenerateOpts{
		Issuer:      "blend",
		AccountName: phn,
		Period:      2000,
	})

	otp, _ := totp.GenerateCode(key.Secret(), time.Now())

	return otp, key.Secret()
}

// Validates the OTP with the given secret.
func ValidateOTP(otp string, secret string) bool {
	return totp.Validate(otp, secret)
}

func VerifyOTPAndPromote(txnID string, otp string) (bool, error) {
	// Get the transaction
	data := pb.Stage{}
	err := GetTxnByID(txnID, &data)
	if _, ok := err.(*ErrTxnNotFound); ok {
		return false, err
	}

	if data.Stage != pb.StageType_STAGE_1 {
		return false, ErrInvalidAction
	}

	valid := ValidateOTP(otp, data.GetStage_1().Secret)
	if !valid {
		return valid, nil
	}

	err = PromoteTxnToStage2(txnID, &data)

	return valid, err
}
