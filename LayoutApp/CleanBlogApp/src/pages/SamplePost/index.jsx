import React from 'react'
import './index.css'
import SampleContent from './SampleContent.jsx';
const SamplePost = () => {
  return (
    <div className="samplepost">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <h2>Man must explore, and <br />this is exploration at its <br /> greatest</h2>
            <p>Problems look mighty small from 150 miles up</p>
            <span>Posted by Start Bootstrap on August 24, 2023</span>
          </div>
        </div>
        <SampleContent />
      </div>
    </div>

  );
};

export default SamplePost;
