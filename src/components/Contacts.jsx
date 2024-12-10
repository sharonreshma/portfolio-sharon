import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import '../style/Contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="contact-page">
      <h2 className="section-title">Get in Touch</h2>
      <p>Feel free to reach out if you'd like to collaborate or discuss a project!</p>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <p>Location: Kodaikanal, India</p>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <p>Phone: +91 74489 77325</p>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p>Email: sharonprakash8492@gmail.com</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="input-field"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="input-field"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="input-field"
          />
          <button type="submit" className="submit-btn">
            {isSubmitted ? 'Thank You!' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
