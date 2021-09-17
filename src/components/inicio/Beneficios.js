import React from 'react';

import imagen from '../../img/podcast_cover.jpg';

export const Beneficios = () => {
    return (
        <section className="beneficios seccion">
            <div 
                className="beneficios-grid contenedor"
            >
                <div className="contenido">
                    <h2> Llega a miles y gana dinero </h2>
                    <p>
                        Los podcast se han convertido en un medio de entretenimiento que cada día gana más seguidores, con temas variados puedes crear tus propios podcasts, ser escuchado(a) por miles de personas y convertir tu pasión en un negocio
                    </p>
                </div>

                <div className="imagen">
                    <img 
                        src={ imagen } 
                        alt="imagen cover podcast"
                    />
                </div>
            </div>
        </section>
    )
};
