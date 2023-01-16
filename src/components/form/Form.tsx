import { Grid } from '@mui/material';
import PropTypes from 'prop-types';

type Props = { children: React.ReactNode };

const styles = {};

// TODO
/*
  - handle id and for attributes
  - handle validation likely at the parent component
*/

export const Form: React.FC<Props> = ({ children }) => (
  <Grid container sx={{ ...styles }}>
    {children}
  </Grid>
);

Form.propTypes = {
  children: PropTypes.node.isRequired,
};
