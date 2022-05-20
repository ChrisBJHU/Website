import React from 'react';
import {Button} from '@mui/material';
import NavLink from '../../nav/NavLink';
import { navLinks } from '../../nav/navLinks';
import Logo from "../../assets/logo.png";


const Header = () => {

  const logoSet = {
    height: '100%',
    backgroundColor: 'transparent',
  };
  
  const styleSheet = {
    color: '#66FCF1',
    fontSize: "125%",
    textDecoration: 'none',
    marginRight: '5px',
  };

  const color = {
    backgroundColor: '#222629',
    borderBottom:"2px solid #66FCF1",    
    height: "10%",
    display: 'flex',
};

let buttonSet = {
  backgroundColor: "#f4511e",
  border: "none",
  color: 'white',
  padding: '0px 1.6rem',
  textAlign: 'center',
  fontSize: '16px',
  margin: '4px 2px',
  opacity: '0.6',
  transition: '0.3s',
  display: 'inline-block',
  textDecoration: 'none',
  cursor: 'pointer',
  '&:hover': {
    opacity: 1,
  }
};

  const handleColorChange = (type) => {
    if(type === 'enter') {
      buttonSet = {
        backgroundColor: "#f4511e",
        border: "none",
        color: 'white',
        padding: '0px 1.6rem',
        textAlign: 'center',
        fontSize: '16px',
        margin: '4px 2px',
        opacity: '1',
        transition: '0.3s',
        display: 'inline-block',
        textDecoration: 'none',
        cursor: 'pointer',
      }
    } else {
      buttonSet = {
        backgroundColor: "#f4511e",
        border: "none",
        color: 'white',
        padding: '0px 1.6rem',
        textAlign: 'center',
        fontSize: '16px',
        margin: '4px 2px',
        opacity: '0.6',
        transition: '0.3s',
        display: 'inline-block',
        textDecoration: 'none',
        cursor: 'pointer',
      }
    }
  }

    return (
      <div className="header" style = {color}>
        <NavLink to='/'><img src={Logo} alt = "" style={logoSet} /></NavLink>
        <div style = {{position: 'absolute', right:0, top: '3%'}}>
        <nav>
          {navLinks.map(({ navLinkId, scrollToId }, idx) => (
            <NavLink key={idx} navLinkId={navLinkId} style={styleSheet} scrollToId={scrollToId} />
          ))}
              <a href="#" target="_blank" rel="noreferrer" style = {styleSheet}>
              <Button  
                onMouseOut = {handleColorChange('leave')}
                style={buttonSet}>Resume</Button></a>
                       </nav>
            </div>
    </div>  
  );
};

export default Header;
