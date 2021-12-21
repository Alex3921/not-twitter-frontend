import React from "react";
import Tweet from "./tweet/Tweet";
import PostContainer from "../containers/PostContainer";
import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <Tweet />

      <PostContainer />
    </div>
  );
}

export default Feed;
