import { Box } from '@mui/system';

type Props = { children: React.ReactNode };

const styles = {
  wrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '360px',
    height: '608px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    padding: '64px 40px 15px 40px',
    zIndex: 10,
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
    <Box sx={{ ...styles.shadow }} />
    <Box sx={{ ...styles.wrapper }}>{children}</Box>
  </>
);
