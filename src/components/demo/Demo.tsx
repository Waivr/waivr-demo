import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { BankConnect } from '../bank-connect/BankConnect';
import { Consent } from '../bank-connect/Consent';
import { Button } from '../button/Button';
import { CurlBox, Props as CurlProps, CurlLog } from '../curl-box/CurlBox';
import { Form } from '../form/Form';
import { FormRow } from '../form/FormRow';
import { Panel } from '../panel/Panel';
import { PanelHeader } from '../panel/PanelHeader';
import { Select } from '../select/Select';
import DemoLayout from './layout/DemoLayout';

const Demo = () => {
  const [openBankConnect, setOpenBankConnect] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [curl, setCurl] = React.useState({
    logs: [
      {
        id: '0',
        title: 'Create customer',
      },
    ],
  } as CurlProps);

  const timeout = (delay: number) =>
    // eslint-disable-next-line no-promise-executor-return
    new Promise((res) => setTimeout(res, delay));

  const handleReset = () => {
    setOpenBankConnect(false);
    setCurrentStep(0);
    setCurl({
      logs: [
        {
          id: '0',
          title: 'Create customer',
        },
      ],
    });
  };

  const updateCurlLogs = (log: CurlLog, logs: CurlLog[]): CurlLog[] => {
    if (log != null && log.id != null) {
      // eslint-disable-next-line react/prop-types
      const logIndex = logs.findIndex((l: any) => l.id === log.id);
      if (logIndex >= 0) {
        // eslint-disable-next-line react/prop-types
        logs[logIndex] = log;
      }
    }
    return logs;
  };

  const handlePayByBank = async () => {
    setOpenBankConnect(false);
    setCurrentStep(0);

    // Steps:
    // 1. Call api to create customer
    // 2. open bank connect

    let { logs } = curl;

    let currentState = {
      id: '0',
      response: '',
      request: `curl --location --request POST 'https://stage.waivr.co/api/waivr-app/v1/customers' \
      --header 'Authorization: BT-EX-67f14ac8-74c3-428c-b577-bd999bc4a599 fz05JGPc1NHgR24fxqHZCBDhDLFHjVlUs6YvwwVFmLYyhiTFPL' \
      --header 'Content-Type: application/json' \
      --data-raw '{
      "merchantUid": "67f14ac8-74c3-428c-b577-bd999bc4a599",
      "email": "john.snow@northwall.com",
      "firstName": "John",
      "lastName": "Snow",
      }
      }'`,
      title: 'creating customer...',
      isLoading: true,
    };

    logs = updateCurlLogs(currentState, logs);

    setCurl({ logs });
    // TODO move logic to api layer and remove simulated delay
    await timeout(2000);
    currentState = {
      ...currentState,
      isLoading: false,
      response: `{
"uid": "7aee19e1-b1ac-40e5-91e1-14eaefe73138",
"createDate": "2022-12-12T19:57:44.438588476Z",
"updateDate": "2022-12-12T19:57:44.623806274Z",
"email": "john.snow@northwall.com",
"firstName": "John",
"lastName": "Snow",
"phoneNumber": "4541239955",
"address": {
"line1": "5th Tower",
"line2": null,
"city": "North Wall",
"state": "Winterfell"
}}`,
      title: 'Customer is created',
    };

    logs = updateCurlLogs(currentState, logs);
    setCurl({ logs });
    await timeout(1000);
    setOpenBankConnect(true);
  };

  const handleBankConnect = async () => {
    setOpenBankConnect(false);
    // Steps:
    // 1. Hide bank connect modal
    // 2. Call api to connect account
    // 3. Move to confirm step

    let { logs } = curl;

    let currentState = {
      id: '1',
      response: '',
      request: `curl --location --request POST 'https://stage.waivr.co/api/waivr-app/v1/connectaccounts/render' \
--header 'Authorization: BT-EX-67f14ac8-74c3-428c-b577-bd999bc4a599 fz05JGPc1NHgR24fxqHZCBDhDLFHjVlUs6YvwwVFmLYyhiTFPL' \
--header 'Content-Type: application/json' \
--data-raw '{
"merchantUid": "67f14ac8-74c3-428c-b577-bd999bc4a599"
}'`,
      title: 'Establishing bank connection...',
      isLoading: true,
    };

    logs.push(currentState);
    setCurl({ logs });
    // TODO move logic to api layer and remove simulated delay
    await timeout(2000);
    currentState = {
      ...currentState,
      isLoading: false,
      response: `{
  "type": "PLAID",
  "linkingAccessToken": "link-sandbox-613f419b-f7a0-4410-9a4a-e5c44212f7a1",
  "validUntil": "2022-12-13T00:07:18Z",

  "status": null,
  "link_session_id": "457e3201-2049-48c9-ae74-fb482249c2fc",
  "institution": {
    "name": "Chase",
    "institution_id": "ins_56"
  },
  "accounts": [
    {
      "id": "goadzaX3gAseb6eJGnGDTXAkka31rAi43rg38",
      "name": "Plaid Checking",
      "mask": "0000",
      "type": "depository",
      "subtype": "checking",
      "verification_status": null,
      "class_type": null
    }
  ],
  "account": {
    "id": "goadzaX3gAseb6eJGnGDTXAkka31rAi43rg38",
    "name": "Plaid Checking",
    "mask": "0000",
    "type": "depository",
    "subtype": "checking",
    "verification_status": null,
    "class_type": null,
    "account_id": "goadzaX3gAseb6eJGnGDTXAkka31rAi43rg38",
    "transfer_status": null,
    "public_token": "public-sandbox-4aa91553-561e-4bd6-ac59-d9d8f643fdce"
  }
}
`,
      title: 'BANK CONNECTION IS ESTABLISHED',
    };

    logs = updateCurlLogs(currentState, logs);

    setCurl({ logs });
    await timeout(1000);
    setCurrentStep(1);
    // TODO scroll to
  };

  const handleConfirmPayment = async () => {
    // Steps:
    // 1. Call api to confirm payment

    let { logs } = curl;

    let currentState = {
      id: '2',
      response: '',
      request: `curl --location --request POST 'https://stage.waivr.co/api/waivr-app/v1/payments/ach' \
--header 'Authorization: BT-EX-67f14ac8-74c3-428c-b577-bd999bc4a599 fz05JGPc1NHgR24fxqHZCBDhDLFHjVlUs6YvwwVFmLYyhiTFPL' \
--header 'Content-Type: application/json' \
--data-raw '{
"externalReferenceIdentifier": "north-wall-armory-invoice-1670877136",
"customerUid": "7aee19e1-b1ac-40e5-91e1-14eaefe73138",
"merchantUid": "67f14ac8-74c3-428c-b577-bd999bc4a599"
}'`,
      title: 'Confirming payment...',
      isLoading: true,
    };
    logs.push(currentState);
    setCurl({ logs });
    // TODO move logic to api layer and remove simulated delay
    await timeout(2000);
    currentState = {
      ...currentState,
      isLoading: false,
      response: `{
      "uid": "834181ee-d39f-424c-950d-623876343885",
      "createDate": "2022-12-12T20:39:35.067224Z",
      "updateDate": "2022-12-12T20:39:37.742557719Z",
      "status": "INITIATED",
      "amount": 10.990000000000,
      "paymentDate": "2022-01-17T18:00:00Z"
      }
      `,
      title: 'Payment is initiated',
    };
    logs = updateCurlLogs(currentState, logs);

    setCurl({ logs });
    await timeout(1000);
    setCurrentStep(2);
  };

  return (
    <DemoLayout>
      {openBankConnect ? (
        <BankConnect>
          <Consent onClick={() => handleBankConnect()} />
        </BankConnect>
      ) : null}
      <Grid container columnSpacing={{ xs: 1, sm: 1, md: 4, lg: 10 }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ marginTop: '55px' }}>
            {currentStep === 0 ? (
              <Panel>
                <PanelHeader label="Subscriber" />
                <Box sx={{ marginTop: '24px' }}>
                  <Form>
                    <FormRow
                      label="First Name"
                      defaultValue="John"
                      type="text"
                    />
                    <FormRow
                      label="Last Name"
                      defaultValue="Snow"
                      type="text"
                    />
                    <FormRow
                      label="Email"
                      type="email"
                      defaultValue="johnsnow@northwall.com"
                    />
                  </Form>
                </Box>
                <Box sx={{ marginTop: '34px' }}>
                  <PanelHeader label="Subscription Plan" />
                </Box>
                <Box sx={{ marginTop: '15px', textAlign: 'center' }}>
                  <Select
                    name="subscription"
                    options={[
                      { label: '$29.99/month', value: '1', selected: true },
                      { label: '$19.99/month', value: '2' },
                    ]}
                  />
                </Box>
                <Box sx={{ marginTop: '37px', textAlign: 'center' }}>
                  <Button
                    backgroundColor="#172836"
                    textColor="#fff"
                    label="Pay by Bank"
                    onClick={() => handlePayByBank()}
                  />
                </Box>
              </Panel>
            ) : null}
            {currentStep === 1 ? (
              <Panel>
                <PanelHeader label="Basic Checking (*8230)" />
                <Box sx={{ typography: 'body1' }}>$29.99/mo</Box>
                <Box sx={{ typography: 'body1' }}>Every 15th of the month</Box>
                <Box sx={{ marginTop: '47px', textAlign: 'center' }}>
                  <Button
                    backgroundColor="#172836"
                    textColor="#fff"
                    label="Confirm Payment"
                    onClick={() => handleConfirmPayment()}
                  />
                </Box>
              </Panel>
            ) : null}
            {currentStep === 2 ? (
              <Panel>
                <Box sx={{ margin: '70px auto', textAlign: 'center' }}>
                  <PanelHeader label="Payment Successful" />
                </Box>
              </Panel>
            ) : null}
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <CurlBox {...curl} />
          <Box sx={{ textAlign: 'right', marginTop: '23px' }}>
            <Button
              backgroundColor="#E2FF62"
              textColor="#000"
              label="Reset"
              onClick={() => handleReset()}
            />
          </Box>
        </Grid>
      </Grid>
    </DemoLayout>
  );
};

export default Demo;
