import React from 'react';

const IntroSection = () => {
  return (
    <div id="intro-top" className="intro-container">
      <div className="intro-text-container">
        <h1>Webpage title</h1>
        <p className="intro-text">"A whole bunch of text goes here blah blah you get the idea."
        </p>
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