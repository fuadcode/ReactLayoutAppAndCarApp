import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const HomeContent = () => {
  const posts = [
    {
      title: "Man must explore, and this is exploration at its greatest",
      content: "Problems look mighty small from 150 miles up.",
      date: "Posted by Start Bootstrap on September 24, 2023",
      link: ""
    },
    {
      title: "I believe every human has a finite number of heartbeats.",
      content: "I don't intend to waste any of mine.",
      date: "Posted by Start Bootstrap on September 18, 2023",
      link: ""
    },
    {
      title: "Science has not yet mastered prophecy",
      content: "We predict too much for the next year and yet far too little for the next ten.",
      date: "Posted by Start Bootstrap on August 24, 2023",
      link: ""
    },
    {
      title: "Failure is not an option",
      content: "Many say exploration is part of our destiny.",
      date: "Posted by Start Bootstrap on July 8, 2023",
      link: ""
    }
  ];

  return (
    <div className="home-content">
      {posts.map((post, index) => (
        <div key={index} className="post">
          <h3>
            <Link to={post.link} className="post-title">
              {post.title}
            </Link>
          </h3>
          <p className="post-content">{post.content}</p>
          <p className="post-date">{post.date}</p>
          {index < posts.length && <hr className="custom-hr" />}
        </div>
      ))}
      <Link to="" className="button-link">Older Posts →</Link>
    </div>
  );
};

export default HomeContent;
