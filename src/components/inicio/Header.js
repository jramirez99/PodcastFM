import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/logo.svg';

export const Header = () => {
    return (
        <header className="site-header">
            <div 
                className="contenedor header-grid"
            >
                <div className="logo">
                    <img 
                        src={ logo } 
                        alt="logo podcast"
                    />
                </div>
                
                <div className="contenido-header">
                    <h1> Tu plataforma para publicar tus podcats </h1>
        
                    <Link 
                        to="/login" 
                        className="boton"
                    > 
                        Crear cuenta 
                    </Link>
                </div>
            </div>
        </header>
    )
};
