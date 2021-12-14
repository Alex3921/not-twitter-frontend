import React from "react";
import "./Widget.css";

import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widget() {
  return (
    <div className="widget">
      <div className="widgets__input"></div>
    </div>
  );
}

export default Widget;
