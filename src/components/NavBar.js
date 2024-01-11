import React, { useState } from 'react';
import '../css/Navbar.css'; // Make sure to create a corresponding CSS file
import logo from '../assets/logo.png';


function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="YourLogoHere" /> {/* Logo is now imported from your assets */}
            </div>
            <button className="navbar-toggle" aria-label="Toggle navigation" onClick={toggleMobileMenu}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`navbar-menu ${isMobileMenuOpen ? 'is-active' : ''}`}>
                {/* Navigation links */}
            </div>
        </nav>
    );
}



export default Navbar;