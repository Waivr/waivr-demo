import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { StrictMode } from 'react';
import { ToastContainer } from 'react-toastify';
import EnvironmentVars from './core/config/EnvironmentVars';
import AppGlobalStyles from './components/common/global/AppGlobalStyles';
import AppTheme from './components/common/global/AppTheme';
import AppRoutes from './components/routes/app.routes';

const App = () => (
    <>
        <BrowserRouter basename={EnvironmentVars.publicUrl}>
            <ThemeProvider theme={AppTheme}>
                <AppGlobalStyles />
                <StrictMode>
                    <AppRoutes />
                </StrictMode>
            </ThemeProvider>
        </BrowserRouter>
        <ToastContainer position="top-center" />
    </>
);

export default App;
