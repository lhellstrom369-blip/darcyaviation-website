import React from 'react';
import { FaPlane, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content glass-dark">
          <div className="footer-section">
            <div className="footer-logo">
              <FaPlane className="footer-logo-icon" />
              <span>Darcy Aviation</span>
            </div>
            <p className="footer-description">
              Expert aircraft maintenance and flight training at Danbury Municipal Airport. 
              Your trusted partner in aviation excellence.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Flight Training</a></li>
              <li><a href="#services">Aircraft Maintenance</a></li>
              <li><a href="#services">Aircraft Rental</a></li>
              <li><a href="#services">Drone Services</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <FaMapMarkerAlt />
                <span>1 Wallingford Rd, Suite 2<br />Danbury, CT 06810</span>
              </li>
              <li>
                <FaPhone />
                <a href="tel:2036170645">(203) 617-0645</a>
              </li>
              <li>
                <FaEnvelope />
                <a href="mailto:brent@darcyaviation.com">brent@darcyaviation.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Darcy Aviation. All rights reserved.</p>
          <p>Built with passion for aviation excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
