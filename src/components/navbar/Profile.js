import React from "react";
import { NavLink } from "react-router-dom"
import "./NavbarOption.css";

function Profile({ active, text, Icon }) {
  const user = JSON.parse(localStorage.user);
  return (
    <div className="navbar__option">
      <Icon sx={{ fontSize: 30 }} />
      <NavLink to={`/profile/${user.username}`} ><span>{text}</span></NavLink>
    </div>
  );
}

export default Profile;
