import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Logo } from './logo';

export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo />;

export const Default = Template.bind({});
Default.args = {};
