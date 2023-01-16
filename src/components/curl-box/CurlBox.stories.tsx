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
Default.args = {
  title: 'Customer is created',
};

export const WithRequest = Template.bind({});
WithRequest.args = {
  title: 'Customer is created',
  request: `curl --location --request POST 'https://stage.waivr.co/api/waivr-app/v1/customers' \
--header 'Authorization: BT-EX-67f14ac8-74c3-428c-b577-bd999bc4a599 fz05JGPc1NHgR24fxqHZCBDhDLFHjVlUs6YvwwVFmLYyhiTFPL' \
--header 'Content-Type: application/json' \
--data-raw '{
"merchantUid": "67f14ac8-74c3-428c-b577-bd999bc4a599",
"email": "john.snow@northwall.com",
"firstName": "John",
"lastName": "Snow",
}
}'`,
};

export const WithResponse = Template.bind({});
WithResponse.args = {
  title: 'Customer is created',
  request: `curl --location --request POST 'https://stage.waivr.co/api/waivr-app/v1/customers' \
--header 'Authorization: BT-EX-67f14ac8-74c3-428c-b577-bd999bc4a599 fz05JGPc1NHgR24fxqHZCBDhDLFHjVlUs6YvwwVFmLYyhiTFPL' \
--header 'Content-Type: application/json' \
--data-raw '{
"merchantUid": "67f14ac8-74c3-428c-b577-bd999bc4a599",
"email": "john.snow@northwall.com",
"firstName": "John",
"lastName": "Snow",
}
}'`,
  response: `{
"uid": "7aee19e1-b1ac-40e5-91e1-14eaefe73138",
"createDate": "2022-12-12T19:57:44.438588476Z",
"updateDate": "2022-12-12T19:57:44.623806274Z",
"email": "john.snow@northwall.com",
"firstName": "John",
"lastName": "Snow",
"phoneNumber": "4541239955",
"address": {
"line1": "5th Tower",
"line2": null,
"city": "North Wall",
"state": "Winterfell"
}}`,
};

export const WithResponseLoading = Template.bind({});
WithResponseLoading.args = {
  title: 'Customer is created',
  request: `curl --location --request POST 'https://stage.waivr.co/api/waivr-app/v1/customers' \
--header 'Authorization: BT-EX-67f14ac8-74c3-428c-b577-bd999bc4a599 fz05JGPc1NHgR24fxqHZCBDhDLFHjVlUs6YvwwVFmLYyhiTFPL' \
--header 'Content-Type: application/json' \
--data-raw '{
"merchantUid": "67f14ac8-74c3-428c-b577-bd999bc4a599",
"email": "john.snow@northwall.com",
"firstName": "John",
"lastName": "Snow",
}
}'`,
  isLoading: true,
};
