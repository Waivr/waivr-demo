import { CssBaseline, ThemeProvider } from '@mui/material';
import AppTheme from '../src/components/common/global/AppTheme';
import React from 'react';

export const decorators = [
  (Story: any) => (
    <ThemeProvider theme={AppTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
