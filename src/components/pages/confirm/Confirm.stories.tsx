import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Confirm } from './Confirm';

export default {
  title: 'Pages/Confirm',
  component: Confirm,
  argTypes: {
    label: { control: 'string' },
  },
} as ComponentMeta<typeof Confirm>;

const Template: ComponentStory<typeof Confirm> = (args) => (
  <Confirm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Panel',
};
