package red

import emailverifier "github.com/AfterShip/email-verifier"

var (
	verifier = emailverifier.NewVerifier()
)

// VerifyEmail verifies the email.
func VerifyEmail(email string) (bool, error) {
	res, err := verifier.Verify(email)
	if err != nil {
		return false, err
	}

	return res.Syntax.Valid, nil
}

// SendVerificationMail sends a verification mail at
// the given address.
func SendVerificationMail(email string) error {
	return nil
}
