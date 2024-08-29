import React from 'react';
import AboutContent from './AboutContent';
import './index.css';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <h2>About Us</h2>
            <p>This is what I do.</p>
            <AboutContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
