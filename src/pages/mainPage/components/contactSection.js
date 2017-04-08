import React from 'react';
import TextFieldGroup from './common/textFieldGroup';

const ContactSection = () => {
  const styles = {
    width: "100%"   
  }
  return (
      <div className="contact-container">
        <div id="contact-header">        
          <h2>Contact me</h2>
        </div>
        <div id="contact-body">
          <div className="social-media"><a href="http://www.github.com/redhedjim"><img className="img-responsive social-media-icon" src="https://image.flaticon.com/icons/png/512/25/25231.png"/></a></div>
          <div className="social-media"><a href="mailto:jamesleotucker@gmail.com"><img className="img-responsive social-media-icon" src="http://www.stickpng.com/assets/images/584856b4e0bb315b0f7675ac.png"/></a></div>
          <div className="social-media"><a href="https://www.linkedin.com/in/leo-tucker-738a4433/"><img className="img-responsive social-media-icon" src="http://findicons.com/files/icons/2779/simple_icons/512/linkedin_512_black.png"/></a></div>
        </div>
      </div>
  );
};

export default ContactSection;