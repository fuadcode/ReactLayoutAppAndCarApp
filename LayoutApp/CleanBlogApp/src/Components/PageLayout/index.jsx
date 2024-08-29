import React from 'react';
import './index.css';

const PageLayout = ({ backgroundImage, children, backgroundSize, backgroundPosition, backgroundRepeat }) => {
  return (
    <div
      className="page-layout"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: backgroundSize || 'cover',
        backgroundPosition: backgroundPosition || 'center',
        backgroundRepeat: backgroundRepeat || 'no-repeat',
      }}
    >
      <div className="content-container">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
