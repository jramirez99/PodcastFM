import React from 'react';

import logo from '../../img/logo.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <div 
                className="contenedor footer-grid"
            >
                <div className="footer-widget">
                    <div className="logo">
                        <img 
                            src={ logo } 
                            alt="imagen logo"
                        />
                    </div>
                </div>

                <div className="footer-widget">
                    <h3> Soluciones </h3>
                    <nav>
                        <a 
                            href="!#"
                        > 
                            Soluciones 
                        </a>
                        <a 
                            href="!#"
                        > 
                            Gráficas
                        </a>
                        <a 
                            href="!#"
                        > 
                            Distribución 
                        </a>
                    </nav>
                </div>

                <div className="footer-widget">
                    <h3> Soporte </h3>
                    <nav>
                        <a 
                            href="!#"
                        > 
                            Documentación
                        </a>
                        <a 
                            href="!#"
                        > 
                            Precios 
                        </a>
                        <a 
                            href="!#"
                        > 
                            API 
                        </a>
                    </nav>
                </div>

                <div className="footer-widget">
                    <h3> Podcas FM </h3>
                    <nav>
                        <a 
                            href="!#"
                        > 
                            Nosotros 
                        </a>
                        <a 
                            href="!#"
                        > 
                            Blog 
                        </a>
                        <a 
                            href="!#"
                        > 
                            Clientes 
                        </a>
                    </nav>
                </div>
            </div>

            <p 
                className="copyright contenedor"
            > 
                Podcast FM Todos los derechos reservados &copy; 
            </p>
        </footer>
    )
};
