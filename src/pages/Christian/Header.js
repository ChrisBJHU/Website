import React, { Component}from 'react';
import {Button} from '@mui/material';
import NavLink from '../../nav/NavLink';
import { navLinks } from '../../nav/navLinks';
import Logo from "../../assets/logo.png";


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };
  }

  onMouseEnter = e => {
    this.setState({ hovered: true });
  };
  
  onMouseLeave = e => {
    this.setState({ hovered: false });
  };

  navigateToMain() {
    window.location.href = "/";
  }

  render() {

    const logoSet = {
      textAlign: 'center',
      justifyContent: 'center',
      marginLeft: '50%'
    };
    
    const styleSheet = {
      color: '#66FCF1',
      textDecoration: 'none',
    };

    const color = {
      backgroundColor: '#222629',
      borderBottom:"2px solid #66FCF1",    
      height: "10%",
      display: 'flex',
  };

  const resumeButton = {
    backgroundColor: "#f4511e",
    border: "none",
    color: 'white',
    padding: '0px 1.6rem',
    textAlign: 'center',
    fontSize: '75%',
    margin: '4px 2px',
    opacity: '0.6',
    transition: '0.3s',
    display: 'inline-block',
    textDecoration: 'none',
    marginRight: '20px',
    cursor: 'pointer',
    '&:hover': {
      opacity: 1,
    }
  };

  const buttonSetHovered = {
    backgroundColor: "#f4511e",
    border: "none",
    color: 'white',
    padding: '0px 1.6rem',
    textAlign: 'center',
    fontSize: '100%',
    margin: '4px 2px',
    opacity: '1',
    transition: '0.3s',
    display: 'inline-block',
    textDecoration: 'none',
    cursor: 'pointer',
    marginRight: '20px',
  };

  const nav = {
    position: 'absolute', 
    right:"1%", 
    top: '1%'
  };

      return (
        <div className="header" style = {color}>
          <input type = "image" src={Logo} alt = "" style={logoSet} onClick = {this.navigateToMain} />
          <div style = {nav}>
            <nav>
              {navLinks.map(({ navLinkId, scrollToId }, idx) => (
                <NavLink key={idx} navLinkId={navLinkId} style={styleSheet} scrollToId={scrollToId} />
              ))}
              <a href="#" target="_blank" rel="noreferrer" style = {styleSheet}>
                <Button  onMouseOver = {this.onMouseEnter} onMouseOut = {this.onMouseLeave}
                style = {this.state.hovered ? buttonSetHovered: resumeButton}> Resume
                </Button>
              </a>
            </nav>
          </div>
      </div>  
    );
  };
} export default Header;
