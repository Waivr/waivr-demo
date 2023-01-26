// eslint-disable-next-line import/no-relative-packages
import { PaymentInstruction } from '../../src/core/domain/paymentinstruction/paymentInstruction';

interface PaymentInstructionsRequest {
  reference: string;
  amount: number;
  frequency: {
    recurrance: number;
    cycle: 'MONTHLY';
  };
}

interface PaymentInstructionsResponse {
  request: string; // curl,
  response: PaymentInstruction;
}

// TODO i don't think this request matches the response
export const paymentInstructions = (
  request: PaymentInstructionsRequest
): PaymentInstructionsResponse => ({
  request: `curl --location --request POST 'https://stage.waivr.co/api/waivr-app/v1/paymentinstructions' --header 'Authorization: BT-EX-67f14ac8-74c3-428c-b577-bd999bc4a599 fz05JGPc1NHgR24fxqHZCBDhDLFHjVlUs6YvwwVFmLYyhiTFPL' --header 'Content-Type: application/json' --data-raw '{
 "externalReferenceIdentifier" : "ancestry.com",
 "customerUid" : "7aee19e1-b1ac-40e5-91e1-14eaefe73138",
 "merchantUid": "67f14ac8-74c3-428c-b577-bd999bc4a599",
 "amount" : 29.99,
 "frequency" : {
   "recurrence" : 1,
   "cycle" : "MONTHLY"
 }
}'`,
  response: {
    uid: '48548386-99fb-4de4-b8f6-513945c944e8',
    customerUid: '7aee19e1-b1ac-40e5-91e1-14eaefe73138',
    merchantUid: '67f14ac8-74c3-428c-b577-bd999bc4a599',
    createDate: '2022-12-09T20:42:11.79212Z',
    updateDate: '2022-12-09T20:42:11.79212Z',
    externalReferenceIdentifier: 'ancestry.com',
    status: 'PENDING',
    amount: 29.99,
    frequency: {
      cycle: 'MONTHLY',
      recurrence: 1,
    },
    nextBillingDate: '2022-01-12T18:00:00Z',
    recurringEndDate: null,
    enableOptimalBillingDate: true,
    metadata: {
      optimalBillingDateAnalysis: {
        basedNextBillingDate: '2022-01-15T18:00:00Z',
        optimalBillingDates: [
          '2022-02-16T18:00:00Z',
          '2222-02-17T18:00:00Z',
          '2222-02-18T18:00:00Z',
        ],
      },
    },
  } as unknown as PaymentInstruction,
});
