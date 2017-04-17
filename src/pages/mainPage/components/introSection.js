import React from 'react';

const IntroSection = () => {
  const introTextArray = [
    `By day I am a full-stack software developer and project manager. I help people turn their imagination into something
    tangible. Web pages, applications and consulting all fall within my wheel house. 
    `,
    
    `Whether I'm working with Javascript, Ruby or PHP I enjoy making things that are fun and challenging. 
    Lately I have been enjoying React & Redux and diving into the bowels of the Javascript ecosystem. This page you're looking
    at was created with React. 
    I'm from Louisiana, USA and currently live in Calgary, Canada.`,
    `Poke around and check-in often as updates are always just around the corner.
    If you're curious about the code, most of it can be found on my GitHub.`,
    `Pardon the mess  :)`
  ];

  const intro = introTextArray.map((paragraph, id) => <p key={id} className="intro-text text-center">{paragraph}</p>)
  return (
    <div id="intro-top" className="intro-container">
      <div className="intro">
        <div className="intro-left">
          <div></div>
          <div>
            <p>Hi,</p>
            <p>I'm Leo</p>
          </div>
        </div>
        <div className="intro-right intro-text-container">
          <h1>Welcome</h1>
          {intro}
        </div>
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