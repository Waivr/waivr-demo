import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { Button } from '../../button/Button';
import { CurlBox } from '../../curl-box/CurlBox';
import { WithResponse } from '../../curl-box/CurlBox.stories';
import { Form } from '../../form/Form';
import { FormRow } from '../../form/FormRow';
import { Header } from '../../header/Header';
import { Logo } from '../../logo/Logo';
import { Panel } from '../../panel/Panel';
import { PanelHeader } from '../../panel/PanelHeader';
import { Select } from '../../select/Select';

const DemoLayout = () => (
  <Box>
    <Grid container columnSpacing={{ xs: 1, sm: 1, md: 4, lg: 10 }}>
      <Grid item xs={12} md={6}>
        <Grid container>
          <Grid item>
            <Logo url="https://waivr.co" />
          </Grid>
          <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ marginLeft: '45px' }}>
              <Header label="Recurring Payments Demo" />
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ marginTop: '55px' }}>
          <Panel>
            <PanelHeader label="Subscriber" />
            <Box sx={{ marginTop: '24px' }}>
              <Form>
                <FormRow label="First Name" defaultValue="John" type="text" />
                <FormRow label="Last Name" defaultValue="Snow" type="text" />
                <FormRow
                  label="Email"
                  type="email"
                  defaultValue="johnsnow@northwall.com"
                />
              </Form>
            </Box>
            <Box sx={{ marginTop: '34px' }}>
              <PanelHeader label="Subscription Plan" />
            </Box>
            <Box sx={{ marginTop: '15px', textAlign: 'center' }}>
              <Select
                name="subscription"
                options={[
                  { label: '$29.99/month', value: '1', selected: true },
                  { label: '$19.99/month', value: '2' },
                ]}
              />
            </Box>
            <Box sx={{ marginTop: '37px', textAlign: 'center' }}>
              <Button
                backgroundColor="#172836"
                textColor="#fff"
                label="Pay by Bank"
                onClick={() => undefined}
              />
            </Box>
          </Panel>
        </Box>
      </Grid>
      <Grid item xs={12} md={5} sx={{ marginTop: '40px' }}>
        <CurlBox
          isLoading={false}
          title={WithResponse.args?.title || ''}
          request={WithResponse.args?.request || ''}
          response={WithResponse.args?.response || ''}
        />
        <Box sx={{ textAlign: 'right', marginTop: '23px' }}>
          <Button
            backgroundColor="#E2FF62"
            textColor="#000"
            label="Reset"
            onClick={() => undefined}
          />
        </Box>
      </Grid>
    </Grid>
  </Box>
);

export default DemoLayout;
