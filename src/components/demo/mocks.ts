import { axiosMockAdapterInstance } from './requests';

export const mockResponses = {
  '/v1/customers/': {
    uid: '7aee19e1-b1ac-40e5-91e1-14eaefe73138',
    createDate: '2022-12-12T19:57:44.438588476Z',
    updateDate: '2022-12-12T19:57:44.623806274Z',
    email: 'john.snow@northwall.com',
    firstName: 'John',
    lastName: 'Snow',
  },
  '/v1/connectaccounts/render': {
    type: 'DEMO',
    linkingAccessToken: 'link-sandbox-613f419b-f7a0-4410-9a4a-e5c44212f7a1',
    validUntil: '2030-01-01T01:00:00Z',
  },
  '/v1/connectaccounts/connect': {},
  '/v1/paymentinstructions/': {
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
  },
  '/v1/payments': {
    uid: '834181ee-d39f-424c-950d-623876343885',
    createDate: '2022-12-12T20:39:35.067224Z',
    updateDate: '2022-12-12T20:39:37.742557719Z',
    status: 'INITIATED',
    amount: 10.99,
    paymentDate: '2030-01-17T18:00:00Z',
  },
};

export const createMocks = () => {
  axiosMockAdapterInstance
    .onPost('/v1/customers/')
    .reply(() => [201, mockResponses['/v1/customers/']]);

  axiosMockAdapterInstance
    .onPost('/v1/connectaccounts/render')
    .reply(() => [201, mockResponses['/v1/connectaccounts/render']]);

  axiosMockAdapterInstance
    .onPost('/v1/connectaccounts/connect')
    .reply(() => [201, mockResponses['/v1/connectaccounts/connect']]);

  axiosMockAdapterInstance
    .onPost('/v1/paymentinstructions/')
    .reply(() => [201, mockResponses['/v1/paymentinstructions/']]);

  axiosMockAdapterInstance
    .onPost('/v1/payments/')
    .reply(() => [201, mockResponses['/v1/payments']]);
};
