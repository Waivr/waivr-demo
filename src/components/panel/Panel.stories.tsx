import { Box } from '@mui/system';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../button/Button';
import { Form } from '../form/Form';
import { FormRow } from '../form/FormRow';
import { Select } from '../select/Select';

import { Panel } from './Panel';
import { PanelHeader } from './PanelHeader';

export default {
  title: 'Components/Panel',
  component: Panel,
  argTypes: {
    label: { control: 'string' },
  },
} as ComponentMeta<typeof Panel>;

const DefaultTemplate: ComponentStory<typeof Panel> = (args) => (
  <Panel {...args}>
    <div>content</div>
  </Panel>
);

export const Default = DefaultTemplate.bind({});
Default.args = {};

const SubscribeTemplate: ComponentStory<typeof Panel> = (args) => (
  <Box sx={{ width: '436px' }}>
    <Panel {...args}>
      <PanelHeader label="Subscriber" />
      <Box sx={{ marginTop: '24px' }}>
        <Form>
          <FormRow label="First Name" defaultValue="John" type="text" />
          <FormRow label="Last Name" defaultValue="Snow" type="text" />
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
          onSelect={() => undefined}
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
          onClick={() => undefined}
        />
      </Box>
    </Panel>
  </Box>
);

export const Subscribe = SubscribeTemplate.bind({});
Default.args = {};

const ConfirmTemplate: ComponentStory<typeof Panel> = (args) => (
  <Box sx={{ width: '436px' }}>
    <Panel {...args}>
      <PanelHeader label="Basic Checking (*8230)" />
      <Box sx={{ typography: 'body1' }}>$29.99/mo</Box>
      <Box sx={{ typography: 'body1' }}>Every 15th of the month</Box>
      <Box sx={{ marginTop: '47px', textAlign: 'center' }}>
        <Button
          backgroundColor="#172836"
          textColor="#fff"
          label="Confirm Payment"
          onClick={() => undefined}
        />
      </Box>
    </Panel>
  </Box>
);

export const ConfirmPayment = ConfirmTemplate.bind({});
Default.args = {};
