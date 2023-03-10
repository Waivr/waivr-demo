import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import Lottie from 'lottie-react';
import { Button } from '../button/Button';
import faceIdAnimation from './assets/31873-face-id-scan.json';
import BankOfWesterosLogo from './assets/bank-of-westeros.png';

type Props = {
  onClick: () => void;
};

const styles = {
  padding: '28px 24px 15px 24px',
  backgroundColor: '#3C89C6',
  height: '100%',
  header: {
    textAlign: 'center',
    display: 'block',
    color: '#fff',
    fontSize: '22px',
    lineHeight: '30px',
    fontWeight: 700,
    marginTop: '5px',
    marginBottom: '20px',
    img: {
      verticalAlign: 'middle',
      height: '25px',
      marginLeft: '10px',
    },
  },
  form: {
    marginTop: '100px',
    backgroundColor: '#fff',
    padding: '20px',
    border: 'solid 1 #fff',
    borderRadius: '15px',
    div: {
      marginBottom: '10px',
    },
    button: {
      textAlign: 'center',
      div: { width: '100%', fontSize: '13px' },
    },
    forgotPw: {
      color: '#3F7AA8',
      fontWeight: '500',
      marginTop: '5px',
    },
  },
  faceId: {
    zIndex: 100,
    position: 'absolute',
    top: '200px',
    left: 'calc(50% - 65px)',
    border: 'solid 1px rgba(219,222,226, 1)',
    borderRadius: '15px',
    overflow: 'hidden',
    width: '130px',
    height: '130px',
    backgroundColor: 'rgba(219,222,226, 1)',
    div: {
      width: '100%',
      height: '100%',
    },
  },
  register: {
    hr: {
      border: 'none',
      height: '1px',
      color: '#fff',
      backgroundColor: 'rgba(255,255,255,.2)',
      marginBottom: '20px',
    },
    position: 'absolute',
    bottom: '15px',
    left: 0,
    color: '#fff',
    width: '100%',
    fontSize: '15px',
    textAlign: 'center',
    padding: '20px',
  },
};

export const BankLogin = ({ onClick }: Props) => {
  setTimeout(() => onClick(), 2750);
  return (
    <Box sx={{ ...styles }}>
      <Box sx={{ ...styles.header }}>
        <Box>
          Bank of Westeros
          <img src={BankOfWesterosLogo} alt="bank of westeros" />
        </Box>
      </Box>
      <Box sx={{ ...styles.faceId }}>
        <Lottie animationData={faceIdAnimation} />
      </Box>
      <Box sx={{ ...styles.form }}>
        <TextField
          disabled
          label="Username"
          defaultValue="jsnow283"
          variant="standard"
          sx={{ width: '100%' }}
        />{' '}
        <TextField
          disabled
          label="Password"
          defaultValue=""
          variant="standard"
          sx={{ width: '100%' }}
        />
        <Box sx={{ ...styles.form.button }}>
          <Button
            backgroundColor="#3F7AA8"
            label="Sign In"
            textColor="#fff"
            onClick={() => onClick()}
          />
          <Box sx={{ ...styles.form.forgotPw }}>
            Forgot username or password?
          </Box>
        </Box>
      </Box>
      <Box sx={{ ...styles.register }}>
        <hr />
        Register/Activate
      </Box>
    </Box>
  );
};
