import React, { Component} from 'react';
import Logo from "../../assets/logo.png";
import {Link} from 'react-router-dom';

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


  render() {

    const logoSet = {
      marginLeft: '5%', 
      height: '5%',
      width: '5%',
    };
    
    const color = {
      backgroundColor: 'white',
      borderBottom:"2px solid black",    
      display: 'flex',
  };



      return (
        <Link to={'/homeChristian'} className= "header" style = {color}>
          <input type = "image" src={Logo} alt = "" style={logoSet} />
        </Link>
    );
  };
} export default Header;
