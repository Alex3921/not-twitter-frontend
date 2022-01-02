import React, { Component } from "react";
import PostsContainer from "../containers/PostsContainer";
import DateRangeIcon from "@mui/icons-material/DateRange";
import FmdGoodIconOutlined from "@mui/icons-material/FmdGoodOutlined";

import "../feed/Feed.css";

export default class ProfilePage extends Component {
  state = { btnStatus: false };

  fetchTweets = () => {
    this.setState({ btnStatus: true });
    this.props.fetchUserPosts();
  };

  fetchLikes = () => {
    this.setState({ btnStatus: false });
    this.props.fetchLikedPosts();
  };

  updateLikes = () => {
    this.setState({ btnStatus: false });
    this.fetchLikes();
  };

  componentDidMount() {
    this.fetchTweets();
  }

  render() {
    return (
      <div className="feed profile">
        <div className="feed__header">
          <h2>{this.props.user.name}</h2>
          <h4>{"@" + this.props.user.username}</h4>
          <div className="date__location">
            <span className="location">
              <FmdGoodIconOutlined fontSize="small" />
              <span>{this.props.user.location}</span>
            </span>
            <span className="dateJoined">
              <DateRangeIcon fontSize="small" />
              <span>
                {"Joined " +
                  new Date(this.props.user.created_at).toLocaleString(
                    "default",
                    {
                      month: "long",
                    }
                  ) +
                  " " +
                  new Date(this.props.user.created_at).getFullYear()}
              </span>
            </span>
          </div>
        </div>
        <div className="feed__header">
          <button
            className={this.state.btnStatus ? "active" : null}
            onClick={() => this.fetchTweets()}
          >
            Tweets
          </button>
          <button
            className={this.state.btnStatus ? null : "active"}
            onClick={() => this.updateLikes()}
          >
            Likes
          </button>
        </div>
        <PostsContainer />
      </div>
    );
  }
}
