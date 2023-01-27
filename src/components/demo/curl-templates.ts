/**
 * @returns curl template with single quotes replaced. These are then added back escaped in CurlLine component
 */
export const createCustomer = (
  merchantUid: string,
  email: string,
  firstName: string,
  lastName: string
) => `curl --location --request POST 'https://stage.waivr.co/api/waivr-app/v1/customers' \
--header 'Authorization: BT-EX-67f14ac8-74c3-428c-b577-bd999bc4a599 fz05JGPc1NHgR24fxqHZCBDhDLFHjVlUs6YvwwVFmLYyhiTFPL' \
--header 'Content-Type: application/json' \
--data-raw '{
"merchantUid": "${merchantUid}",
"email": "${email.replaceAll("'", '&apos;')}",
"firstName": "${firstName.replaceAll("'", '&apos;')}",
"lastName": "${lastName.replaceAll("'", '&apos;')}"
}'`;
export const connectAccountsRender = (
  merchantUid: string
) => `curl --location --request POST 'https://stage.waivr.co/api/waivr-app/v1/connectaccounts/render' \
--header 'Authorization: BT-EX-67f14ac8-74c3-428c-b577-bd999bc4a599 fz05JGPc1NHgR24fxqHZCBDhDLFHjVlUs6YvwwVFmLYyhiTFPL' \
--header 'Content-Type: application/json' \
--data-raw '{
"merchantUid": "${merchantUid}"
}'`;

export const connectAccounts = (
  merchantUid: string,
  customerUid: string,
  institutionIdentifier: string,
  accountIdentifier: string,
  publicToken: string
) => `curl --location --request POST 'https://stage.waivr.co/api/waivr-app/v1/connectaccounts/connect' \
--header 'Authorization: BT-EX-67f14ac8-74c3-428c-b577-bd999bc4a599 fz05JGPc1NHgR24fxqHZCBDhDLFHjVlUs6YvwwVFmLYyhiTFPL' \
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
  externalReferenceIdentifier: string,
  customerUid: string,
  merchantUid: string,
  amount: string
) => `curl --location --request POST 'https://stage.waivr.co/api/waivr-app/v1/paymentinstructions' \
--header 'Authorization: BT-EX-67f14ac8-74c3-428c-b577-bd999bc4a599 fz05JGPc1NHgR24fxqHZCBDhDLFHjVlUs6YvwwVFmLYyhiTFPL' \
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

// TODO update this to be the correct format
export const confirmPayment = (
  externalReferenceIdentifier: string,
  customerUid: string,
  merchantUid: string
) => `curl --location --request POST 'https://stage.waivr.co/api/waivr-app/v1/payments/ach' \
--header 'Authorization: BT-EX-67f14ac8-74c3-428c-b577-bd999bc4a599 fz05JGPc1NHgR24fxqHZCBDhDLFHjVlUs6YvwwVFmLYyhiTFPL' \
--header 'Content-Type: application/json' \
--data-raw '{
"externalReferenceIdentifier": "${externalReferenceIdentifier}",
"customerUid": "${customerUid}",
"merchantUid": "${merchantUid}"
}'`;
