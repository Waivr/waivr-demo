import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Subscribe } from './Subscribe';

export default {
  title: 'Pages/Subscribe',
  component: Subscribe,
  argTypes: {
    label: { control: 'string' },
  },
} as ComponentMeta<typeof Subscribe>;

const Template: ComponentStory<typeof Subscribe> = (args) => (
  <Subscribe {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Panel',
};
