import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav id="nav-bar">
            <ul>
                <li className="nav-link menu-link" id="menu-item">
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li className="nav-link menu-link" id="menu-item">
                    <NavLink to={"/aboutUs"}>About Us</NavLink>
                </li> 
            </ul>
        </nav>
    );
};