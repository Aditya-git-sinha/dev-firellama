import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import '../css/Navbar.css';
import logo from '../assets/logo.png';
import Routes from './Route'; // Adjust path if necessary
import { capitalizeWords } from './Utility';

function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    // Generate navigation links from Routes
    const navLinks = Object.entries(Routes).map(([key, path]) => (
        <a key={key} href={path} className="nav-link">
            {capitalizeWords(key)} {/* Render path label */}
        </a>
    ));

    const MenuToggleButton = ({ isOpen, toggleHandler }) => {
        const buttonClass = `navbar-toggle ${isOpen ? 'toggle-active' : ''}`;
        return (
            <button className={buttonClass} aria-label="Toggle navigation" onClick={toggleHandler}>
                <FontAwesomeIcon icon={faBurger} className="menu-icon" />
            </button>
        );
    };


    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <MenuToggleButton isOpen={isMobileMenuOpen} toggleHandler={toggleMobileMenu} />
            <div className={`navbar-menu ${isMobileMenuOpen ? 'is-active' : ''}`}>
                {navLinks}
            </div>
        </nav>
    );
}

export default Navbar;