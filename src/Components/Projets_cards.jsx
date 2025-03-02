import React from 'react';

const Projets_cards = ({ project }) => {
    return (
        <div className="project_card">
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} className="project-image" />
            <p>{project.content || "Description à venir..."}</p>
        </div>
    );
};

export default Projets_cards;
