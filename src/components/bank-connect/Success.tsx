import { Box } from '@mui/system';
import { Button } from '../button/Button';
import HeaderIcon from './assets/success-icon.svg';

type Props = {
  onClick: () => void;
};

const styles = {
  padding: '168px 40px 15px 40px',
  header: {
    fontSize: '26px',
    lineHeight: '30px',
    fontWeight: 700,
    marginTop: '5px',
    marginBottom: '20px',
    textAlign: 'center',
    display: 'block',
    color: '#172836',
    '.icon': {
      height: '80px',
      width: '80px',
      marginBottom: '24px',
    },
  },
  text: {
    textAlign: 'center',
    fontSize: '16px',
    lineHeight: '18px',
    color: '#7C7C7C',
  },
  continue: {
    textAlign: 'center',
    marginTop: '16px',
    position: 'absolute',
    bottom: '15px',
    left: 0,
    color: '#fff',
    width: '100%',
    fontSize: '15px',
    padding: '20px',
  },
};

export const Success = ({ onClick }: Props) => (
  <Box sx={{ ...styles }}>
    <Box sx={{ ...styles.header }}>
      <img className="icon" src={HeaderIcon} alt="success" />
      <Box>Success!</Box>
    </Box>
    <Box sx={{ ...styles.text }}>
      Your account has been successfully linked.
    </Box>

    <Box sx={{ ...styles.continue }}>
      <Button
        label="Continue"
        backgroundColor="#172836"
        onClick={onClick}
        textColor="#fff"
      />
    </Box>
  </Box>
);
