import React from 'react';
import { FaPlane, FaTools, FaGraduationCap } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="fade-in-up">Expert Aircraft Maintenance & Flight Training</h1>
            <p className="hero-subtitle fade-in-up">
              Specializing in Cirrus aircraft maintenance and personalized flight instruction at Danbury Municipal Airport
            </p>
            <div className="hero-buttons fade-in-up">
              <a href="#contact" className="btn-primary">Book Discovery Flight</a>
              <a href="#services" className="btn-secondary">Our Services</a>
            </div>
          </div>

          <div className="hero-cards">
            <div className="glass-card hero-card">
              <FaGraduationCap className="card-icon" />
              <h3>Flight Training</h3>
              <p>Part 61 flight school with experienced instructors</p>
            </div>
            <div className="glass-card hero-card">
              <FaTools className="card-icon" />
              <h3>Maintenance</h3>
              <p>Expert Cirrus aircraft maintenance and inspections</p>
            </div>
            <div className="glass-card hero-card">
              <FaPlane className="card-icon" />
              <h3>Aircraft Rental</h3>
              <p>Well-maintained fleet available for rent</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
