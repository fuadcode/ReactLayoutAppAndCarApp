import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Footer = () => {
  return (
    <div className="sfooter">
      <p className="copyright">Copyright © Your Website 2023</p>
      <div className="ssocial-media-container">
        <div className="ssocial-media">
          <Link to="https://www.linkedin.com/in/fuad-isk%C9%99nd%C9%99rov" style={{ textDecoration: 'none' }} className="icon" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-linkedin"></i>
          </Link>
          <Link to="" style={{ textDecoration: 'none' }} className="icon" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link to="https://github.com/fuadcode" style={{ textDecoration: 'none' }} className="icon" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
