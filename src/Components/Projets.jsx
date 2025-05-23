import React from 'react';
import Projets_cards from './Projets_cards';


import projectsData from '@/Assets/API/Projets.json';

const Projets = () => {
    return (
        <section id='projets'>
            <h2>Mes Projets</h2>
            <div className='container-projets'>

                {projectsData.map(project => (
                    <Projets_cards key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projets;