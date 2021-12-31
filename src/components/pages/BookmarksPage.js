import React, { Component } from "react";
import PostsContainer from "../containers/PostsContainer";

import "../feed/Feed.css";

export default class BookmarksPage extends Component {
  componentDidMount() {
    this.props.fetchSavedPosts();
  }

  render() {
    return (
      <div className="feed">
        <div className="feed__header">
          <h2>Bookmarks</h2>
        </div>

        <PostsContainer />
      </div>
    );
  }
}