import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { StrictMode } from 'react';
import EnvironmentVars from './core/config/EnvironmentVars';
import AppGlobalStyles from './components/common/global/AppGlobalStyles';
import AppTheme from './components/common/global/AppTheme';
import AppRoutes from './components/routes/app.routes';

const App = () => (
  <BrowserRouter basename={EnvironmentVars.publicUrl}>
    <ThemeProvider theme={AppTheme}>
      <CssBaseline />
      <AppGlobalStyles />
      <StrictMode>
        <AppRoutes />
      </StrictMode>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
