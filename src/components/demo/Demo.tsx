import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { AccountSelection } from '../bank-connect/AccountSelection';
import { BankConnect } from '../bank-connect/BankConnect';
import { BankLogin } from '../bank-connect/BankLogin';
import { BankSelect } from '../bank-connect/BankSelect';
import { Consent } from '../bank-connect/Consent';
import { Success } from '../bank-connect/Success';
import { Button } from '../button/Button';
import { CurlBox, Props as CurlProps, CurlLog } from '../curl-box/CurlBox';
import { Panel } from '../panel/Panel';
import { PanelHeader } from '../panel/PanelHeader';
import { Option } from '../select/Select';
import DemoLayout from './layout/DemoLayout';
import { SubscriptionPanel } from './SubscriptionPanel';
import {
  confirmPayment,
  connectAccounts,
  createCustomer,
  paymentInstructions,
} from './requests';

const Demo = () => {
  const [openBankConnect, setOpenBankConnect] = React.useState(false);
  const [subscriptions, setSubscriptions] = React.useState([
    { label: '$29.99/month', value: '1', selected: true },
    { label: '$19.99/month', value: '2' },
  ]);
  const [firstName, setFirstName] = React.useState('John');
  const [lastName, setLastName] = React.useState('Snow');
  const [email, setEmail] = React.useState('johnsnow@northwall.com');
  // Manage the bank connect screens
  const [bankConnectScreen, setBankConnectScreen] = React.useState(0);
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
    setBankConnectScreen(0);
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

  const handleSubscriptionSelect = (selectedOption: Option) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const item of subscriptions) {
      if (item.value === selectedOption.value) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    }

    setSubscriptions([...subscriptions]);
  };

  const updateCurlLogs = (log: CurlLog, logs: CurlLog[]): CurlLog[] => {
    if (log != null && log.id != null) {
      const logIndex = logs.findIndex((l: any) => l.id === log.id);
      if (logIndex >= 0) {
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
    // 2. open bank connect ui

    let { logs } = curl;

    let currentState = {
      id: '0',
      response: '',
      request: '',
      title: 'creating customer...',
      isLoading: true,
    };

    logs = updateCurlLogs(currentState, logs);

    setCurl({ logs });

    // Create the customer
    const { response, error } = await createCustomer({
      firstName,
      lastName,
      email,
      subscription: subscriptions.find((s) => s.selected === true)?.value,
    });
    if (response != null) {
      currentState = {
        ...currentState,
        isLoading: false,
        request: response.data.request,
        response: JSON.stringify(response.data.response),
        title: 'Customer is created',
      };
    }
    if (error != null) {
      currentState = {
        ...currentState,
        isLoading: false,
        response: error,
        title: 'Error creating customer',
      };
    }

    logs = updateCurlLogs(currentState, logs);
    setCurl({ logs });
    // Open bank connect ui
    setOpenBankConnect(true);
  };

  const handleBankConnect = async () => {
    // Continue bank connect flow until it is done
    if (bankConnectScreen <= 3) {
      setBankConnectScreen(bankConnectScreen + 1);
    } else {
      setOpenBankConnect(false);
      setBankConnectScreen(0);
      let { logs } = curl;

      let currentState = {
        id: '1',
        response: '',
        request: '',
        title: 'Establishing bank connection...',
        isLoading: true,
      };

      logs.push(currentState);
      setCurl({ logs });

      const { response, error } = await connectAccounts({
        // TODO pass in the right params
      });
      if (response != null) {
        currentState = {
          ...currentState,
          isLoading: false,
          request: response.data.request,
          response: JSON.stringify(response.data.response),
          title: 'BANK CONNECTION IS ESTABLISHED',
        };
      }
      if (error != null) {
        currentState = {
          ...currentState,
          isLoading: false,
          response: error,
          title: 'Error creating bank connection',
        };
      }

      logs = updateCurlLogs(currentState, logs);

      setCurl({ logs });
      await timeout(1000);

      const analysisLog = {
        request: 'Verifying balance...',
        title: 'Transactions are analyzed and optimal billing date set',
        isLoading: true,
        id: 'transactions',
      };

      logs.push(analysisLog);
      setCurl({ logs });

      await timeout(1000);
      analysisLog.request += '\nAnalyzing cash flows...';
      logs = updateCurlLogs(analysisLog, logs);
      setCurl({ logs });
      await timeout(1000);

      analysisLog.request += '\nSetting optimal billing date...';
      logs = updateCurlLogs(analysisLog, logs);
      setCurl({ logs });
      await timeout(1000);

      analysisLog.isLoading = false;
      logs = updateCurlLogs(analysisLog, logs);
      setCurl({ logs });

      let instructions = {
        response: '',
        request: '',
        title: 'Payment instructions generating...',
        isLoading: true,
        id: 'instructions',
      };

      logs.push(instructions);
      setCurl({ logs });

      const piResult = await paymentInstructions({
        // TODO pass in the right params
      });
      if (piResult.response != null) {
        instructions = {
          ...instructions,
          isLoading: false,
          request: piResult.response.data.request,
          response: JSON.stringify(piResult.response.data.response),
          title: 'PAYMENT INSTRUCTION IS GENERATED',
        };
      }
      if (piResult.error != null) {
        instructions = {
          ...instructions,
          isLoading: false,
          response: piResult.error,
          title: 'Error creating bank connection',
        };
      }

      logs = updateCurlLogs(instructions, logs);
      setCurl({ logs });

      setCurrentStep(1);
    }
  };

  const handleConfirmPayment = async () => {
    // Steps:
    // 1. Call api to confirm payment

    let { logs } = curl;

    let currentState = {
      id: '2',
      response: '',
      request: '',
      title: 'Confirming payment...',
      isLoading: true,
    };
    logs.push(currentState);

    const { response, error } = await confirmPayment({
      // TODO pass in the right params
    });
    if (response != null) {
      currentState = {
        ...currentState,
        isLoading: false,
        request: response.data.request,
        response: JSON.stringify(response.data.response),
        title: 'RECURRING PAYMENT IS INITIATED',
      };
    }
    if (error != null) {
      currentState = {
        ...currentState,
        isLoading: false,
        response: error,
        title: 'Error creating bank connection',
      };
    }

    logs = updateCurlLogs(currentState, logs);
    setCurl({ logs });
    setCurrentStep(2);

    await timeout(4000);

    const monitoringLog = {
      id: 'monitoring',
      request: 'Monitoring balance',
      response: '',
      title: 'BALANCE IS MONITORED FOR SUBSEQUENT PAYMENTS',
    };

    logs.push(monitoringLog);
    setCurl({ logs });

    monitoringLog.request += '\n1/15 Balance insufficient. Payment on hold.';
    logs = updateCurlLogs(monitoringLog, logs);
    setCurl({ logs });
    await timeout(1000);

    monitoringLog.request += '\n1/16 Balance insufficient. Payment on hold.';
    logs = updateCurlLogs(monitoringLog, logs);
    setCurl({ logs });
    await timeout(1000);

    monitoringLog.request += '\n1/17 Balance sufficient.';
    logs = updateCurlLogs(monitoringLog, logs);
    setCurl({ logs });
    await timeout(1000);

    const paymentLog = {
      id: 'payment',
      request: `curl --location --request POST 'https://stage.waivr.co/api/waivr-app/v1/payments/ach' \
--header 'Authorization: BT-EX-67f14ac8-74c3-428c-b577-bd999bc4a599 fz05JGPc1NHgR24fxqHZCBDhDLFHjVlUs6YvwwVFmLYyhiTFPL' \
--header 'Content-Type: application/json' \
--data-raw '{
 "externalReferenceIdentifier": "ancestry.com",
 "customerUid": "7aee19e1-b1ac-40e5-91e1-14eaefe73138",
 "merchantUid": "67f14ac8-74c3-428c-b577-bd999bc4a599"
}'`,
      response: '',
      title:
        'PAYMENT IS AUTO GENERATED ON BILLING DATE WHEN BALANCE IS SUFFICIENT',
    };

    logs.push(paymentLog);
    setCurl({ logs });
    await timeout(1000);

    paymentLog.response = `{
   "uid": "834181ee-d39f-424c-950d-623876343885",
   "createDate": "2023-01-15T20:39:35.067224Z",
   "updateDate": "2023-01-17T20:39:37.742557719Z",
   "status": "INITIATED",
   "amount": 29.990000000000,
   "paymentDate": "2022-01-17T18:00:00Z"
}`;
    logs = updateCurlLogs(paymentLog, logs);
    setCurl({ logs });
    await timeout(1000);
  };

  return (
    <DemoLayout>
      <Grid container columnSpacing={{ xs: 1, sm: 1, md: 4, lg: 10 }}>
        <Grid item xs={12} md={6}>
          {openBankConnect ? (
            <BankConnect>
              {bankConnectScreen === 0 ? (
                <Consent onClick={() => handleBankConnect()} />
              ) : null}
              {bankConnectScreen === 1 ? (
                <BankSelect onClick={() => handleBankConnect()} />
              ) : null}
              {bankConnectScreen === 2 ? (
                <BankLogin onClick={() => handleBankConnect()} />
              ) : null}
              {bankConnectScreen === 3 ? (
                <AccountSelection onClick={() => handleBankConnect()} />
              ) : null}
              {bankConnectScreen === 4 ? (
                <Success onClick={() => handleBankConnect()} />
              ) : null}
            </BankConnect>
          ) : null}
          <Box sx={{ marginTop: '55px', marginBottom: '55px' }}>
            {currentStep === 0 ? (
              <SubscriptionPanel
                firstName={firstName}
                lastName={lastName}
                email={email}
                subscriptions={subscriptions}
                onFirstNameChange={setFirstName}
                onLastNameChange={setLastName}
                onEmailChange={setEmail}
                onSubscriptionChange={(o) => handleSubscriptionSelect(o)}
                onPayByBankClick={handlePayByBank}
              />
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
        <Grid item xs={12} md={6}>
          <CurlBox {...curl} autoScroll={!openBankConnect} />
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
