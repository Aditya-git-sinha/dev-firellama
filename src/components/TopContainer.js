import React from 'react';
import '../css/TopContainer.css'; // Make sure the path is correct
import ContactForm from './ContactUs';


function TopContainer({ openDialog }) {
  const handleContactDialog = () => {
    openDialog(<ContactForm />);
  };
  return (
    <div className="top-container" id="top-container">
      <div className="content-container">
        <div className="business-tagline">
          <h1 className="header-shine">We Handle Your Tech While You Manage Your Business</h1>
          <p className="vision-text">Engineer Your Vision Into Reality with Our Expertise. We help you build software for your business</p>
          <button className="contact-us-button" onClick={handleContactDialog}>Contact Us</button>
        </div>
        <img src="https://aditya113141.github.io/assets/topmockup.png" alt="You are seeing this coz your Internet is shit" className="decorative-image" />
      </div>
    </div>
  );
}

export default TopContainer;