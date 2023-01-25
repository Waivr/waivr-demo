import { Typography } from '@mui/material';

type Props = {
  label: string;
};

export const PanelHeader = ({ label }: Props) => (
  <Typography variant="subtitle1">{label}</Typography>
);
