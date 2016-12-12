import React from 'react';
import TextFieldGroup from './common/textFieldGroup';

const ContactSection = () => {
  const styles = {
    width: "100%"   
  }
  return (
    <div id="contact-top" className="contact-container">
      <h2>Contact me</h2>
      <form action="" className="contact-form form">
        <TextFieldGroup
          id={"name"}
          placeholder={"What should I call you?"}
        />
        <TextFieldGroup
          id={"email"}
          type={"email"}
          placeholder={"How should I reach you?"}
        />
        <TextFieldGroup
          id={"animal"}
          placeholder={"What is your favourite animal? (Optional, but encouraged)"}
        />
        <div className="form-group col-xs-12">
          <textarea placeholder="What would you like to say?" id="message" rows="5" style={styles}></textarea>
        </div>
        <div className="form-group col-xs-12">
          <button className="btn btn-primary">Send away</button>
        </div>
      </form>
    </div>
  );
};

export default ContactSection;