import React from "react";
// import NavbarOption from "./NavbarOption";
import Home from "./Home";
import Bookmarks from "./Bookmarks"
import Profile from "./Profile";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import TwitterIcon from "@mui/icons-material/Twitter";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import Button from "@mui/material/Button";

function Navbar() {
  return (
    <div className="navbar">
      <TwitterIcon className="navbar__twitterIcon" />
      <Home active Icon={HomeOutlinedIcon} text="Home" />
      {/* <Notifications Icon={NotificationsNoneOutlinedIcon} text="Notifications" /> */}
      {/* <NavbarOption Icon={MailOutlinedIcon} text="Messages" /> */}
      <Bookmarks Icon={BookmarkBorderOutlinedIcon} text="Bookmarks" />
      <Profile Icon={PermIdentityOutlinedIcon} text="Profile" />

      <Button
        variant="outlined"
        className="navbar__signout-btn"
        fullWidth
      >
        Sign out
      </Button>
    </div>
  );
}

export default Navbar;
