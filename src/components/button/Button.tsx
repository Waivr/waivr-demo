import { Box } from '@mui/system';

type Props = {
  label: string;
  backgroundColor: string;
  textColor: string;
};

const styles = {
  minWidth: '131px',
  height: '35px',
  lineHeight: '35px',
  display: 'inline-block',
  borderRadius: '17.5px',
  textAlign: 'center',
};

export const Button = ({ label, backgroundColor, textColor }: Props) => (
  <Box sx={{ ...styles, bgcolor: backgroundColor, color: textColor }}>
    {label}
  </Box>
);
