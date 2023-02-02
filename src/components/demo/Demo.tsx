import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import EnvironmentVars from '../../core/config/EnvironmentVars';
import { CustomerCreateArgs } from '../../core/domain/customer/customerCreateArgs';
import { PersonName } from '../../core/domain/person/personName';
import { FirstName } from '../../core/domain/person/firstName';
import { LastName } from '../../core/domain/person/lastName';
import { Button } from '../button/Button';
import { CurlBox, Props as CurlProps, CurlLog } from '../curl-box/CurlBox';
import { Panel } from '../panel/Panel';
import { PanelHeader } from '../panel/PanelHeader';
import { Option } from '../select/Select';
import {
  confirmPayment,
  connectAccounts,
  connectAccountsRender,
  createCustomer,
  createPaymentInstructions, findPaymentInstructionSummary,
} from './curl-templates';
import DemoLayout from './layout/DemoLayout';
import { createApiRegistery } from './requests';
import { SubscriptionPanel } from './SubscriptionPanel';
import { ConnectAccountRenderCreateArgs } from '../../core/domain/connectaccount/connectAccountRenderCreateArgs';
import { ConnectAccountCreateArgs } from '../../core/domain/connectaccount/connectAccountCreateArgs';
import { PaymentInstructionCreateArgs } from '../../core/domain/paymentinstruction/paymentInstructionCreateArgs';
import { PositiveAmount } from '../../core/domain/common/numbers/positiveAmount';
import { PaymentFrequencyCycle } from '../../core/domain/paymentinstruction/paymentFrequencyCycle';
import { FutureDate } from '../../core/domain/common/date/FutureDate';
import DateUtils, { TimeUnit } from '../../core/paramutils/dateUtils';
import { PaymentCreateArgs } from '../../core/domain/payment/paymentCreateArgs';
import { PaymentMethodType } from '../../core/domain/payment/paymentMethodType';
import { BankConnectWrapper } from '../bank-connect/Wrapper';
import { nthNumber, timeout } from '../utilities';
import { PaymentInstructionIdentifier } from '../../core/domain/paymentinstruction/paymentInstructionIdentifier';

// TODO get value from environment vars
const merchantUid = '598bd015-1c25-4fbf-8c8b-05ef2b20ded1';
const externalReferenceIdentifier = 'ancestry.com';
const token = { ...EnvironmentVars.getEnvVars().apiAccessToken };
const authHeaderToken = `${token.key} ${token.secret}`;
const timeoutDuration = 1000;
const apiRegistery = createApiRegistery();

