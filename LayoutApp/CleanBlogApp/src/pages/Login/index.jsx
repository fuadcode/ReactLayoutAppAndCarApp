import React from 'react';
import './index.css';
import LoginContent from './LoginContent';

const Login = () => {
  return (
    <div className="login">
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <h2>Login Page</h2>
              <p>An account system for using the site</p>
            </div>
          </div>
        </div>
      </div>
      <LoginContent/>
    </div>
  );
};

export default Login;
