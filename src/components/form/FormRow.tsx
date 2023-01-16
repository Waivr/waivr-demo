import { FormLabel, Grid, Box } from '@mui/material';
import { Input, InputProps } from './Input';

type Props = InputProps & {
  label: string;
};

const labelStyles = {
  fontSize: '10px',
  lineHeight: '12px',
  verticalAlign: 'bottom',
  color: '#172836',
  paddingRight: '15px',
};

const cellStyle = { paddingTop: '5px' };

// TODO
/*
  - handle id and for attributes
  - handle validation likely at the parent component
*/

export const FormRow = ({ label, defaultValue, type }: Props) => (
  <>
    <Grid xs={2} sx={{ ...cellStyle }}>
      <Box sx={{ textAlign: 'end' }}>
        <FormLabel sx={{ ...labelStyles }}>{label}</FormLabel>
      </Box>
    </Grid>
    <Grid xs={10} sx={{ ...cellStyle }}>
      <Input defaultValue={defaultValue} type={type} />
    </Grid>
  </>
);
