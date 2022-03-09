import * as React from 'react';
import Github from "../assets/github.png";
import Linkden from "../assets/linkden.png";
import Insta from "../assets/instagram.png";

const Footer = () => {
  const imageSet = {
    height: '30px',
    paddingLeft: '2px',
  };

  
  return (
    <div className="footer" style={{ backgroundColor: '#222629', textAlign:"center", borderTop:"2px solid #66FCF1",}}>
      <a href="https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0" target="_blank" rel="noreferrer">
          <img src = {Github} alt = "" style = {imageSet}></img></a>
      <a href="https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0" target="_blank" rel="noreferrer">
          <img src = {Linkden} alt = "" style = {imageSet}></img></a>
      <a href="https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0" target="_blank" rel="noreferrer">
          <img src = {Insta} alt = "" style = {imageSet}></img></a>
            <p style={{ color: 'white' }}> Designed & Built by <a href="https://brittanychiang.com/" target="_blank" rel="noreferrer"> Christian Bakhit
              </a>
            </p>
            <p> Version 1.0.0</p>
    </div>  
  );
};

export default Footer;
