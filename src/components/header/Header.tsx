import { Box } from '@mui/system';
import { Logo } from '../logo/Logo';

type Props = {
  label: string;
  url: string;
};

const styles = {
  typography: 'h1',
  display: 'flex',
  alignItems: 'center',
  header: {
    marginLeft: '45px',
  },
};

export const Header = ({ label, url }: Props) => (
  <Box sx={{ ...styles }}>
    <Logo url={url} />
    <Box sx={{ ...styles.header }}>{label}</Box>
  </Box>
);
