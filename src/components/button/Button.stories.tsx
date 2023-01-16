import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundColor: '#172836',
  textColor: '#fff',
  label: 'Pay by Bank',
};

export const Reset = Template.bind({});
Reset.args = {
  backgroundColor: '#E2FF62',
  textColor: '#000',
  label: 'Reset',
};
