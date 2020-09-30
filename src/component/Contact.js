import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('KSS', 'template_a4aq66m', e.target, 'user_nns6wf4RlzAWsOeqnBEbr')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="contact-container" id= "Contact">
      <div className="contact-main-text">Contact</div>
      <div className="contact-border" />
      <div className="contact-con">
        <div className="contact-box">
          <div className="contact-text">
            CellPhone : 010-9276-3641 <br />
            E-Mail : kwtjdtn@gmail.com <br />
            Git-hub : https://github.com/kwtjdtn
          </div>
        </div>
        <div className="contact-space" />
        <div className="contact-email">
          <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <div className="form-bind">
              <label>Name</label>
              <input type="text" name="user_name" className="email-input1" />
            </div>
            <div className="form-bind">
              <label>Email </label>
              <input type="email" name="user_email" className="email-input1" />
            </div>
            <div className="form-bind">
              <label>Message</label>
              <textarea name="message" className="email-input" />
            </div>
            <input type="submit" value="Send" className="email-btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
