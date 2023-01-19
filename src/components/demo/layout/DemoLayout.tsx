import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { Button } from '../../button/Button';
import { CurlBox } from '../../curl-box/CurlBox';
import { WithResponse } from '../../curl-box/CurlBox.stories';
import { Form } from '../../form/Form';
import { FormRow } from '../../form/FormRow';
import { Header } from '../../header/Header';
import { Panel } from '../../panel/Panel';
import { PanelHeader } from '../../panel/PanelHeader';
import { Select } from '../../select/Select';

type Props = { children: React.ReactNode };

const DemoLayout = ({ children }: Props) => (
  <Box>
    <Header label="Recurring Payments Demo" url="https://waivr.co" />
    {children}
  </Box>
);

export default DemoLayout;
