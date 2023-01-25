import { colors, Theme } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Shadows } from '@mui/material/styles/shadows';
import { Typography } from '@mui/material/styles/createTypography';

const shadows: Shadows = [
  'none',
  '0 0 0 1px rgba(63,63,68,0.05), 0 1px 2px 0 rgba(63,63,68,0.15)',
  '0 0 1px 0 rgba(0,0,0,0.31), 0 2px 2px -2px rgba(0,0,0,0.25)',
  '0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)',
  '0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)',
  '0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)',
  '0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)',
  '0 0 1px 0 rgba(0,0,0,0.31), 0 4px 8px -2px rgba(0,0,0,0.25)',
  '0 0 1px 0 rgba(0,0,0,0.31), 0 5px 8px -2px rgba(0,0,0,0.25)',
  '0 0 1px 0 rgba(0,0,0,0.31), 0 6px 12px -4px rgba(0,0,0,0.25)',
  '0 0 1px 0 rgba(0,0,0,0.31), 0 7px 12px -4px rgba(0,0,0,0.25)',
  '0 0 1px 0 rgba(0,0,0,0.31), 0 6px 16px -4px rgba(0,0,0,0.25)',
  '0 0 1px 0 rgba(0,0,0,0.31), 0 7px 16px -4px rgba(0,0,0,0.25)',
  '0 0 1px 0 rgba(0,0,0,0.31), 0 8px 18px -8px rgba(0,0,0,0.25)',
  '0 0 1px 0 rgba(0,0,0,0.31), 0 9px 18px -8px rgba(0,0,0,0.25)',
  '0 0 1px 0 rgba(0,0,0,0.31), 0 10px 20px -8px rgba(0,0,0,0.25)',
  '0 0 1px 0 rgba(0,0,0,0.31), 0 11px 20px -8px rgba(0,0,0,0.25)',
  '0 0 1px 0 rgba(0,0,0,0.31), 0 12px 22px -8px rgba(0,0,0,0.25)',
  '0 0 1px 0 rgba(0,0,0,0.31), 0 13px 22px -8px rgba(0,0,0,0.25)',
  '0 0 1px 0 rgba(0,0,0,0.31), 0 14px 24px -8px rgba(0,0,0,0.25)',
  '0 0 1px 0 rgba(0,0,0,0.31), 0 16px 28px -8px rgba(0,0,0,0.25)',
  '0 0 1px 0 rgba(0,0,0,0.31), 0 18px 30px -8px rgba(0,0,0,0.25)',
  '0 0 1px 0 rgba(0,0,0,0.31), 0 20px 32px -8px rgba(0,0,0,0.25)',
  '0 0 1px 0 rgba(0,0,0,0.31), 0 22px 34px -8px rgba(0,0,0,0.25)',
  '0 0 1px 0 rgba(0,0,0,0.31), 0 24px 36px -8px rgba(0,0,0,0.25)',
];

const typography: Partial<Typography> = {
  fontFamily: ['Inter', 'sans-serif'].join(','),
  subtitle1: {
    color: '#172836',
    fontSize: '12px',
    lineHeight: '15px',
    fontWeight: '700',
    fontStyle: 'normal',
  },
  body1: {
    color: '#000',
    fontSize: '12px',
    lineHeight: '15px',
  },
  h1: {
    fontWeight: 700,
    fontSize: '20px',
    color: '#000',
    lineHeight: '24px',
  },
  h2: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#000',
    lineHeight: '18px',
  },
};

const AppTheme: Theme = createTheme({
  palette: {
    background: {
      default: '#FFFFFF',
      paper: colors.common.white,
    },
    primary: {
      contrastText: '#ffffff',
      main: '#000',
      dark: '#172836',
    },
    text: {
      primary: '#172836',
      disabled: '#D9D9D9',
    },
  },
  shadows,
  typography,
  components: {
    MuiCssBaseline: {
      styleOverrides: () => ({
        fontFamily: ['Inter', 'sans-serif'].join(','),
        color: '#172836',
        [AppTheme.breakpoints.down('md')]: {
          '#root': { padding: '1rem' },
        },
        a: {
          textDecoration: 'inherit',
          color: '#000',
        },
      }),
    },
  },
});

export default AppTheme;
