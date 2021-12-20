import React from "react";
import NavbarOption from "./NavbarOption";
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
      <NavbarOption active Icon={HomeOutlinedIcon} text="Home" />
      <NavbarOption Icon={NotificationsNoneOutlinedIcon} text="Notifications" />
      <NavbarOption Icon={MailOutlinedIcon} text="Messages" />
      <NavbarOption Icon={BookmarkBorderOutlinedIcon} text="Bookmarks" />
      <NavbarOption Icon={PermIdentityOutlinedIcon} text="Profile" />

      <Button
        variant="outlined"
        className="navbar__tweet-btn"
        fullWidth
      >
        Tweet
      </Button>
    </div>
  );
}

export default Navbar;
