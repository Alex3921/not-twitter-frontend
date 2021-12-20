import React, { Component } from "react";
import Posts from "./posts/Posts";

import "./PostsContainer.css";

export default class PostsContainer extends Component {
  render() {
    return (
      <div>
        <div className="post">
          <Posts />
        </div>
      </div>
    );
  }
}
