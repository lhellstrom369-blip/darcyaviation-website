import React from 'react';
import { FaGraduationCap, FaTools, FaPlane, FaCamera, FaCheckCircle } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaGraduationCap />,
      title: 'Flight Training',
      description: 'Part 61 flight school with experienced FAR Part 91, 135 & 121 certified instructors',
      features: [
        'Private Pilot License',
        'Instrument Rating',
        'Commercial License',
        'Discovery Flights',
        'Personalized Instruction'
      ]
    },
    {
      icon: <FaTools />,
      title: 'Aircraft Maintenance',
      description: 'Expert maintenance specializing in Cirrus aircraft with comprehensive inspection services',
      features: [
        'Pre-Buy Inspections',
        '100-Hour Inspections',
        'Annual Inspections',
        'Cirrus Specialty Service',
        'Fleet Maintenance'
      ]
    },
    {
      icon: <FaPlane />,
      title: 'Aircraft Rental',
      description: 'Well-maintained fleet available for rental with flexible scheduling',
      features: [
        'Modern Aircraft Fleet',
        'Competitive Rates',
        'Online Booking',
        'Flexible Scheduling',
        'Member Discounts'
      ]
    },
    {
      icon: <FaCamera />,
      title: 'Drone Services',
      description: 'Professional drone photography and Part 107 training services',
      features: [
        'Aerial Photography',
        'Commercial Drone Ops',
        'Part 107 Training',
        'Real Estate Photography',
        'Inspection Services'
      ]
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive aviation solutions for pilots and aircraft owners</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="glass-card service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <FaCheckCircle className="check-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-primary service-btn">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
