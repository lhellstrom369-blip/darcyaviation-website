import React from 'react';
import { FaMapMarkerAlt, FaCertificate, FaUsers, FaStar } from 'react-icons/fa';
import './About.css';

const About = () => {
  const stats = [
    { icon: <FaCertificate />, value: '20+', label: 'Years Experience' },
    { icon: <FaUsers />, value: '500+', label: 'Students Trained' },
    { icon: <FaStar />, value: '4.9', label: 'Average Rating' },
    { icon: <FaMapMarkerAlt />, value: 'KDXR', label: 'Danbury Airport' }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <h2>About Darcy Aviation</h2>
          <p>Your trusted partner in aviation excellence</p>
        </div>

        <div className="about-content">
          <div className="glass-card about-main">
            <h3>Expert Aviation Services in Connecticut</h3>
            <p>
              Darcy Aviation is a premier aviation service provider based at Danbury Municipal Airport (KDXR) in Connecticut. 
              We specialize in expert aircraft maintenance, particularly for Cirrus aircraft, and provide comprehensive 
              Part 61 flight training with experienced instructors certified under FAR Part 91, 135, and 121.
            </p>
            <p>
              Our team of seasoned professional pilots and instructors is dedicated to providing quality ground and flight 
              training for both recreational and commercial-minded students. We pride ourselves on personalized instruction 
              tailored to each student's individual needs and learning pace.
            </p>
            <p>
              Located in the beautiful Danbury Airport, we serve the affluent Connecticut and New York markets, offering 
              a full range of aviation services including flight training, aircraft maintenance, aircraft rental, and 
              professional drone services.
            </p>
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="why-choose">
          <h3>Why Choose Darcy Aviation?</h3>
          <div className="features-grid">
            <div className="glass-card feature-card">
              <h4>Cirrus Specialists</h4>
              <p>Expert maintenance and training for Cirrus aircraft with specialized knowledge and experience</p>
            </div>
            <div className="glass-card feature-card">
              <h4>Experienced Instructors</h4>
              <p>FAR Part 91, 135 & 121 certified instructors with real-world aviation experience</p>
            </div>
            <div className="glass-card feature-card">
              <h4>Personalized Training</h4>
              <p>Tailored instruction that adapts to your learning style and pace</p>
            </div>
            <div className="glass-card feature-card">
              <h4>Prime Location</h4>
              <p>Conveniently located at Danbury Municipal Airport serving CT and NY</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
