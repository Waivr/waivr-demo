import { Box } from '@mui/system';
import AppTheme from '../common/global/AppTheme';

type Props = { children: React.ReactNode };

const styles = {
  wrapper: {
    position: 'fixed',
    top: '50%',
    left: '30%',
    transform: 'translate(-50%, -50%)',
    width: '360px',
    height: '608px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    zIndex: 10,
    overflowY: 'scroll',
    scrollbarWidth: 'none',
    ' -ms-overflow-style': 'none',
    '::-webkit-scrollbar': {
      display: 'none',
    },
    [AppTheme.breakpoints.down('md')]: {
      width: '100vw',
      height: '100vh',
      left: '50%',
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
  <>
    {/* <Box sx={{ ...styles.shadow }} /> */}
    <Box sx={{ ...styles.wrapper }}>{children}</Box>
  </>
);
