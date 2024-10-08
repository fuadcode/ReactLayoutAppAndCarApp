import React from 'react';
import './index.css';
import SampleFooter from './SampleFooter';
const SampleContent = () => {
  const content = [
    {
      text: "Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory."
    },
    {
      text: "Science cuts two ways, of course; its products can be used for both good and evil. But there's no turning back from science. The early warnings about technological dangers also come from science."
    },
    {
      text: "What was most significant about the lunar voyage was not that man set foot on the Moon but that they set eye on the earth."
    },
    {
      text: "A Chinese tale tells of some men sent to harm a young girl who, upon seeing her beauty, become her protectors rather than her violators. That's how I felt seeing the Earth for the first time. I could not help but love and cherish her."
    },
    {
      text: "For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us."
    },
    {
      title: "The Final Frontier",
      text: "There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.",
      className: "main-title"
    },
    {
      text: "There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning."
    },
    {
      text: "The dreams of yesterday are the hopes of today and the reality of tomorrow. Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next ten."
    },
    {
      text: "Spaceflights cannot be stopped. This is not the work of any one man or even a group of men. It is a historical process which mankind is carrying out in accordance with the natural laws of human development."
    },
    {
      title: "Reaching for the Stars",
      text: "As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.",
      className: "sub-title"
    },
    {
      text: "To go places and do things that have never been done before – that’s what living is all about.",
      className: "special-text"
    },
    {
      image: "https://startbootstrap.github.io/startbootstrap-clean-blog/assets/img/post-sample-image.jpg",
      smallText: "To go places and do things that have never been done before – that’s what living is all about.s"
    },
    {
      text: "Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.",
      className: "special-text"
    },
    {
      text: "As I stand out here in the wonders of the unknown at Hadley, I sort of realize there’s a fundamental truth to our nature, Man must explore, and this is exploration at its greatest.",
      className: "special-text"
    },
    {
      text: "Placeholder text by Space Ipsum · Images by NASA on The Commons",
    }
  ];

  return (
    <div className="sample-content">
      {content.map((section, index) => (
        <div key={index} className="sample-section">
          {section.image && (
            <div className="banner">
              <img src={section.image} alt="Sample Banner" />
              <p className="small-text">{section.smallText}</p>
            </div>
          )}
          {section.title && (
            <h2 className={section.className || "title"}>
              {section.title}
            </h2>
          )}
          <p className="section-text" dangerouslySetInnerHTML={{ __html: section.text }} />
        </div>
      ))}
      <SampleFooter />
    </div>
  );
};

export default SampleContent;