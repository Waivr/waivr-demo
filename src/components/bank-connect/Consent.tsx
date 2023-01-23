import { Box } from '@mui/system';
import { Button } from '../button/Button';
import HeaderIcon from './assets/header-icon.svg';
import ShieldIcon from './assets/shield.svg';
import PrivateIcon from './assets/private.svg';
import ConnectIcon from './assets/connect.svg';

type Props = {
  onClick: () => void;
};

const styles = {
  padding: '64px 40px 15px 40px',
  header: {
    textAlign: 'center',
    display: 'block',
    fontSize: '19px',
    lineHeight: '20px',
    fontWeight: '400',
    color: '#172836',
    '.icon': {
      height: '80px',
      width: '80px',
      marginBottom: '35px',
    },
    '.pay-by-bank': {
      fontSize: '26px',
      lineHeight: '30px',
      fontWeight: 700,
      marginTop: '5px',
      marginBottom: '38px',
    },
  },
  list: {
    color: '#172836',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    marginBottom: '15px',
    icon: {
      'grid-column-start': '1',
      'grid-column-end': '1',
      img: {
        width: '100%',
      },
      width: '18px',
      height: '21px',
      marginRight: '12px',
    },
    content: {
      'grid-column-start': '2',
      'grid-column-end': '12',
      fontSize: '13px',
      lineHeight: '15px',
    },
    title: {
      fontWeight: '700',
    },
    text: {
      textAlign: 'left',
    },
  },
  disclaimer: {
    marginTop: '80px',
    textAlign: 'center',
    color: '#7C7C7C',
    fontSize: '11px',
    lineHeight: '13px',
    padding: '0 8px',
    a: {
      fontSize: '11px',
      color: '#7C7C7C',
      fontWeight: '700',
      textDecoration: 'underline',
    },
  },
  continue: {
    textAlign: 'center',
    marginTop: '16px',
  },
};

export const Consent = ({ onClick }: Props) => (
  <Box sx={{ ...styles }}>
    <Box sx={{ ...styles.header }}>
      <img className="icon" src={HeaderIcon} alt="bank pay" />
      <Box>Connect your account to</Box>
      <Box className="pay-by-bank">Pay by Bank</Box>
    </Box>
    <Box sx={{ ...styles.list }}>
      <Box sx={{ ...styles.list.icon }}>
        <img src={ShieldIcon} alt="secure" />
      </Box>
      <Box sx={{ ...styles.list.content }}>
        <Box sx={{ ...styles.list.title }}>Secure</Box>
        <Box sx={{ ...styles.list.text }}>
          Never overdraft or miss a payment
        </Box>
      </Box>
    </Box>
    <Box sx={{ ...styles.list }}>
      <Box sx={{ ...styles.list.icon }}>
        <img src={PrivateIcon} alt="private" />
      </Box>
      <Box sx={{ ...styles.list.content }}>
        <Box sx={{ ...styles.list.title }}>Your data belongs to you</Box>
        <Box sx={{ ...styles.list.text }}>
          Your data is never sold and is not visible to merchants
        </Box>
      </Box>
    </Box>
    <Box sx={{ ...styles.list }}>
      <Box sx={{ ...styles.list.icon }}>
        <img src={ConnectIcon} alt="connect" />
      </Box>
      <Box sx={{ ...styles.list.content }}>
        <Box sx={{ ...styles.list.title }}>Connect effortlessly</Box>
        <Box sx={{ ...styles.list.text }}>
          Securely connect your account in seconds
        </Box>
      </Box>
    </Box>
    <Box sx={{ ...styles.disclaimer }}>
      By selecting 'Continue' you agree to the{' '}
      <a href="#">End User Privacy Policy</a>
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
