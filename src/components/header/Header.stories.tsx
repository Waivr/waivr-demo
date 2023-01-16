import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    label: { control: 'string' },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Subscriber',
};

export const SubscriptionPlan = Template.bind({});
SubscriptionPlan.args = {
  label: 'Subscription Plan',
};

export const Checking = Template.bind({});
Checking.args = {
  label: 'Basic Checking (*8230)',
};