const Demo = () => {
  // Set default form field values
  const [subscriptions, setSubscriptions] = React.useState([
    { label: '$29.99/month', value: '29.99', selected: true },
    { label: '$19.99/month', value: '19.99' },
  ]);
  const [firstName, setFirstName] = React.useState('John');
  const [lastName, setLastName] = React.useState('Snow');
  const [email, setEmail] = React.useState('johnsnow@northwall.com');
  const [nextBillingDay, setNextBillingDay] = React.useState<null | Date>(null);

  // App state
  const [openBankConnect, setOpenBankConnect] = React.useState(false);
  const [bankConnectScreen, setBankConnectScreen] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [curl, setCurl] = React.useState({
    logs: [
      {
        id: '0',
        title: 'Create customer',
      },
    ],
  } as CurlProps);

  // API state
  const [customerUid, setCustomerUid] = React.useState('');
  const [paymentUid, setPaymentUid] = React.useState('');
  const [accountId, setAccountId] = React.useState('');
  const [institutionId, setInstituionId] = React.useState('');

  const handleReset = () => {
    setOpenBankConnect(false);
    setLoading(false);
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

  const updateCurlLogs = (log: CurlLog, logs: CurlLog[]) => {
    if (log != null && log.id != null) {
      // eslint-disable-next-line react/prop-types
      const logIndex = logs.findIndex((l: any) => l.id === log.id);
      if (logIndex >= 0) {
        // eslint-disable-next-line react/prop-types
        logs[logIndex] = log;
      } else {
        logs.push(log);
      }
    }
    setCurl({ logs });
  };

  const handlePayByBank = async () => {
    setOpenBankConnect(false);
    setCurrentStep(0);
    setLoading(true);
    let currentState = {
      id: '0',
      response: '',
      request: createCustomer(
        authHeaderToken,
        merchantUid,
        firstName,
        lastName,
        email
      ),
      title: 'creating customer...',
      isLoading: true,
    };
    updateCurlLogs(currentState, curl.logs);

    const createCustomerResponse = await apiRegistery
      .customerService()
      .create(
        new CustomerCreateArgs(
          { value: merchantUid },
          { value: email },
          new PersonName(new FirstName(firstName), new LastName(lastName)),
          null,
          null
        ),
        token
      );

    // Save customer id to state
    setCustomerUid(createCustomerResponse.identifier.value);
    currentState = {
      ...currentState,
      isLoading: false,
      response: createCustomerResponse.rawJson,
      title: 'Customer is created',
    };
    updateCurlLogs(currentState, curl.logs);

    let renderLog = {
      id: 'render',
      response: '',
      request: connectAccountsRender(authHeaderToken, merchantUid),
      title: 'Creating a render token...',
      isLoading: true,
    };
    updateCurlLogs(renderLog, curl.logs);

    const renderResponse = await apiRegistery
      .connectAccountService()
      .createRenderLink(
        new ConnectAccountRenderCreateArgs({ value: merchantUid }),
        token
      );

    renderLog = {
      ...renderLog,
      isLoading: false,
      response: renderResponse.rawJson,
      title: 'Render token created',
    };
    updateCurlLogs(renderLog, curl.logs);

    setLoading(false);
    setOpenBankConnect(true);
  };

  const handleOnSuccess = async (
    account: string,
    institution: string,
    bankToken: string
  ) => {
    setAccountId(account);
    setInstituionId(institution);
    setCurrentStep(1);
    setLoading(true);

    let currentState = {
      id: '1',
      response: '',
      request: connectAccounts(
        authHeaderToken,
        merchantUid,
        customerUid,
        institutionId,
        accountId,
        bankToken
      ),
      title: 'Establishing bank connection...',
      isLoading: true,
    };
    updateCurlLogs(currentState, curl.logs);
    await apiRegistery
      .connectAccountService()
      .linkCustomerAccount(
        ConnectAccountCreateArgs.asBypass(
          { value: merchantUid },
          { value: customerUid }
        ),
        token
      );

    currentState = {
      ...currentState,
      isLoading: false,
      title: 'BANK CONNECTION IS ESTABLISHED',
      response: '[Success 201]',
    };

    updateCurlLogs(currentState, curl.logs);

    const analysisLog = {
      request: 'Verifying balance...',
      title: 'Transactions are analyzed and optimal billing date set',
      isLoading: true,
      id: 'transactions',
    };

    updateCurlLogs(analysisLog, curl.logs);

    await timeout(timeoutDuration);
    analysisLog.request += '\nAnalyzing cash flows...';
    updateCurlLogs(analysisLog, curl.logs);
    await timeout(timeoutDuration);

    analysisLog.request += '\nSetting optimal billing date...';
    updateCurlLogs(analysisLog, curl.logs);
    await timeout(timeoutDuration);

    analysisLog.isLoading = false;
    updateCurlLogs(analysisLog, curl.logs);

    const subscription = subscriptions.find((s) => s.selected === true);


    let instructions = {
      response: '',
      request: createPaymentInstructions(
          authHeaderToken,
          externalReferenceIdentifier,
          customerUid,
          merchantUid,
          subscription?.value ?? ''
      ),
      title: 'Payment instructions generating...',
      isLoading: true,
      id: 'instructions',
    };

    updateCurlLogs(instructions, curl.logs);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const amount = new PositiveAmount(parseFloat(subscription!.value));

    const paymentInstructionsResponse = await apiRegistery
        .paymentInstructionService()
        .create(
            new PaymentInstructionCreateArgs(
                { value: externalReferenceIdentifier },
                {
                  value: customerUid,
                },
                {
                  value: merchantUid,
                },
                amount,
                {
                  cycle: PaymentFrequencyCycle.MONTHLY,
                  recurrence: new PositiveAmount(1),
                },
                FutureDate.basedOfNow(
                    DateUtils.addTimeUnit(new Date(), TimeUnit.MINUTE, 60)
                )
            ),
            token
        );

    setPaymentUid(paymentInstructionsResponse.identifier.value);

    instructions = {
      ...instructions,
      isLoading: false,
      response: paymentInstructionsResponse.rawJson,
      title: 'PAYMENT INSTRUCTION IS GENERATED',
    };

    setNextBillingDay(paymentInstructionsResponse.nextBillingDate.value);
    updateCurlLogs(instructions, curl.logs);

    setLoading(false);
  };

  const handleBankConnect = async () => {
    if (bankConnectScreen < 4) {
      setBankConnectScreen(bankConnectScreen + 1);
    } else {
      // Close and reset
      setOpenBankConnect(false);
      setBankConnectScreen(0);
    }
  };

  const handleConfirmPayment = async () => {
    let currentState = {
      id: '2',
      response: '',
      request: confirmPayment(
        authHeaderToken,
        externalReferenceIdentifier,
        customerUid,
        merchantUid
      ),
      title: 'Confirming payment...',
      isLoading: true,
    };
    updateCurlLogs(currentState, curl.logs);

    const confirmPaymentResponse = await apiRegistery
      .paymentService()
      .create(
        new PaymentCreateArgs({ value: paymentUid }, PaymentMethodType.ACH),
        token
      );

    currentState = {
      ...currentState,
      isLoading: false,
      response: confirmPaymentResponse.rawJson,
      title: 'RECURRING PAYMENT IS INITIATED',
    };
    updateCurlLogs(currentState, curl.logs);


    const paymentInstructionSummary = await apiRegistery
        .paymentInstructionService()
        .findSummary(new PaymentInstructionIdentifier(paymentUid), token);

    const paymentInstructionSummaryAfterPayment = {
      response: paymentInstructionSummary.rawJson,
      request: findPaymentInstructionSummary(
          authHeaderToken,
          paymentUid,
      ),
      title: 'PAYMENT INSTRUCTION IS ACTIVATED',
      isLoading: false,
      id: 'instructionActivated',
    };

    updateCurlLogs(paymentInstructionSummaryAfterPayment, curl.logs);


    setCurrentStep(2);

    // Simulate what happens on the next monthly cycle
    await timeout(4000);

    const monitoringLog = {
      id: 'monitoring',
      request: 'Monitoring balance',
      response: '',
      title: 'BALANCE IS MONITORED FOR SUBSEQUENT PAYMENTS',
    };

    updateCurlLogs(monitoringLog, curl.logs);

    let nextPaymentDate = new Date();

    if (nextBillingDay != null) {
      for (let i = 0; i < 3; i++) {
        const nextDate = new Date(nextBillingDay.valueOf());
        nextDate.setDate(nextBillingDay.getDate() + 30 + i);
        if (i < 2) {
          monitoringLog.request += `\n${
            nextDate.getMonth() + 1
          }/${nextDate.getDate()} Balance insufficient. Payment on hold.`;
        } else {
          monitoringLog.request += `\n${
            nextDate.getMonth() + 1
          }/${nextDate.getDate()} Balance sufficient.`;
          nextPaymentDate = nextDate;
        }
        updateCurlLogs(monitoringLog, curl.logs);
        // eslint-disable-next-line no-await-in-loop
        await timeout(timeoutDuration);
      }
    }

    const paymentLog = {
      id: 'payment',
      request: confirmPayment(
        token.key,
        externalReferenceIdentifier,
        customerUid,
        merchantUid
      ),
      response: '',
      title:
        'PAYMENT IS AUTO GENERATED ON BILLING DATE WHEN BALANCE IS SUFFICIENT',
    };
    updateCurlLogs(paymentLog, curl.logs);
    await timeout(timeoutDuration);

    const json = JSON.parse(confirmPaymentResponse.rawJson);
    json.createDate = nextPaymentDate.toISOString();
    json.updateDate = nextPaymentDate.toISOString();
    json.paymentDate = nextPaymentDate.toISOString();

    paymentLog.response = JSON.stringify(json);
    updateCurlLogs(paymentLog, curl.logs);
    await timeout(timeoutDuration);
  };

  return (
    <DemoLayout>
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 1, md: 4, lg: 10 }}
        justifyContent="center"
      >
        <Grid item xs={12} md={6} lg={4}>
          {openBankConnect ? (
            <BankConnectWrapper
              bankConnectScreen={bankConnectScreen}
              handleBankConnect={handleBankConnect}
              onSuccess={handleOnSuccess}
            />
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
                disabled={loading}
              />
            ) : null}
            {currentStep === 1 ? (
              <Panel>
                <PanelHeader label="Basic Checking (*8230)" />
                <Box sx={{ typography: 'body1' }}>
                  ${subscriptions.find((s) => s.selected)?.value}/mo
                </Box>
                <Box sx={{ typography: 'body1' }}>
                  Every{' '}
                  {nextBillingDay ? (
                    <span>
                      {nextBillingDay.getDate()}
                      {nthNumber(nextBillingDay.getDate())}
                    </span>
                  ) : null}{' '}
                  the month
                </Box>
                <Box sx={{ marginTop: '47px', textAlign: 'center' }}>
                  <Button
                    backgroundColor="#172836"
                    textColor="#fff"
                    label="Confirm Payment"
                    onClick={() => handleConfirmPayment()}
                    disabled={loading}
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
        <Grid item xs={12} md={6} lg={4}>
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
