import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CurlBox } from './CurlBox';

export default {
  title: 'Components/CurlBox',
  component: CurlBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CurlBox>;

const Template: ComponentStory<typeof CurlBox> = (args) => (
  <CurlBox {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const WithRequest = Template.bind({});
WithRequest.args = {};

export const WithResponse = Template.bind({});
WithRequest.args = {};

export const WithRequestLoading = Template.bind({});
WithRequest.args = {};

export const WithResponseLoading = Template.bind({});
WithRequest.args = {};
