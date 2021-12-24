import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "../pages/HomePage"
import PostsContainer from "../containers/PostsContainer";
import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
     
      <HomePage />
      <PostsContainer />
    </div>
  );
}

export default Feed;
