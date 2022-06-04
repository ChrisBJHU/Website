import * as React from 'react';
const Footer = () => {
  const background = {
    backgroundColor: '',
    borderTop:"2px solid black",    
    height: "10%",
    textAlign: 'center',
};

const textStyle = {
  color: 'black',
  marginTop: '50px',
};

  

  return (
    <div className="footer" style={background}>
      <p style={textStyle}> Designed & Built by 
      <a href="https://github.com/ChrisBJHU/Website" target="_blank" rel="noreferrer"  style = {{ textDecoration: 'none',}}> Christian Bakhit & Jonathan Bakhit
        </a> 
      </p>
      <p style = {{color: 'white'}}> Version 1.0.0</p>
    </div>  
  );
};

export default Footer;
