import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { Home } from '../components/inicio/Home';
import { Login } from '../components/auth/Login';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                        exact
                        path="/"
                        component={ Home }
                    />
                    <Route 
                        exact
                        path="/login"
                        component={ Login }
                    />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
};
