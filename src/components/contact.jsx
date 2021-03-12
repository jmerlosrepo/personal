import React from "react";
import ReactHtmlParser from 'react-html-parser';

const Contact = ({info, onSend}) => {

  const contactMessage = {
    email: "",
    messge: ""
  }

  const handleInputChange = (e) => {
    contactMessage[e.target.name] = e.target.value;
  }

  const hadleSubmit = (e) => {
    e.preventDefault();
    onSend(e, contactMessage);
    document.getElementById('contactForm').reset();
  }

  return (
    <div className="container container-margins">
      <p>{ReactHtmlParser(info.disclaimer)}</p>
      <form id="contactForm" onSubmit={hadleSubmit}>
        <h3>Contact Me</h3>
        <div className="formContainer">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input onChange={handleInputChange} className="form-control" type="email" name="email"/>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea onChange={handleInputChange} className="form-control" name="message" cols="30" rows="10"></textarea>
          </div>
          <div className="mb-3 text-right">
            <button className="btn btn-secondary right-align">Send</button>
          </div>
        </div>
      </form>
      <div>My email address is: <strong>{info.email}</strong></div>
      <div><strong>Thanks for reaching out to me!</strong></div>
    </div>
  );
};

export default Contact;
