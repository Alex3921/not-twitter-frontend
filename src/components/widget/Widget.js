import React from "react";
import "./Widget.css";

import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widget() {
  return (
    <div className="widgets">
      <div className="widgets__search">
        <form className="nosubmit">
          <input placeholder="Search Twitter" type="search" />
        </form>
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening?</h2>

        <TwitterTweetEmbed
          tweetId={"1470372755384291331"}
        />
        <TwitterTimelineEmbed
          source="profile"
          screenName="SpaceX"
          options={{ height: 600 }}
        />
      </div>
    </div>
  );
}

export default Widget;
