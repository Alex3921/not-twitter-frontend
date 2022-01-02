import React from "react";
import { NavLink } from "react-router-dom"
import "./NavbarOption.css";

function Profile({ active, text, Icon }) {
  return (
    <div className="navbar__option">
      <Icon sx={{ fontSize: 30 }} />
      <NavLink to={`/profile/${localStorage.username}`} ><span>{text}</span></NavLink>
    </div>
  );
}

export default Profile;
