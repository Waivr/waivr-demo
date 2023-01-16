import { Grid } from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FormRow } from './FormRow';

export default {
  title: 'Components/FormRow',
  component: FormRow,
  argTypes: {
    defaultValue: { control: 'string' },
  },
} as ComponentMeta<typeof FormRow>;

const Template: ComponentStory<typeof FormRow> = (args) => (
  <Grid container>
    <FormRow {...args} />
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  label: 'First Name',
  defaultValue: 'John',
};
