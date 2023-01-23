import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BankConnect } from './BankConnect';

import { BankSelect } from './BankSelect';

export default {
  title: 'Components/BankConnect',
  component: BankSelect,
  argTypes: {
    label: { control: 'string' },
  },
} as ComponentMeta<typeof BankSelect>;

const Template: ComponentStory<typeof BankSelect> = (args) => (
  <BankConnect>
    <BankSelect {...args} />
  </BankConnect>
);

export const BankSelection = Template.bind({});
BankSelection.args = {};
