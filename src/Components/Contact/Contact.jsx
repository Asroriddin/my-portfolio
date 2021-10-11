import React from 'react';
import SocialLinks from '../SocialLinks';
import './Contact.css';

const Contact = props => {
  return (
    <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">
            <p className="title">
              Want to <br />
              contact me?
            </p>
            <p className="separator" />
            <p className="subtitle">
              Contact me :{''}
              <span className="mail">
                asroriddin5500
                <i className="fas fa-at at" />
                gmail
                <i className="fas fa-circle dot" />
                com
              </span>
              :<br/>My phone number +998996365500
            </p>
          </div>
          <SocialLinks />
        </div>
        <form id="contact-form" action="#">
          <input placeholder="Name" name="name" type="text"  />
          <input placeholder="Email" name="email" type="email" required />
          <textarea placeholder="Message" type="text" name="message" />
          <input className="button" id="submit" value="Submit" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default Contact;