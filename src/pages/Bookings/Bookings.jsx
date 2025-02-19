import React from 'react';
import './Bookings.css';

const Bookings = () => {
    const cities = [
        {
            name: 'Ranchi',
            info: 'Ranchi is the capital city of Jharkhand, known for its waterfalls and beautiful landscapes.',
            phone: '+91 9534201906',
            whatsapp: 'https://wa.me/919534201906?text=Hello%20from%20Ranchi!'
        },
        {
            name: 'Noida',
            info: 'Noida is a major hub for IT and software companies, located near New Delhi.',
            phone: '+91 9534201906',
            whatsapp: 'https://wa.me/919534201906?text=Hello%20from%20Noida!'
        },
        {
            name: 'Vrindavan',
            info: 'Vrindavan is a sacred city associated with the life of Lord Krishna, famous for its temples.',
            phone: '+91 9534201906',
            whatsapp: 'https://wa.me/919534201906?text=Hello%20from%20Vrindavan!'
        }
    ];

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            
            <div className="city-info">
                {cities.map((city, index) => (
                    <div key={index} className="city-card">
                        <h2>{city.name}</h2>
                        <p>{city.info}</p>
                        <p><strong>Phone:</strong> {city.phone}</p>
                        <a href={city.whatsapp} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                            Chat on WhatsApp
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bookings;
