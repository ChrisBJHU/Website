import * as React from 'react';
const Footer = () => {
  const background = {
    backgroundColor: 'white',
    borderTop:"2px solid black",    
    textAlign: 'center',
    paddingBottom: '10px',

};

const textStyle = {
  color: 'black',
  marginTop: '',
};

  

  return (
    <div className="footer" style={background}>
      <p style={textStyle}> Designed & Built by 
      <a href="https://github.com/ChrisBJHU/Website" target="_blank" rel="noreferrer"  style = {{ textDecoration: 'none',}}> Christian Bakhit & Jonathan Bakhit
        </a> 
      </p>
      <p style = {{color: 'black'}}> Version 1.0.0</p>
    </div>  
  );
};

export default Footer;
