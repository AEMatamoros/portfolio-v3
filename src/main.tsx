import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from '@Router/AppRouter';

import '@fontsource-variable/inter';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AppRouter />
    </React.StrictMode>,
);
