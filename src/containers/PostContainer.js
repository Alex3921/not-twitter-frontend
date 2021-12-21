import React, { Component } from "react";
import Posts from "../components/posts/Posts";

import "./PostContainer.css";

export default class PostContainer extends Component {
  render() {
    return (
      <div>
          <Posts />
      </div>
    );
  }
}
