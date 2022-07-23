import React, { Component } from "react";
import { Button } from "@mui/material";
import NavLink from "../../nav/NavLinksC";
import { navLinks } from "../../nav/navLinks";
import Logo from "../../assets/logo.png";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import Resume from "../../assets/Christian/Christian Bakhit Resume 2022.pdf";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };
  }


  render() {
    const logoSet = {
      marginLeft: "5%",
      height: "100%",
    };


    const color = {
      backgroundColor: "white",
      borderBottom: "2px solid black",
      height: "10%",
      display: "flex",
    };

    const nav = {
      position: "absolute",
      right: "1%",
      top: "1%",
    };

    const headerImage = () => {
      if (isMobile) {
        return null;
      } else {
        return (
          <Link to="/">
            <input type="image" src={Logo} style={logoSet} alt="" />
          </Link>
        );
      }
    };

    return (
      <div style={color}>
        {headerImage()}
        <div style={isMobile ? null : nav}>
        <nav>
            {navLinks.map(({ navLinkId, scrollToId }, idx) => (
              <NavLink
                key={idx}
                navLinkId={navLinkId}
                scrollToId={scrollToId}
              />
            ))}
              <Button
                onClick = {() => {
                  window.open(Resume, "_blank");
                }}
                variant="contained"
                style ={{marginRight: "1rem", marginLeft: "1rem", width: "4rem", backgroundColor: "#6BD0FF"}}
              >
                Resume
              </Button>
          </nav>
        </div>
      </div>
    );
  }
}
export default Header;
