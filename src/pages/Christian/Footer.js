import * as React from 'react';
import Github from "../../assets/github.png";
import Linkden from "../../assets/linkden.png";
import Insta from "../../assets/instagram.png";

const Footer = () => {
  const imageSet = {
    height: '30px',
    paddingLeft: '1%',
    paddingTop: '1%',
  };

  const color = {
    backgroundColor: '#222629',
    borderTop:"2px solid #66FCF1",    
    height: "20%",
    textAlign: 'center',
};

  return (
    <div className="footer" style={color}>
      <a href="https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0" target="_blank" rel="noreferrer">
          <img src = {Github} alt = "" style = {imageSet}></img></a>
      <a href="https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0" target="_blank" rel="noreferrer">
          <img src = {Linkden} alt = "" style = {imageSet}></img></a>
      <a href="https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0" target="_blank" rel="noreferrer">
          <img src = {Insta} alt = "" style = {imageSet}></img></a>
      <p style={{ color: 'white'}}> Designed & Built by 
      <a href="https://brittanychiang.com/" target="_blank" rel="noreferrer"  style = {{ textDecoration: 'none',}}> Christian Bakhit & Jonathan Bakhit
        </a> 
      </p>
      <p style = {{color: 'white'}}> Version 1.0.0</p>
    </div>  
  );
};

export default Footer;
