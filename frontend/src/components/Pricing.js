import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './Pricing.css';

const Pricing = () => {
  const pricingPlans = [
    {
      title: 'Discovery Flight',
      price: '$199',
      duration: '1 Hour',
      description: 'Perfect introduction to flying',
      features: [
        'Pre-flight briefing',
        '30 minutes flight time',
        'Hands-on experience',
        'Post-flight debrief',
        'Logbook entry'
      ],
      popular: false
    },
    {
      title: 'Private Pilot',
      price: '$12,000',
      duration: 'Avg. Cost',
      description: 'Complete private pilot training',
      features: [
        '40+ hours flight time',
        'Ground school included',
        'All materials provided',
        'Experienced instructors',
        'Flexible scheduling',
        'Checkride preparation'
      ],
      popular: true
    },
    {
      title: 'Aircraft Rental',
      price: '$150',
      duration: 'Per Hour',
      description: 'Well-maintained aircraft',
      features: [
        'Modern fleet',
        'Online booking',
        'Competitive rates',
        'Member discounts',
        'Flexible scheduling'
      ],
      popular: false
    }
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="section-header">
          <h2>Transparent Pricing</h2>
          <p>No hidden fees. Clear, competitive rates for all our services.</p>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`glass-card pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3>{plan.title}</h3>
              <div className="price">
                <span className="price-amount">{plan.price}</span>
                <span className="price-duration">/ {plan.duration}</span>
              </div>
              <p className="pricing-description">{plan.description}</p>
              <ul className="pricing-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <FaCheckCircle className="check-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-primary pricing-btn">Get Started</a>
            </div>
          ))}
        </div>

        <div className="pricing-note glass-card">
          <p>
            <strong>Note:</strong> Pricing varies based on aircraft type and specific requirements. 
            Contact us for detailed quotes on maintenance services, advanced training, and custom packages.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
