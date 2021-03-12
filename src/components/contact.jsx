import React from "react";
import ReactHtmlParser from 'react-html-parser';

const Contact = ({info}) => {
  return (
    <div className="container container-margins">
      <p>{ReactHtmlParser(info.disclaimer)}</p>
      <form>
        <h3>Contact Me</h3>
        <div className="formContainer">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input className="form-control" type="email" name="email"/>
          </div>
          <div className="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea className="form-control" name="message" cols="30" rows="10"></textarea>
          </div>
          <div className="mb-3 text-right">
            <button className="btn btn-secondary right-align">Send</button>
          </div>
        </div>
      </form>
      <p>My email address is: <strong>{info.email}</strong></p>
      <p><strong>Thanks for reaching out to me!</strong></p>
    </div>
  );
};

export default Contact;
