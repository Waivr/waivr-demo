import { Box } from '@mui/system';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CurlLine } from './CurlLine';

export default {
  title: 'Components/CurlBox',
  component: CurlLine,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CurlLine>;

const Template: ComponentStory<typeof CurlLine> = (args) => (
  <Box sx={{ backgroundColor: '#172836' }}>
    <CurlLine {...args} />
  </Box>
);

export const CurlRequest = Template.bind({});
CurlRequest.args = {
  curl: `curl --location --request POST 'https://stage.waivr.co/api/waivr-app/v1/connectaccounts/render' \
--header 'Authorization: BT-EX-67f14ac8-74c3-428c-b577-bd999bc4a599 fz05JGPc1NHgR24fxqHZCBDhDLFHjVlUs6YvwwVFmLYyhiTFPL' \
--header 'Content-Type: application/json' \
--data-raw '{
"merchantUid": "merchantid"
}'`,
};
