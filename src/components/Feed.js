import React from "react";
import Tweet from "./Tweet";
import Post from "./Post";
import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <Tweet />

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
