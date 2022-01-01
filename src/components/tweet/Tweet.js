import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost } from "../../actions/postActions";
import { Avatar, Button } from "@mui/material";

import "./Tweet.css";

export class Tweet extends Component {
  state = {
    content: "",
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPost(this.state)
    this.setState({ content: "" })
  }

  render() {
    return (
      <div className="tweet">
        <form onSubmit={this.handleSubmit}>
          <div className="tweet__input">
            <div className="tweet__avatar">
              <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.newt/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
            </div>
            <input
              placeholder="What's happening?"
              type="text"
              onChange={this.handleChange}
              value={this.state.content}
            />
          </div>
          <Button className="tweet__submit-btn" type="submit">Tweet</Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => dispatch(addPost(post)),
  };
};

export default connect(null, mapDispatchToProps)(Tweet);
