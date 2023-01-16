import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    defaultValue: { name: 'Value' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultValue: 'John',
};

export const InvalidInput = Template.bind({});
InvalidInput.args = {
  defaultValue: 'john.snow@northwall',
  type: 'email',
};

export const Email = Template.bind({});
Email.args = {
  defaultValue: 'john.snow@northwall.com',
  type: 'email',
};
