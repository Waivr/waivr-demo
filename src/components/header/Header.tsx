import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Logo } from '../logo/Logo';

type Props = {
  label: string;
  url: string;
};

const styles = {
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
      ':hover': {
        color: '#232AE2',
      },
    },
  },
};

export const Header = ({ label, url }: Props) => (
  <Box sx={{ ...styles }}>
    <Logo url={url} />
    <Box sx={{ ...styles.header }}>
      <Typography variant="h1">{label}</Typography>
    </Box>
    <Box sx={{ ...styles.link }}>
      <Typography variant="h2">
        <a href="https://www.waivr.co/docs" target="docs">
          API Docs
        </a>
      </Typography>
    </Box>
  </Box>
);
