import React, { Component } from "react";
import { Button } from "@mui/material";
import NavLink from "../../nav/NavLinksJ";
import { navLinks } from "../../nav/navLinks";
import Logo from "../../assets/Jonathan/Icons.png";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import Resume from "../../assets/Jonathan/Bakhit_Jonathan_Resume.pdf";

class Header extends Component {

  render() {
    const color = {
      backgroundColor: "#222629",
      borderBottom: "2px solid darkblue",
      height: "10%",
      display: "flex",
    };

    const nav = {
      position: "absolute",
      right: "1%",
      top: "1%",
    };

    return (
      <div className="header" style={color}>
        <Link to="/">
            <input type="image" src={Logo} alt="" className = "headerIcon" style = {{height: '100%'}} />
          </Link>
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
                style ={{marginRight: "1rem"}}
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
