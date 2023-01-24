import { Box } from '@mui/system';
import AppTheme from '../common/global/AppTheme';
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
    width: '100%',
  },
  link: {
    textAlign: 'right',
    width: '100%',
    a: {
      color: AppTheme.palette.text.primary,
      ':hover': {
        color: '#232AE2',
      },
    },
  },
};

export const Header = ({ label, url }: Props) => (
  <Box sx={{ ...styles }}>
    <Logo url={url} />
    <Box sx={{ ...styles.header }}>{label}</Box>
    <Box sx={{ ...styles.link }}>
      <a href="https://www.waivr.co/docs" target="docs">
        API Docs
      </a>
    </Box>
  </Box>
);
