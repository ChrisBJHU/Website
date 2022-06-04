import React, { Component} from 'react';
import Logo from "../../assets/Jonathan/Icons.png";


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
      marginLeft: '5%', 
      height: '5%',
      width: '5%',
    };
    
    const color = {
      backgroundColor: '#222629',
      borderBottom:"2px solid #66FCF1",    
      display: 'flex',
  };



      return (
        <div className="header" style = {color}>
          <input type = "image" src={Logo} alt = "" style={logoSet} onClick = {this.navigateToMain} />
      </div>  
    );
  };
} export default Header;
