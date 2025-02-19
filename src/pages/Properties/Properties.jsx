import React from 'react';
import './Properties.css';

const Properties = () => {
    return (
        <div className="about-container">
            <h1>About Our Company</h1>

            <section className="about-section">
                <h2>What We Do</h2>
                <p>
                    FutureBlink is a leading software solutions company specializing in full-stack development,
                    automated testing, and scalable cloud applications. We deliver cutting-edge technology
                    solutions that empower businesses to achieve their digital transformation goals.
                </p>
            </section>

            <section className="about-section">
                <h2>Our Achievements</h2>
                <ul>
                    <li>Successfully developed and launched 20+ enterprise applications.</li>
                    <li>Worked with 50+ global clients across various industries.</li>
                    <li>Recognized for innovation in AI-driven automation and web development.</li>
                </ul>
            </section>

            <section className="about-section">
                <h2>Major Roles & Industries</h2>
                <p>
                    Our company plays a crucial role in industries such as **Fintech, E-commerce, EdTech, and
                    SaaS development**. We focus on building secure, high-performance, and scalable applications.
                </p>
            </section>

            <section className="about-section">
                <h2>Where We Work</h2>
                <p>
                    Currently, we operate in three major cities:
                    <ul>
                        <li><strong>Ranchi:</strong> Headquarters and R&D Center</li>
                        <li><strong>Noida:</strong> Corporate and Client Management Office</li>
                        <li><strong>Vrindavan:</strong> Special Projects & Innovation Hub</li>
                    </ul>
                </p>
            </section>

            <section className="about-section">
                <h2>Our 5-Year Goal</h2>
                <p>
                    Over the next 5 years, our goal is to:
                    <ul>
                        <li>Expand our team to 500+ tech professionals.</li>
                        <li>Become a global leader in AI-powered automation and web applications.</li>
                        <li>Establish offices in 10+ countries.</li>
                        <li>Develop products that impact millions of users worldwide.</li>
                    </ul>
                </p>
            </section>

        </div>
    );
};

export default Properties;
