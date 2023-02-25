import { Box } from '@mui/system';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
} from '@mui/material';
import { Button } from '../button/Button';

type Props = {
  onClick: () => void;
};

const styles = {
  padding: '64px 40px 15px 40px',
  position: 'relative',
  height: '100%',
  header: {
    fontSize: '19px',
    lineHeight: '20px',
    fontWeight: '400',
    color: '#172836',
    marginBottom: '30px',
  },
  hr: {
    border: 'none',
    height: '1px',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,.2)',
    marginBottom: '20px',
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

export const AccountSelection = ({ onClick }: Props) => (
  <Box sx={{ ...styles }}>
    <Box sx={{ ...styles.header }}>
      <Box>What do you want to share?</Box>
    </Box>
    <Box>
      <Box>These are the accounts that can be shared</Box>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Choose all accounts" />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Basic Checking (...8230)"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Basic Savings (...0375)"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Credit Card (...1294)"
        />
      </FormGroup>
      <hr />{' '}
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Include new, eligible accounts automatically"
        />
        <FormHelperText>
          This also includes replacement accounts for lost or stolen credit
          cards, if applicable.
        </FormHelperText>
      </FormGroup>
    </Box>
    <Box sx={{ ...styles.continue }}>
      <hr />{' '}
      <Button
        label="Continue"
        backgroundColor="#172836"
        onClick={onClick}
        textColor="#fff"
      />
    </Box>
  </Box>
);
