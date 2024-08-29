import React from 'react';
import './index.css';

const AboutContent = () => {
  const content = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur? <br /> More details can be added here."
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus! <br /> Additional information here."
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur magnam, excepturi aliquid ex itaque esse est vero natus quae optio aperiam soluta voluptatibus corporis atque iste neque sit tempora!"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur? <br /> More details can be added here."
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus! <br /> Additional information here."
    },
  ];

  return (
    <div className="about-content">
      {content.map((section, index) => (
        <div key={index} className="about-section">
          <p className="section-text" dangerouslySetInnerHTML={{ __html: section.text }} />
        </div>
      ))}
    </div>
  );
};

export default AboutContent;
