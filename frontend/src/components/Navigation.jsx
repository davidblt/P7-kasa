// composant de navigation 
import React from 'react';
// NavLink correspond à "href" pour créer des ancres :
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>

                <NavLink to="/about">
                    <li>A Propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;