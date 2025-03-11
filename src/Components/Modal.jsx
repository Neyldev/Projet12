import React from 'react';

const Modal = ({ StatuModal, project, closeModal }) => {

    return (
        StatuModal && (
            <div className="Modal" onClick={closeModal}>
                <div className="Modal-content" onClick={(e) => e.stopPropagation()}>

                    <i className="fa-solid fa-xmark close-btn" onClick={closeModal}></i>
                    <h3 className="modal-title">{project?.titlemodal}</h3>
                    <img className="modal-homepage" src={project?.imagemodal} alt={project?.title} />


                    <div className="info-projet">
                        <div>
                            <h3>Développement du site</h3>
                            <hr />
                            <ul>
                                {project.features?.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3>Présentation du projet</h3>
                            <hr />
                            <p>{project?.description}</p>
                        </div>
                    </div>

                    <hr />

                    <div className='link-site'>
                        {project?.website && (
                            <a href={project.website} target="_blank" rel="noopener noreferrer">
                                Site
                            </a>
                        )}
                        <a href={project?.github} target="_blank" rel="noopener noreferrer">Github</a>
                    </div>

                </div>

            </div >
        )
    );
};

export default Modal;


