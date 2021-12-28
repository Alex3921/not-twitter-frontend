import React, { Component } from "react";
import Tweet from "../tweet/Tweet";
import PostsContainer from "../containers/PostsContainer";

import "../feed/Feed.css";

export default class HomePage extends Component {

  
  render() {
    return (
      <div className="feed">
        <div className="feed__header">
          <h2>Home</h2>
        </div>

        <Tweet />
        <PostsContainer />

      </div>
    );
  }
}
