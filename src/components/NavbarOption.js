import React from "react";
import "./NavbarOption.css";

function NavbarOption({ active, text, Icon }) {
  return (
    <div className={`navbarOption ${active && "navbarOption--active"}`}>
      <Icon sx={{ fontSize: 30 }} />
      <span>{text}</span>
    </div>
  );
}

export default NavbarOption;
