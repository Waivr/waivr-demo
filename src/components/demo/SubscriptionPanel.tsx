import { Box } from '@mui/system';
import React from 'react';
import { FormRow } from '../form/FormRow';
import { Form } from '../form/Form';
import { Panel } from '../panel/Panel';
import { PanelHeader } from '../panel/PanelHeader';
import { Select, Option } from '../select/Select';
import { Button } from '../button/Button';

type Props = {
  firstName: string;
  lastName: string;
  email: string;
  subscriptions: Array<Option>;
  onFirstNameChange: (value: string) => void;
  onLastNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onSubscriptionChange: (value: Option) => void;
  onPayByBankClick: () => void;
};

export const SubscriptionPanel = ({
  firstName,
  lastName,
  email,
  subscriptions,
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
  onSubscriptionChange,
  onPayByBankClick,
}: Props) => (
  <Panel>
    <PanelHeader label="Subscriber" />
    <Box sx={{ marginTop: '24px' }}>
      <Form>
        <FormRow
          label="First Name"
          defaultValue={firstName}
          type="text"
          onChange={(evt) => onFirstNameChange(evt.target.value)}
        />
        <FormRow
          label="Last Name"
          defaultValue={lastName}
          type="text"
          onChange={(evt) => onLastNameChange(evt.target.value)}
        />
        <FormRow
          label="Email"
          type="email"
          defaultValue={email}
          onChange={(evt) => onEmailChange(evt.target.value)}
        />
      </Form>
    </Box>
    <Box sx={{ marginTop: '34px' }}>
      <PanelHeader label="Subscription Plan" />
    </Box>
    <Box sx={{ marginTop: '15px', textAlign: 'center' }}>
      <Select
        name="subscription"
        options={subscriptions}
        onSelect={(option) => onSubscriptionChange(option)}
      />
    </Box>
    <Box sx={{ marginTop: '37px', textAlign: 'center' }}>
      <Button
        backgroundColor="#172836"
        textColor="#fff"
        label="Pay by Bank"
        onClick={onPayByBankClick}
      />
    </Box>
  </Panel>
);
