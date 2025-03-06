import React from 'react';
import Presentation from '@/Components/Presentation';
import Projets from '@/Components/Projets';
import Contact from '@/Components/Contact';
import Competences from '../../../Components/Competences';
const Home = () => {
    return (
        <div>
            <Presentation />
            <Projets />
            <Competences />
            <Contact />
        </div>
    );
};

export default Home;