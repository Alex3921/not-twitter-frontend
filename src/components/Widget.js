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

      <div className="widgets__widgetContainer">
        <h2>What's happening?</h2>

        <TwitterTweetEmbed
          tweetId={"1470372755384291331"}
        />

      </div>
    </div>
  );
}

export default Widget;
