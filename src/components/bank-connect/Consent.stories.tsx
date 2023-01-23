import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BankConnect } from './BankConnect';

import { Consent } from './Consent';

export default {
  title: 'Components/BankConnect',
  component: Consent,
  argTypes: {
    label: { control: 'string' },
  },
} as ComponentMeta<typeof Consent>;

const Template: ComponentStory<typeof Consent> = (args) => (
  <BankConnect>
    <Consent {...args} />
  </BankConnect>
);

export const ConsentPane = Template.bind({});
ConsentPane.args = {};
