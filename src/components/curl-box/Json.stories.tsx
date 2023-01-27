import { Box } from '@mui/system';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Json } from './Json';

export default {
  title: 'Components/CurlBox',
  component: Json,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Json>;

const Template: ComponentStory<typeof Json> = (args) => (
  <Box sx={{ backgroundColor: '#172836' }}>
    <Json {...args} />
  </Box>
);

export const JsonResponse = Template.bind({});
JsonResponse.args = {
  json: JSON.stringify({
    uid: '48548386-99fb-4de4-b8f6-513945c944e8',
    customerUid: '7aee19e1-b1ac-40e5-91e1-14eaefe73138',
    merchantUid: '67f14ac8-74c3-428c-b577-bd999bc4a599',
    createDate: '2022-12-09T20:42:11.79212Z',
    updateDate: '2022-12-09T20:42:11.79212Z',
    externalReferenceIdentifier: 'ancestry.com',
    status: 'PENDING',
    amount: 29.99,
    frequency: {
      cycle: 'MONTHLY',
      recurrence: 1,
    },
    nextBillingDate: '2022-01-12T18:00:00Z',
    recurringEndDate: null,
    enableOptimalBillingDate: true,
    metadata: {
      optimalBillingDateAnalysis: {
        basedNextBillingDate: '2022-01-15T18:00:00Z',
        optimalBillingDates: [
          '2022-02-16T18:00:00Z',
          '2222-02-17T18:00:00Z',
          '2222-02-18T18:00:00Z',
        ],
      },
    },
  }),
};
