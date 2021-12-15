import React from "react";
import "./Widget.css";

import SearchIcon from "@mui/icons-material/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widget() {
  return (
    <div className="widgets">
      <div className="widgets__search">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
    </div>
  );
}

export default Widget;
