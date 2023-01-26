// eslint-disable-next-line import/no-relative-packages
import { ConnectAccountRender } from '../../src/core/domain/connectaccount/connectAccountRender';

interface ConnectAccountsRequest {
  firstName: string;
  lastName: string;
  email: string;
  subscriptionPlan: string;
}

interface ConnectAccountsResponse {
  request: string; // curl,
  response: ConnectAccountRender;
}

// TODO i don't think this request matches the response
export const connectAccounts = (
  request: ConnectAccountsRequest
): ConnectAccountsResponse => ({
  request: `curl --location --request POST 'https://stage.waivr.co/api/waivr-app/v1/connectaccounts/render' --header 'Authorization: BT-EX-67f14ac8-74c3-428c-b577-bd999bc4a599 fz05JGPc1NHgR24fxqHZCBDhDLFHjVlUs6YvwwVFmLYyhiTFPL' --header 'Content-Type: application/json' --data-raw '{
"merchantUid": "67f14ac8-74c3-428c-b577-bd999bc4a599"
}'`,
  response: {
    type: 'PLAID',
    linkingAccessToken: 'link-sandbox-613f419b-f7a0-4410-9a4a-e5c44212f7a1',
    validUntil: '2022-12-13T00:07:18Z',
    status: null,
    link_session_id: '457e3201-2049-48c9-ae74-fb482249c2fc',
    institution: {
      name: 'Chase',
      institution_id: 'ins_56',
    },
    accounts: [
      {
        id: 'goadzaX3gAseb6eJGnGDTXAkka31rAi43rg38',
        name: 'Plaid Checking',
        mask: '0000',
        type: 'depository',
        subtype: 'checking',
        verification_status: null,
        class_type: null,
      },
    ],
    account: {
      id: 'goadzaX3gAseb6eJGnGDTXAkka31rAi43rg38',
      name: 'Plaid Checking',
      mask: '0000',
      type: 'depository',
      subtype: 'checking',
      verification_status: null,
      class_type: null,
      account_id: 'goadzaX3gAseb6eJGnGDTXAkka31rAi43rg38',
      transfer_status: null,
      public_token: 'public-sandbox-4aa91553-561e-4bd6-ac59-d9d8f643fdce',
    },
  } as unknown as ConnectAccountRender,
});
