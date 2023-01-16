import { Box } from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Form } from './Form';
import { FormRow } from './FormRow';

export default {
  title: 'Components/Form',
  component: Form,
  argTypes: {
    defaultValue: { control: 'string' },
  },
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = () => (
  <Box sx={{ backgroundColor: '#fff' }}>
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
);

export const Default = Template.bind({});
Default.args = {};
