import { Box } from '@mui/system';

type Props = { children: React.ReactNode };

const styles = {
  border: '1px solid #D9D9D9',
  borderRadius: '11px',
  padding: '30px 60px',
};

export const Panel = ({ children }: Props) => (
  <Box sx={{ ...styles }}>{children}</Box>
);
