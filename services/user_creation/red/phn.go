package red

import (
	"fmt"
	"net/http"
	"net/url"

	"blendwith.me/services/user_creation/config"
)

func getTwilioLookupApiUrl(phn string) string {
	return fmt.Sprintf("https://lookups.twilio.com/v1/PhoneNumbers/%v/", phn)
}

// Uses the Twilio Lookup API to check whether a given
// number is valid or not. It must be noted it does not
// check whether the number has a carrier or not.
func CheckIfPhoneNumberIsValid(phn string) (bool, error) {
	url, err := url.Parse(getTwilioLookupApiUrl(phn))
	if err != nil {
		return false, err
	}

	req, err := http.NewRequest(http.MethodGet, url.String(), nil)
	if err != nil {
		return false, err
	}
	req.SetBasicAuth(config.TwilioUserSID, config.TwilioUserAuthToken)

	res, err := http.DefaultClient.Do(req)
	if err != nil {
		return false, err
	}

	return res.StatusCode == http.StatusOK, nil
}
