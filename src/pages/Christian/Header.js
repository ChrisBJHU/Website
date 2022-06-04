import React, { Component } from 'react';
import { Button } from '@mui/material';
import NavLink from '../../nav/NavLinksC';
import { navLinks } from '../../nav/navLinks';
import Logo from "../../assets/logo.png";
import {isMobile} from 'react-device-detect';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };
  }

  onMouseEnter = () => {
    this.setState({ hovered: true });
  };
  
  onMouseLeave = () => {
    this.setState({ hovered: false });
  };

  navigateToMain() {
    window.location.href = "/";
  }

  render() {

    const logoSet = {
      marginLeft: '5%'
    };
    
    const styleSheet = {
      color: '#66FCF1',
      textDecoration: 'none',
      };

    const color = {
      backgroundColor: 'white',
      borderBottom:"2px solid black",    
      height: "10%",
      display: 'flex',
  };

  const resumeButton = {
    backgroundColor: "#66FCF1",
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
    backgroundColor: "#66FCF1",
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


  const headerImage = () => {
    if (isMobile) {
      return (null);
    } else {
      return (
        <input  type = "image" src={Logo} alt = "" style={logoSet} onClick = {this.navigateToMain} />
      );
    }
  };

    return (
      <div style = {color}>
        {headerImage()}
        <div style = {isMobile ? null : nav}>
          <nav>
            {navLinks.map(({ navLinkId, scrollToId }, idx) => (
              <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
            ))}
            <a href="/resumeChristian" target="_blank" rel="noreferrer" style = {styleSheet}>
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
