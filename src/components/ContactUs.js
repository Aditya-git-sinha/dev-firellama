import React, { useState } from 'react';
import '../css/ContactUs.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    contactPerson: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Reset error state upon changing input
    setError('');
  };

  const validateForm = () => {
    if (!formData.contactPerson || !formData.subject || !formData.message) {
      return 'Please fill out all required fields.';
    }
    if (!formData.email && !formData.phoneNumber) {
      return 'Please enter either an email address or a phone number.';
    }
    return '';
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const validationError = validateForm();
  if (validationError) {
    setError(validationError);
    return;
  }

  try {
    const response = await fetch('https://contact-backend-form.onrender.com/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (response.ok) {
      console.log('Form submitted successfully:', result.message);
      // Reset form or show success message
      setFormData({
        contactPerson: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: '',
      });
      setError('');
    } else {
      setError(result.error || 'Failed to submit form. Please try again.');
    }
  } catch (err) {
    console.error('Error submitting form:', err);
    setError('An error occurred. Please try again later.');
  }
};

  return (
    <div className="contact-form">
      <p className="contact-form-intro">
        Have a project idea or just a few queries? Let us know, and we will be glad to be of service to you.
      </p>
      <p className="contact-form-email">Contact us on - <a href="mailto:aditya113141@firellama.app">aditya113141@firellama.app</a></p>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-control">
          <label htmlFor="contactPerson">Contact Person *</label>
          <input
            type="text"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="phone">Phone Number (with country code)</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="+[country code][number]"
          />
        </div>
        <div className="form-control">
          <label htmlFor="subject">Subject *</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="message">Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
            required
          ></textarea>
        </div>
        {error && <p className="form-error">{error}</p>}
        <div className="form-control">
          <button type="submit">Send Message</button>
        </div>
      </form> 
    </div>
  );
}

export default ContactForm;
