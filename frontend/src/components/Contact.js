import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'flight-training',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const response = await axios.post(`${apiUrl}/api/contact`, formData);

      if (response.data.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'flight-training',
          message: ''
        });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(error.response?.data?.message || 'Failed to send message. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Ready to start your aviation journey? Contact us today.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="glass-card info-card">
              <FaMapMarkerAlt className="info-icon" />
              <h3>Location</h3>
              <p>1 Wallingford Rd, Suite 2<br />Danbury, CT 06810<br />Danbury Municipal Airport (KDXR)</p>
            </div>

            <div className="glass-card info-card">
              <FaPhone className="info-icon" />
              <h3>Phone</h3>
              <p><a href="tel:2036170645">(203) 617-0645</a></p>
            </div>

            <div className="glass-card info-card">
              <FaEnvelope className="info-icon" />
              <h3>Email</h3>
              <p><a href="mailto:brent@darcyaviation.com">brent@darcyaviation.com</a></p>
            </div>

            <div className="glass-card info-card">
              <FaClock className="info-icon" />
              <h3>Hours</h3>
              <p>Monday - Sunday<br />8:00 AM - 6:00 PM<br />By Appointment</p>
            </div>
          </div>

          <div className="glass-card contact-form-container">
            <h3>Send Us a Message</h3>
            {submitted && (
              <div className="success-message">
                Thank you! We'll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="flight-training">Flight Training</option>
                  <option value="maintenance">Aircraft Maintenance</option>
                  <option value="rental">Aircraft Rental</option>
                  <option value="drone">Drone Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className="form-input"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary submit-btn" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
