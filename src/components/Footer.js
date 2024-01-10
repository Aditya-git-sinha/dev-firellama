import React from 'react';
import '../css/Footer.css';
import myLogo from '../assets/logo.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="footer-container">
            <footer className="footer-distributed">
                <div className="footer-left">
                    <h3>
                        <img src={myLogo} alt="Company Logo" className="footer-logo" />
                    </h3>
                    <p className="footer-links">
                        <a href="#" className="link-1">Home</a>
                        <a href="#">Blog</a>
                        <a href="#">Pricing</a>
                        <a href="#">About</a>
                        <a href="#">Faq</a>
                        <a href="#">Contact</a>
                    </p>
                    <p className="footer-company-name">Company Name © 2024</p>
                </div>

                <div className="footer-center">
                    <div>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPhone} />
                        <p>+1.[PHONE]</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p><a href="mailto:[EMAIL]">[EMAIL]</a></p>
                    </div>
                </div>

                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>About the company</span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="footer-icons">
                        <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a href="https://www.github.com"><FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;