import { Box } from '@mui/system';

type Props = {
  label: string;
};

export const Header = ({ label }: Props) => (
  <Box sx={{ typography: 'subtitle1' }}>{label}</Box>
);
