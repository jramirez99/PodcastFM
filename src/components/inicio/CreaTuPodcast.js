import React from 'react';

import imagen from '../../img/imagen_podcast.svg';

export const CreaTuPodcast = () => {
    return (
        <section className="contenedor seccion">
            <div className="crea-grid">
                <div className="imagen">
                    <img 
                        src={ imagen } 
                        alt="imagen podcast"
                    />
                </div>

                <div className="contenido">
                    <h2> Crea tu podcast </h2>
                    <p> 
                        Nosotros lo distribuimos a las plataformas más populares como, Google Podcast, Spotify, Apple Podcast y Youtube
                    </p>
                </div>
            </div>
        </section>
    )
};
