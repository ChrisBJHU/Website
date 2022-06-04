import React, { useState } from "react";
import {isMobile} from 'react-device-detect';

const ContactForm = () => {

  const formStyle = {
    width: isMobile ? '95%' : '25%', 
    allignItems: 'center', 
    marginLeft: 'auto', 
    marginRight: 'auto'
  };

  const buttonStyle = {
    display: 'table', 
    allignItems: 'center', 
    marginBottom: '0', 
    marginTop: '0', 
    marginLeft: 'auto', 
    marginRight: 'auto'
  };

  const messageStyle = {
    height: '100%', 
    resize: "none"
  };

  const [status] = useState("Submit");

    return (
      <form action = "https://formsubmit.co/4a5c53d7c49b0edd1f37694a5d6bfa13" method = "POST" style = {formStyle}>
        <div> 
          <h3><span style = {{marginTop: "50px"}}>Contact Me!</span></h3>
        </div>
        <div class = "text-wrap"> 
          <input type="text" name="name" required placeholder = "Name" id = "name"/>
        </div>
        <div class = "text-wrap"> 
          <input type="email" name="email" required 
          placeholder = "Email Address" />
        </div>
        <div class = "text-wrap"> 
          <textarea type="message" name="message" 
          required style = {messageStyle} rows = "5" placeholder = "Your Message" />
        </div>
        <div style = {buttonStyle}>
          <button type="submit"> {status}</button>
        </div>
        <input type="hidden" name="_subject" value="To Christian Bakhit"></input>
        <input type="hidden" name="_next" value="home.html"/>
        <input type="hidden" name="_captcha" value="false"/>
        <input type="hidden" name="_honeypot" value=""/>
      </form>
    );
};

export default ContactForm;


