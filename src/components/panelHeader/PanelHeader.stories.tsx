import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PanelHeader } from './PanelHeader';

export default {
  title: 'Components/PanelHeader',
  component: PanelHeader,
  argTypes: {
    label: { control: 'string' },
  },
} as ComponentMeta<typeof PanelHeader>;

const Template: ComponentStory<typeof PanelHeader> = (args) => (
  <PanelHeader {...args} />
);

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
