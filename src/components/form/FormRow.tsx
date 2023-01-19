import { FormLabel, Grid, Box } from '@mui/material';
import { Input, InputProps } from './Input';

type Props = InputProps & {
  label: string;
};

const styles = {
  label: {
    fontSize: '10px',
    lineHeight: '12px',
    verticalAlign: 'bottom',
    color: '#172836',
    paddingRight: '15px',
  },
  cell: { paddingTop: '5px' },
};

// TODO
/*
  - handle id and for attributes
  - handle validation likely at the parent component
*/

export const FormRow = ({ label, defaultValue, type }: Props) => (
  <>
    <Grid item xs={3} sx={{ ...styles.cell }}>
      <Box sx={{ textAlign: 'end' }}>
        <FormLabel sx={{ ...styles.label }}>{label}</FormLabel>
      </Box>
    </Grid>
    <Grid item xs={7} sx={{ ...styles.cell }}>
      <Input defaultValue={defaultValue} type={type} />
    </Grid>
  </>
);
