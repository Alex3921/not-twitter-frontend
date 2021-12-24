import React, { Component } from "react";
import Tweet from "../tweet/Tweet";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="feed__header">
          <h2>Home</h2>
        </div>

        <Tweet />
      </div>
    );
  }
}
