/**
 * @returns curl template with single quotes replaced. These are then added back escaped in CurlLine component
 */
export const createCustomer = (
  token: string,
  merchantUid: string,
  email: string,
  firstName: string,
  lastName: string
) => `curl --location --request POST 'https://stage.waivr.co/api/waivr-app/v1/customers' \
--header 'Authorization: ${token}' \
--header 'Content-Type: application/json' \
--data-raw '{
"merchantUid": "${merchantUid}",
"email": "${email.replaceAll("'", '&apos;')}",
"firstName": "${firstName.replaceAll("'", '&apos;')}",
"lastName": "${lastName.replaceAll("'", '&apos;')}"
}'`;
export const connectAccountsRender = (
  token: string,
  merchantUid: string
) => `curl --location --request POST 'https://stage.waivr.co/api/waivr-app/v1/connectaccounts/render' \
--header 'Authorization: ${token}' \
--header 'Content-Type: application/json' \
--data-raw '{
"merchantUid": "${merchantUid}"
}'`;

export const connectAccounts = (
  token: string,
  merchantUid: string,
  customerUid: string,
  institutionIdentifier: string,
  accountIdentifier: string,
  publicToken: string
) => `curl --location --request POST 'https://stage.waivr.co/api/waivr-app/v1/connectaccounts/connect' \
--header 'Authorization: ${token}' \
--header 'Content-Type: application/json' \
--data-raw '{
 "merchantUid": "${merchantUid}",
 "customerUid": "${customerUid}",
 "institution": {
   "identifier": "${institutionIdentifier}",
   "accountIdentifier": "${accountIdentifier}"
 },
 "publicToken": "${publicToken}"
}'`;
export const createPaymentInstructions = (
  token: string,
  externalReferenceIdentifier: string,
  customerUid: string,
  merchantUid: string,
  amount: string
) => `curl --location --request POST 'https://stage.waivr.co/api/waivr-app/v1/paymentinstructions' \
--header 'Authorization: ${token}' \
--header 'Content-Type: application/json' \
--data-raw '{
 "externalReferenceIdentifier" : "${externalReferenceIdentifier}",
 "customerUid" : "${customerUid}",
 "merchantUid": "${merchantUid}",
 "amount" :${amount},
 "frequency" : {
   "recurrence" : 1,
   "cycle" : "MONTHLY"
 }
}'`;
export const findPaymentInstructionSummary = (
  token: string,
  paymentInstructionUid: string,
) => `curl --location --request GET 'https://stage.waivr.co/api/waivr-app/v1/paymentinstructions/${paymentInstructionUid}/summary' \
--header 'Authorization: ${token}' \
--header 'Content-Type: application/json' \
--data-raw ''`;

export const confirmPayment = (
  token: string,
  externalReferenceIdentifier: string,
  customerUid: string,
  merchantUid: string
) => `curl --location --request POST 'https://stage.waivr.co/api/waivr-app/v1/payments' \
--header 'Authorization: ${token}' \
--header 'Content-Type: application/json' \
--data-raw '{
"externalReferenceIdentifier": "${externalReferenceIdentifier}",
"customerUid": "${customerUid}",
"merchantUid": "${merchantUid}"
}'`;
