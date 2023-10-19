# User Creation Service
This service is responsible for user creation. All its services can be accessed under the `user-creation.*` subject. There are 3 specific subjects that it listens to which include:
- [x] user-creation.action.1.*
- [x] user-creation.action.2.\*.\*
- [ ] user-creation.action.3.*
- [ ] user-creation.action.4.*

The user creation process has been divided into 4 stages.
1. In the first action the transaction is created and the OTP is generated and the secret required to validate the OTP is stored in a Redis database with the E.164 phone number as the key. The transaction ID and the OTP is returned in the response.

2. In the second stage the OTP is verified and the transaction is promoted to stage 2.

3. In the third stage the User ID is validated. Validation includes checking whether the UID
follows the guidelines. Moreover, the UID must not be already taken by some other user.

4. Not yet determined.

### Action 1
Action1 takes the E.164 compliant phone number as parameter in the subject.  
Example: `service.user-creation.action.1.+917689904562`
### Action 2
Action2 takes the the transaction Id and the OTP as parameters in the subject.  
Format: `service.user-creation.action.2.<txnID>.<OTP>`  
Example: `service.user-creation.action.2.74bc3a6ae6f4f9672046f865b3d3ce39.524122`

### Responses
Response to all actions are structured in the following manner.
```
{
    ok: bool        // whether the action was successfull
    code: int       // status code (can be Status OK or some error code).
    data: object    // actual data returned depending on the action.
}
```
The object `data` depends on the `action`. Take a look at `proto/actions.proto` and `proto/stages.proto` to get details about tbe responses. 