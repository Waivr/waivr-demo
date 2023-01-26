// eslint-disable-next-line import/no-relative-packages
import { Customer } from '../../src/core/domain/customer/customer';

interface CreateCustomerRequest {
  firstName: string;
  lastName: string;
  email: string;
  subscriptionPlan: string;
}

interface CreateCustomerResponse {
  request: string; // curl,
  response: Customer;
}

export const createCustomer = (
  request: CreateCustomerRequest
): CreateCustomerResponse => ({
  request: `curl --location --request POST 'https://stage.waivr.co/api/waivr-app/v1/customers' --header 'Authorization: BT-EX-67f14ac8-74c3-428c-b577-bd999bc4a599 fz05JGPc1NHgR24fxqHZCBDhDLFHjVlUs6YvwwVFmLYyhiTFPL' --header 'Content-Type: application/json' --data-raw '{
"merchantUid": "67f14ac8-74c3-428c-b577-bd999bc4a599",
"email":${request.email},
"firstName": ${request.firstName},
"lastName": ${request.lastName},
}
}'`,
  response: {
    uid: '7aee19e1-b1ac-40e5-91e1-14eaefe73138',
    createDate: '2022-12-12T19:57:44.438588476Z',
    updateDate: '2022-12-12T19:57:44.623806274Z',
    email: request.email,
    firstName: request.firstName,
    lastName: request.lastName,
    phoneNumber: '4541239955',
    address: {
      line1: '5th Tower',
      line2: null,
      city: 'North Wall',
      state: 'Winterfell',
    },
  } as unknown as Customer,
});
