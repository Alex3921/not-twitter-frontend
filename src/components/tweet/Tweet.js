import React from "react";
import { Avatar, Button } from "@mui/material";

import "./Tweet.css";

function Tweet() {
  return (
    <div className="tweet">
      <form>
        <div className="tweet__input">
          <div className="tweet__avatar">
            <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.newt/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
          </div>
          <input placeholder="What's happening?" type="text" />
        </div>
        <Button className="tweet__submit-btn">Tweet</Button>
      </form>
    </div>
  );
}

export default Tweet;
