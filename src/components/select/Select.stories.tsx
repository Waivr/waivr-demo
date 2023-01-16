import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './Select';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    label: { name: 'Label' },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'subscription',
  options: [{ label: '$29.99/month', value: '1', selected: true }],
};

export const TwoOptions = Template.bind({});
TwoOptions.args = {
  name: 'subscription',
  options: [
    { label: '$29.99/month', value: '1', selected: true },
    { label: '$19.99/month', value: '2' },
  ],
};
