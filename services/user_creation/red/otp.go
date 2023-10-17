package red

import "github.com/pquerna/otp/totp"

// Generates an OTP that is valid for 2 seconds and
// returns the secret.
func GenerateOTP(phn string) string {
	key, _ := totp.Generate(totp.GenerateOpts{
		Issuer:      "blend",
		AccountName: phn,
		Period:      2000,
	})

	return key.Secret()
}

// Validates the OTP with the given secret.
func ValidateOTP(otp string, secret string) bool {
	return totp.Validate(otp, secret)
}
