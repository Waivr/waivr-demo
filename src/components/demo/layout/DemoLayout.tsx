import { Box } from '@mui/system';
import { Header } from '../../header/Header';

type Props = { children: React.ReactNode };

const DemoLayout = ({ children }: Props) => (
  <Box>
    <Header label="Recurring Payments Demo" url="https://waivr.co" />
    {children}
  </Box>
);

export default DemoLayout;
