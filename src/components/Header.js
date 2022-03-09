import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, IconButton } from '@mui/material';
import Logo from "../assets/logo.jpg";



const Header = () => {
  
  const logoSet = {
    height: '50px',
    objectFit: 'contain',
    marginRight: '10px',
  };
  
  const styleSheet = {
    color: '#66FCF1',
    marginRight: "15px",
    fontSize: "20px",
  };


  const active = {
    color: "#ffffff", 
  };

  const color = {
    backgroundColor: '#222629',
    borderBottom:"2px solid #66FCF1",
    display: "flex",
    height: "100px",
};

const logo = {
  height: '50px',
  objectFit: 'contain',
  marginRight: '10px',
};

const buttonSet = {
  backgroundColor: '#222629',
  color: "#66FCF1",
  textTransform: "none",
  backgroundImage: "linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%)",
  borderRadius: "8px",
  borderStyle: "none",
  boxSizing: "border-box",
  cursor: "pointer",
  flexShrink: "0",
  fontSize: "20px",
  fontWeight: "500",
  height: "30px",
  padding: "0 1.6rem",
  textAlign: "center",
  textShadow: "rgba(0, 0, 0, 0.25) 0 3px 8px",
  transition: "all .5s",
  userSelect: "none",
  touchAction: "manipulation",
};




    return (
      <div className="footer" style = {color}>
        <NavLink to='/../'  activeStyle={active} style={styleSheet} ><img src={Logo} alt = "" style={logoSet}  /></NavLink>
        <div class="navbar-collapse collapse w-100 dual-collapse2 order-1 order-md-0"></div>
        <div class="mx-auto my-2 order-0 order-md-1 position-relative"></div>
        <div class="navbar-collapse collapse w-100 dual-collapse2 order-2 order-md-2">
          <ul class="navbar-nav mr-auto text-center">
              <li class="nav-item">
                <NavLink to='/about'  activeStyle={active} style={styleSheet} >About</NavLink>
                <NavLink to='/projects' activeClassName='active' activeStyle={active} style={styleSheet}>Projects</NavLink>
                <NavLink to='/contact' activeClassName='active' activeStyle={active} style={styleSheet}>Contact</NavLink>
                  <a href="https://www.dropbox.com/s/8l917l0gwqrcftw/Christian%20Bakhit%20Resume.pdf?dl=0" target="_blank" rel="noreferrer">
                    <Button variant="outlined" style={buttonSet}>Resume</Button></a> 
              </li>
        </ul>
      </div>
    </div>  
  );
};

export default Header;
