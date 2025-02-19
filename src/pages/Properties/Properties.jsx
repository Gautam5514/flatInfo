import React from 'react';
import './Properties.css';

const Properties = () => {
  return (
    <div className="about-container">
      <h1>About Our Company</h1>

      <section className="about-section">
        <h2>What We Do</h2>
        <p>
          FlatInfo is a premier real estate company specializing in residential and commercial properties.
          We offer a wide range of services including property management, real estate consulting, and
          investment opportunities. Our mission is to help clients find their dream homes and lucrative
          investment properties.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Achievements</h2>
        <ul>
          <li>Successfully facilitated over 500 property transactions.</li>
          <li>Worked with 100+ satisfied clients across various regions.</li>
          <li>Recognized for excellence in customer service and market expertise.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Major Roles & Industries</h2>
        <p>
          Our company plays a crucial role in the real estate industry, focusing on **residential, commercial,
          and industrial properties**. We are dedicated to providing top-notch services and ensuring client
          satisfaction in every transaction.
        </p>
      </section>

      <section className="about-section">
        <h2>Where We Work</h2>
        <p>
          Currently, we operate in three major cities:
          <ul>
            <li><strong>Ranchi:</strong> Headquarters and Main Office</li>
            <li><strong>Noida:</strong> Sales and Client Management Office</li>
            <li><strong>Vrindavan:</strong> Property Development and Innovation Hub</li>
          </ul>
        </p>
      </section>

      <section className="about-section">
        <h2>Our 5-Year Goal</h2>
        <p>
          Over the next 5 years, our goal is to:
          <ul>
            <li>Expand our portfolio to include 1000+ properties.</li>
            <li>Become a leading real estate company in the region.</li>
            <li>Establish offices in 10+ major cities.</li>
            <li>Develop sustainable and innovative real estate solutions.</li>
          </ul>
        </p>
      </section>

    </div>
  );
};

export default Properties;
