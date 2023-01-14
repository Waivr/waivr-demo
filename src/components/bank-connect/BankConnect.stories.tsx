import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BankConnect } from './BankConnect';

export default {
  title: 'Components/BankConnect',
  component: BankConnect,
  argTypes: {
    label: { control: 'string' },
  },
} as ComponentMeta<typeof BankConnect>;

const Template: ComponentStory<typeof BankConnect> = (args) => (
  <BankConnect {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Header',
};
