import React from 'react';
import HomeContent from './HomeContent';
import './index.css';

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <h2>Clean Blog</h2>
              <p>A Blog Theme by Start Bootstrap</p>
            </div>
          </div>
        </div>
      </div>
      <HomeContent />
    </div>
  );
};

export default Home;
