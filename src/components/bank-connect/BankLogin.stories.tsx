import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BankConnect } from './BankConnect';
import { BankLogin } from './BankLogin';

export default {
  title: 'Components/BankConnect',
  component: BankLogin,
  argTypes: {
    label: { control: 'string' },
  },
} as ComponentMeta<typeof BankLogin>;

const Template: ComponentStory<typeof BankLogin> = (args) => (
  <BankConnect>
    <BankLogin {...args} />
  </BankConnect>
);

export const BankLoginPane = Template.bind({});
BankLoginPane.args = {};
