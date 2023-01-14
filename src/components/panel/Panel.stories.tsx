import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Panel } from './Panel';

export default {
  title: 'Components/Panel',
  component: Panel,
  argTypes: {
    label: { control: 'string' },
  },
} as ComponentMeta<typeof Panel>;

const Template: ComponentStory<typeof Panel> = (args) => <Panel {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Panel',
};

export const Subscribe = Template.bind({});
Default.args = {
  label: 'Panel',
};

export const ConfirmPayment = Template.bind({});
Default.args = {
  label: 'Panel',
};
