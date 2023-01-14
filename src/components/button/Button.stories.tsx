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
  backgroundColor: 'black',
  label: 'Pay by bank',
};

export const Reset = Template.bind({});
Reset.args = {
  label: 'reset',
  backgroundColor: 'green',
};
