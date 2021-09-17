import React from 'react';
import { Home } from './components/inicio/Home';

import { AppRouter } from './router/AppRouter';

import './scss/app.scss';

export const App = () => {
    return (
        <AppRouter>

            <Home />

        </AppRouter>
    )
};
