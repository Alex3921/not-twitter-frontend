import React from "react";
import { NavLink } from "react-router-dom"
import "./NavbarOption.css";

function Profile({ active, text, Icon }) {
  return (
    <div className={`navbarOption ${active && "navbarOption__active"}`}>
      <Icon sx={{ fontSize: 30 }} />
      <NavLink to={text.toLowerCase()} ><span>{text}</span></NavLink>
    </div>
  );
}

export default Profile;
