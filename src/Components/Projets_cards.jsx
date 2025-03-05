import React, { useState } from 'react';
import Modal from './Modal';

const Projets_cards = ({ project }) => {
    const [StatuModal, SetStatumodal] = useState(false);

    const OpenModal = () => SetStatumodal(true);
    const CloseModal = () => SetStatumodal(false);

    return (
        <>
            <div onClick={OpenModal} className="project_card">
                <div className="containerImg">
                    <img className="background" src={project.image} alt={project.title} />
                    <img className="logo" src={project.logo} alt={project.title} />
                </div>
            </div>

            <Modal StatuModal={StatuModal} closeModal={CloseModal} project={project} />
        </>
    );
};

export default Projets_cards;
