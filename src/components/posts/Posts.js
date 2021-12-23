import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";
import { fetchPosts } from "../../actions/postActions";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
