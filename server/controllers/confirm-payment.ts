// TODO update to payments ach
// eslint-disable-next-line import/no-relative-packages
import { PaymentInstruction } from '../../src/core/domain/paymentinstruction/paymentInstruction';

interface ConfirmPaymentRequest {
  reference: string;
}

interface ConfirmPaymentResponse {
  request: string; // curl,
  response: PaymentInstruction;
}

export const confirmPayment = (
  request: ConfirmPaymentRequest
): ConfirmPaymentResponse => ({
  request: `curl --location --request POST 'https://stage.waivr.co/api/waivr-app/v1/payments/ach' \
--header 'Authorization: BT-EX-67f14ac8-74c3-428c-b577-bd999bc4a599 fz05JGPc1NHgR24fxqHZCBDhDLFHjVlUs6YvwwVFmLYyhiTFPL' \
--header 'Content-Type: application/json' \
--data-raw '{
"externalReferenceIdentifier": "north-wall-armory-invoice-1670877136",
"customerUid": "7aee19e1-b1ac-40e5-91e1-14eaefe73138",
"merchantUid": "67f14ac8-74c3-428c-b577-bd999bc4a599"
}'`,
  response: {
    uid: '834181ee-d39f-424c-950d-623876343885',
    createDate: '2022-12-12T20:39:35.067224Z',
    updateDate: '2022-12-12T20:39:37.742557719Z',
    status: 'INITIATED',
    amount: 10.99,
    paymentDate: '2022-01-17T18:00:00Z',
  } as unknown as PaymentInstruction,
});
