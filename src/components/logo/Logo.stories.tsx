import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Logo } from './Logo';

export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {
    url: { name: 'Url' },
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  url: 'https://www.waivr.co/',
};
