import React from 'react'
import ContactContent from './ContactContent';
const Contact = () => {
    return (
      <div className="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <h2>Contact Me</h2>
            <p>Have questions? I have answers.
            </p>
          </div>
        </div>
        <ContactContent/>
      </div>
      </div>
      
    );
  };
  
  export default Contact;
  