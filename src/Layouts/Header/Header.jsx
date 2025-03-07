import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Mon Portfolio</h1>
            </div>

            <nav>
                <ul className="nav-links">
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
