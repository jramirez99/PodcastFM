import React from 'react';

import imggrafica from '../../img/grafica.svg';

export const Estadisticas = () => {
    return (
        <section 
            className="estadisticas seccion contenedor"
        >
            <h2> Estadísticas Detalladas</h2>
            <p>
                Nosotros lo distribuimos a las plataformas más populares como Google Podcast, Spotify, Apple Podcast y Youtube
            </p>

            <img 
                src={ imggrafica } 
                alt="imagen grafica"
            />
        </section>
    )
};
