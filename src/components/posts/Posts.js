import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";
class Posts extends Component {
  renderPosts = () => {
    return this.props.posts.map((post) => (
      <div key={post.id} className="post">
        <Post post={post} />
      </div>
    ));
  };

  render() {
    return <>{this.renderPosts()}</>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps)(Posts);
