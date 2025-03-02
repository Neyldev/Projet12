import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <a href="#accueil">Mon Portfolio</a>
            </div>

            <nav>
                <ul className="nav-links">
                    <li><a href="#accueil">Accueil</a></li>
                    <li><a href="#presentation">Présentation</a></li>
                    <li><a href="#projets">Projets</a></li>
                    <li><a href="#competences">Compétences</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
