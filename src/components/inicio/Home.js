import React from 'react';

import { Header } from './Header';
import { CreaTuPodcast } from './CreaTuPodcast';
import { Beneficios } from './Beneficios';
import { Estadisticas } from './Estadisticas';
import { Planes } from './Planes';
import { Testimoniales } from './Testimoniales';
import { Footer } from './Footer';

export const Home = () => {
    return (
        <>
            <Header />

            <CreaTuPodcast />

            <Beneficios />

            <Estadisticas />

            <Planes />

            <Testimoniales />

            <Footer />
        </>
    )
};
