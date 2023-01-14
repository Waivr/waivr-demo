import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    label: { control: 'string' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Input',
};

export const InvalidInput = Template.bind({});
InvalidInput.args = {
  label: 'Invalid input',
};

export const Email = Template.bind({});
Email.args = {
  label: 'Email',
};
