import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BankConnect } from './BankConnect';

import { AccountSelection } from './AccountSelection';

export default {
  title: 'Components/BankConnect',
  component: AccountSelection,
  argTypes: {
    label: { control: 'string' },
  },
} as ComponentMeta<typeof AccountSelection>;

const Template: ComponentStory<typeof AccountSelection> = (args) => (
  <BankConnect>
    <AccountSelection {...args} />
  </BankConnect>
);

export const AccountSelectionPane = Template.bind({});
AccountSelectionPane.args = {};
