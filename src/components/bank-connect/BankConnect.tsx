import { Box } from '@mui/system';
import AppTheme from '../common/global/AppTheme';

type Props = { children: React.ReactNode };

const styles = {
  inner: {
    width: '320px',
    height: '608px',
    margin: 'auto',
    boxShadow: 24,
    bgcolor: 'background.paper',
    [AppTheme.breakpoints.between('xs', 'sm')]: {
      width: '100vw',
      height: '100vh',
    },
    [AppTheme.breakpoints.up('md')]: {
      marginTop: '20px',
    },
  },
  wrapper: {
    position: 'absolute',
    width: '100%',
    height: '700px',
    zIndex: 10,
    overflowY: 'scroll',
    scrollbarWidth: 'none',
    '-ms-overflow-style': 'none',
    '::-webkit-scrollbar': {
      display: 'none',
    },
    [AppTheme.breakpoints.between('xs', 'sm')]: {
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      top: 0,
      left: 0,
    },
  },
  shadow: {
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'fixed',
    top: '0',
    left: '0',
  },
};

export const BankConnect = ({ children }: Props) => (
  <Box sx={{ ...styles.wrapper }}>
    <Box sx={{ ...styles.inner }}>{children}</Box>
  </Box>
);
