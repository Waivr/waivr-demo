import { Box } from '@mui/system';

type Props = {
  label: string;
  backgroundColor: string;
  textColor: string;
  disabled?: boolean;
  onClick: (evt: any) => void;
};

const styles = {
  minWidth: '131px',
  height: '35px',
  lineHeight: '35px',
  display: 'inline-block',
  borderRadius: '17.5px',
  textAlign: 'center',
  fontSize: '12px',
  fontWeight: '700',
  fontStyle: 'normal',
  padding: '0 25px',
};

export const Button = ({
  label,
  backgroundColor,
  textColor,
  disabled,
  onClick,
}: Props) => (
  <Box
    sx={{
      ...styles,
      bgcolor: disabled ? '#969B9F' : backgroundColor,
      color: textColor,
      cursor: disabled ? 'inherit' : 'pointer',
    }}
    onClick={(evt) => (disabled ? undefined : onClick(evt))}
  >
    {label}
  </Box>
);
