import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';

export type InputProps = {
  defaultValue: string;
  type: 'text' | 'email';
};

const styles = {
  '& > :before': {
    borderBottomWidth: '0.5px',
    borderBottomColor: '#D9D9D9',
  },
  '& :after': {
    borderBottomWidth: '0.5px',
    borderBottomColor: '#D9D9D9',
  },
  '& :hover:not(.Mui-disabled, .Mui-error):before': {
    borderBottomWidth: '0.5px',
    borderBottomColor: '#D9D9D9',
  },
  '& div': {
    fontSize: '12px',
    lineHeight: '15px',
  },
};

export const Input = ({ defaultValue, type }: InputProps) => (
  <Box>
    <TextField
      sx={{ ...styles }}
      variant="standard"
      required
      label=""
      defaultValue={defaultValue}
      type={type}
      fullWidth
      InputLabelProps={{
        disableAnimation: true,
      }}
    />
  </Box>
);
