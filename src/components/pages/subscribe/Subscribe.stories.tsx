import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormRow } from '../../form/FormRow';
import { Panel } from '../../panel/Panel';
import { PanelHeader } from '../../panel/PanelHeader';
import { Button } from '../../button/Button';
import { Select } from '../../select/Select';
import { Form } from '../../form/Form';
import { Subscribe } from './Subscribe';
import { CurlBox } from '../../curl-box/CurlBox';
import { WithResponse } from '../../curl-box/CurlBox.stories';

export default {
  title: 'Pages/Subscribe',
  component: Subscribe,
  argTypes: {
    label: { control: 'string' },
  },
} as ComponentMeta<typeof Subscribe>;

const SubscribeTemplate: ComponentStory<typeof Subscribe> = (args) => (
  <Box>
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
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
      </Grid>

      <Grid item xs={12} md={6}>
        <CurlBox
          isLoading={false}
          title={WithResponse.args?.title || ''}
          request={WithResponse.args?.request || ''}
          response={WithResponse.args?.response || ''}
        />
      </Grid>
    </Grid>

    <Box sx={{ textAlign: 'right', marginTop: '23px' }}>
      <Button
        backgroundColor="#E2FF62"
        textColor="#000"
        label="Reset"
        onClick={() => undefined}
      />
    </Box>
  </Box>
);
export const Default = SubscribeTemplate.bind({});
Default.args = {};
