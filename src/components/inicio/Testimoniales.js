import React from 'react';

import imagen from '../../img/testiPodcast.svg';
import { Testimonial } from './Testimonial';

export const Testimoniales = () => {
    return (
        <section 
            className="contenedor seccion testimoniales"
        >
            <div className="imagen">
                <img 
                    src={ imagen } 
                    alt="imagen app"
                />
            </div>

            <div className="contenido">

                <Testimonial />

            </div>
        </section>
    )
};
