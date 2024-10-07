import React from 'react';
import './styles.css';
import Image from 'next/image'; // Import Image from Next.js
import ArrowImg from '../../assets/arrow_forward.png';

const Work = () => {
  const works = [
    { company: "Decodeable.co", description: "Brand Design - Webflow Development - Web Design" },
    { company: "Gofirefly.io", description: "Brand Design - Webflow Development - Web Design" },
    { company: "Blinkops.com", description: "Brand Design - Webflow Development - Web Design" },
    { company: "Withkanvas.com", description: "Brand Design - Webflow Development - Web Design" },
  ];

  return (
    <div className="portfolio-section">
      <div className="portfolio-header">
        <h2 className="portfolio-title">Recent Works</h2>
      </div>
      <div className="work-list">
        {works.map((work, index) => (
          <div className="portfolio-item" key={index}>
            <div className="portfolio-info">
              <h3 className="company-name">{work.company}</h3>
              <p className="work-description">{work.description}</p>
            </div>
            <div className="arrow-button-container">
              <button className="round-button">
                <Image
                  src={ArrowImg}
                  alt="arrow"
                  className="arrow-image"
                  layout="fixed" // Adjust layout based on your design needs
                  width={24} // Set a suitable width for your design
                  height={24} // Set a suitable height for your design
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
