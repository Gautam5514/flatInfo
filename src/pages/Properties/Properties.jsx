import React from 'react';
import './Properties.css';

const Properties = () => {
    return (
      <div className="properties-container">
        <h1>About Our Real Estate Company</h1>

        <section className="properties-section">
          <h2>What We Do</h2>
          <p>
            At FlatInfo, we specialize in providing comprehensive real estate solutions. Our services include property management, real estate investment consulting, and residential and commercial property sales and leasing. We are committed to helping our clients find their dream properties and make informed investment decisions.
          </p>
        </section>

        <section className="properties-section">
          <h2>Our Achievements</h2>
          <ul>
            <li>Successfully managed over 500 properties across various regions.</li>
            <li>Assisted 1000+ clients in buying, selling, and leasing properties.</li>
            <li>Recognized for excellence in customer service and market expertise.</li>
          </ul>
        </section>

        <section className="properties-section">
          <h2>Major Roles & Industries</h2>
          <p>
            Our company plays a crucial role in the real estate industry, focusing on residential, commercial, and industrial properties. We aim to provide secure, high-value, and profitable real estate solutions to our clients.
          </p>
        </section>

        <section className="properties-section">
          <h2>Where We Work</h2>
          <p>
            Currently, we operate in three major cities:
            <ul>
              <li><strong>Ranchi:</strong> Headquarters and Property Management Office</li>
              <li><strong>Noida:</strong> Corporate and Client Relations Office</li>
              <li><strong>Vrindavan:</strong> Special Projects & Development Hub</li>
            </ul>
          </p>
        </section>

        <section className="properties-section">
          <h2>Our 5-Year Goal</h2>
          <p>
            Over the next 5 years, our goal is to:
            <ul>
              <li>Expand our portfolio to 1000+ properties.</li>
              <li>Become a leading real estate company in the region.</li>
              <li>Establish offices in 10+ major cities.</li>
              <li>Develop sustainable and innovative real estate projects.</li>
            </ul>
          </p>
        </section>
      </div>
    );
};

export default Properties;
