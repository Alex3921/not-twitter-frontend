import React, { Component } from "react";
import PostsContainer from "../containers/PostsContainer";
import { connect } from "react-redux"

import "../feed/Feed.css";

export class BookmarksPage extends Component {
  
  render() {
    console.log(this.props);
    return (
      <div className="feed">
        <div className="feed__header">
          <h2>Bookmarks</h2>
        </div>
        
        <PostsContainer />
      </div>
    )
  };
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(BookmarksPage);
