import React from 'react';
import './index.css';
import SignupContent from './SignupContent.jsx';

const Signup = () => {
  return (
    <div className="Signup">
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <h2>Register Page</h2>
              <p>An account system for using the site</p>
            </div>
          </div>
        </div>
        <SignupContent/>
      </div>
    </div>
  );
};

export default Signup;
