import React, { useState } from "react";
import Logo from "../assets/logo.png";

const ContactForm = () => {
    const imageSet = {
        height: '50px',
        width: '50px',
        textAlign: 'center',
        justifyContent: 'center',
      };

  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit} style = {{width: '25%', allignItems: 'center', marginLeft: 'auto', marginRight: 'auto',}}>
      <div> 
      <h3><span style = {{marginTop: "50px"}}>Contact Me!</span></h3>
      </div>
      <div class = "text-wrap"> 
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div class = "text-wrap"> 
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div class = "text-wrap"> 
        <label htmlFor="message">Message:</label>
        <textarea type="message" id="message" required style = {{height: '100%', resize: "none"}} rows = "5" />
      </div>
      <div style = {{display: 'table', allignItems: 'center', marginBottom: '0', marginTop: '0', marginLeft: 'auto', marginRight: 'auto'}}>
        <button type="submit"> {status}</button>
      </div>
    </form>
  );
};

export default ContactForm;