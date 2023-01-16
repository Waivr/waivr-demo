import { Box } from '@mui/system';

type Props = {
  label: string;
  backgroundColor: string;
  textColor: string;
  onClick: (evt: any) => undefined;
};

const styles = {
  minWidth: '131px',
  height: '35px',
  lineHeight: '35px',
  display: 'inline-block',
  borderRadius: '17.5px',
  textAlign: 'center',
  cursor: 'pointer',
  fontSize: '12px',
  fontWeight: '700',
  fontStyle: 'normal',
  paddingRight: '25px',
  paddingLeft: '25px',
};

export const Button = ({
  label,
  backgroundColor,
  textColor,
  onClick,
}: Props) => (
  <Box
    sx={{ ...styles, bgcolor: backgroundColor, color: textColor }}
    onClick={onClick}
  >
    {label}
  </Box>
);
