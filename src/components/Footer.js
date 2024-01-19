import React from 'react';
import '../css/Footer.css';
import myLogo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const MyIcon = ({ icon, text, href, color = 'black', size = '2x' }) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <FontAwesomeIcon icon={icon} color={color} size={size} />
        <p style={{ marginLeft: '8px', marginBottom: '0', fontSize: '16px' }}>
            {href ? <a href={href} style={{ textDecoration: 'none', color: 'inherit' }}>{text}</a> : text}
        </p>
    </div>
);


function Footer() {
    return (
        <div className="footer-container">
            <footer className="footer-distributed">
                <div className="footer-left">
                    <h3>
                        <img src={myLogo} alt="Company Logo" className="footer-logo" />
                    </h3>
                    <p className="logo-text">Simplify. Succeed. </p>
                </div>
                <div className="footer-center">
                    <MyIcon icon={faMapMarkerAlt} text="Vadodara, Gujarat, India" size='2x' color='red' />
                    <MyIcon icon={faEnvelope} text="Reach Out on Email" href="mailto:aditya113141@firellama.app" color='blue' />
                </div>

                <div className="footer-right">
                    <p className="footer-company-social">

                        Crafting bespoke software experiences to propel your business forward with cutting-edge technology tailored to your vision.
                    </p>
                    <div className="footer-icons">
                        {/* <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a> */}
                        <a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        {/* <a href="https://www.github.com"><FontAwesomeIcon icon={faGithub} /></a> */}
                    </div>
                </div>
            </footer>
            <footer className="footer-copyright">
                <div className="copyright-text">
                    <p>© 2024 FireLLama Technology Pvt. Ltd. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;