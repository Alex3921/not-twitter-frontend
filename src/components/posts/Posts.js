import React from "react";
import { connect } from "react-redux";
import Post from "./Post";
import { fetchPosts } from "../../actions/fetchPosts";

class Posts extends Component {
  componentDidMount() {
    debugger
    this.props.fetchPosts();
  }

  render() {
    return (
      <>
        {this.props.posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </>
    );
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
