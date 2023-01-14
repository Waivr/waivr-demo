import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './Select';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    label: { control: 'string' },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'select',
};

export const TwoOptions = Template.bind({});
TwoOptions.args = {
  label: 'Two options',
};
