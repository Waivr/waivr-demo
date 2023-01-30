import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppGlobalStyles from './components/common/global/AppGlobalStyles';
import EnvironmentVars from './core/config/EnvironmentVars';
import AppServiceWorker from './serviceWorker';
import StorageContentManager from './core/storage/storageContentManager';

// eslint-disable-next-line no-console
console.log('App started with Env Variables.', EnvironmentVars);
StorageContentManager.setToken(EnvironmentVars.getEnvVars().apiAccessToken);

const rootNode = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

AppServiceWorker.unregister();

rootNode.render(
    <React.StrictMode>
        <AppGlobalStyles />
        <App />
    </React.StrictMode>,
);
