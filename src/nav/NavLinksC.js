import React, { useContext } from "react";
import { NavContext } from "./NavContext";

const NavLink = ({ navLinkId, scrollToId }) => {
  const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

  const handleClick = () => {
    setActiveNavLinkId(navLinkId);
    document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <span
      id={navLinkId}
      className={activeNavLinkId === navLinkId ? "activeClass" : ""}
      onClick={handleClick}
      style={{ color: "Black" }}
    >
      {navLinkId}
    </span>
  );
};

export default NavLink;
