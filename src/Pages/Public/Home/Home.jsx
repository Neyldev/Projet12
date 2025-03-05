import React from 'react';
import Presentation from '@/Components/Presentation';
import Projets from '@/Components/Projets';
import Contact from '@/Components/Contact';
const Home = () => {
    return (
        <div>
            <Presentation />
            <Projets />
            <Contact />
        </div>
    );
};

export default Home;