import React, { Component } from "react";
import PostsContainer from "../containers/PostsContainer";
import DateRangeIcon from "@mui/icons-material/DateRange";
import FmdGoodIconOutlined from "@mui/icons-material/FmdGoodOutlined";

import "../feed/Feed.css";

const user = localStorage.user ? JSON.parse(localStorage.user) : null;
const joined = localStorage.user ? new Date(user.created_at) : null;
const year = localStorage.user ? joined.getFullYear() : null;
const month = localStorage.user ? joined.toLocaleString("default", { month: "long" }) : null;

export default class ProfilePage extends Component {
  state = { btnStatus: false };

  fetchTweets = () => {
    this.setState({ btnStatus: true })
    this.props.fetchUserPosts()
  }

  fetchLikes = () => {
    this.setState({ btnStatus: false })
    this.props.fetchLikedPosts()
  }

  componentDidMount() {
    this.fetchTweets()
  }


  render() {
    return (
      <div className="feed profile">
        <div className="feed__header">
          <h2>{user.name}</h2>
          <h4>{"@" + user.username}</h4>
          <div className="date__location">
            <span className="location">
              <FmdGoodIconOutlined fontSize="small" />
              <span>{user.location}</span>
            </span>
            <span className="dateJoined">
              <DateRangeIcon fontSize="small" />
              <span>{"Joined " + month + " " + year}</span>
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
