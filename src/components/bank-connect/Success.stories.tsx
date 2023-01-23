import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BankConnect } from './BankConnect';

import { Success } from './Success';

export default {
  title: 'Components/BankConnect',
  component: Success,
  argTypes: {
    label: { control: 'string' },
  },
} as ComponentMeta<typeof Success>;

const Template: ComponentStory<typeof Success> = (args) => (
  <BankConnect>
    <Success {...args} />
  </BankConnect>
);

export const SuccessPane = Template.bind({});
SuccessPane.args = {};
