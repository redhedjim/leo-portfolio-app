import React from 'react';

const IntroSection = () => {
  const introTextArray = [
    `Hey, all.  My name is Leo. By day I am a web developer and project manager for things web-devvy.
    I spend most of my time making things for clients, friend and family so this site is my little project just for me.`,
    
    `I work with mainly in Javascript on the front-end using React-Redux, Backbone and good ol' fashion Vanilla Javascript.
    On the back-end I use various flavours of SQL NoSQL along with Node.js to make my server magic come alive.
    I'm from Louisiana, USA and currently live in Calgary, Canada.`
  ];

  const intro = introTextArray.map((paragraph, id) => <p key={id} className="intro-text text-center">{paragraph}</p>)
  return (
    <div id="intro-top" className="video-thing intro-container">
      <div className="intro-text-container">
        <h1>Bienvenidos! Wilkommen! Bienvenue! Welcome!</h1>
        {intro}
      </div>
      <div className="intro-menu">
        <ul>
          <li><a href="#intro-top">Home</a></li>
          <li><a href="#project-top">Projects</a></li>
          <li><a href="#resume-top">Resume</a></li>
          <li><a href="#contact-top">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default IntroSection;