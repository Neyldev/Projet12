import React from 'react';

const Competences = () => {
    return (
        <div id='competences' className="competences-container">
            <h2>Mes Compétences</h2>
            <div className="competences-icons">
                <div className="icon">
                    <i className="fa-brands fa-js"></i>
                    <p>JavaScript</p>
                </div>
                <div className="icon">
                    <i className="fa-brands fa-html5"></i>
                    <p>HTML</p>
                </div>
                <div className="icon">
                    <i className="fa-brands fa-css3-alt"></i>
                    <p>CSS</p>
                </div>
                <div className="icon">
                    <i className="fa-brands fa-sass"></i>
                    <p>SCSS</p>
                </div>
                <div className="icon">
                    <i className="fa-brands fa-react"></i>
                    <p>React</p>
                </div>
                <div className="icon">
                    <i className="fa-brands fa-react"></i>
                    <p>Redux</p>
                </div>
            </div>
        </div>
    );
};

export default Competences;
