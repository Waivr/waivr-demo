import { Box } from '@mui/system';
import { Button } from '../button/Button';

type Props = {
  onClick: () => void;
};

const styles = {
  wrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 254,
    height: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    div: {
      textAlign: 'center',
      margin: 'auto',
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

export const BankConnect = ({ onClick }: Props) => (
  <>
    <Box sx={{ ...styles.shadow }} />
    <Box sx={{ ...styles.wrapper }}>
      <Box sx={{ ...styles.box }}>
        <Button
          label="Connect"
          backgroundColor="#172836"
          onClick={onClick}
          textColor="#fff"
        />
      </Box>
    </Box>
  </>
);
