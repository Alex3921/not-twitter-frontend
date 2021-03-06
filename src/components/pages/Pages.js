import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Navbar from "../navbar/Navbar";
import Widget from "../widget/Widget";

import SigninPage from "./SigninPage";
import HomePage from "./HomePage";
import BookmarksPage from "./BookmarksPage";
import ProfilePage from "./ProfilePage";

import { connect } from "react-redux";
import { fetchSavedPosts } from "../../actions/bookmarkActions";
import { fetchLikedPosts } from "../../actions/likeActions";
import { fetchHomePosts, fetchUserPosts } from "../../actions/postActions";
import { signoutUser } from "../../actions/authActions";

import "../feed/Feed.css";

export class Pages extends Component {
  state = {
    user: JSON.parse(localStorage.getItem("user")),
  };
  render() {
    return (
      <Switch>
        {localStorage.user ? (
          <>
            <Navbar signoutUser={() => this.props.signoutUser()} />
            <Redirect to="/home" />
            <Route exact path="/home">
              <HomePage fetchHomePosts={() => this.props.fetchHomePosts()} />
            </Route>

            <Route exact path="/bookmarks">
              <BookmarksPage
                fetchSavedPosts={() => this.props.fetchSavedPosts()}
              />
            </Route>

            <Route exact path="/profile/:username">
              <ProfilePage
                user={this.state.user}
                fetchUserPosts={() => this.props.fetchUserPosts()}
                fetchLikedPosts={() => this.props.fetchLikedPosts()}
              />
            </Route>

            <Widget />
          </>
        ) : (
          <>
            <Redirect to="/signin" />
            <Route exact path="/signin">
              <SigninPage />
            </Route>
          </>
        )}
      </Switch>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSavedPosts: () => dispatch(fetchSavedPosts()),
    fetchLikedPosts: () => dispatch(fetchLikedPosts()),
    fetchHomePosts: () => dispatch(fetchHomePosts()),
    fetchUserPosts: () => dispatch(fetchUserPosts()),
    signoutUser: () => dispatch(signoutUser()),
  };
};

export default connect(null, mapDispatchToProps)(Pages);
