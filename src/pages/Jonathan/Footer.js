import * as React from 'react';
const Footer = () => {
  const background = {
    backgroundColor: '#222629',
    borderTop:"2px solid #66FCF1",    
    height: "20%",
    textAlign: 'center',
};

const textStyle = {
  color: 'white',
  marginTop: '50px',
};

  

  return (
    <div className="footer" style={background}>
      <p style={textStyle}> Designed & Built by 
      <a href="\" target="_blank" rel="noreferrer"  style = {{ textDecoration: 'none', color: 'lightblue'}}> Christian Bakhit & Jonathan Bakhit
        </a> 
      </p>
      <p style = {{color: 'white'}}> Version 1.0.0</p>
    </div>  
  );
};

export default Footer;
