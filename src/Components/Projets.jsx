import React from 'react';
import Projets_cards from './Projets_cards';


import projectsData from '@/Assets/API/Projets.json';

const Projets = () => {
    return (
        <div id='projets'>
            {projectsData.map(project => (
                <Projets_cards key={project.id} project={project} />
            ))}
        </div>
    );
};

export default Projets;