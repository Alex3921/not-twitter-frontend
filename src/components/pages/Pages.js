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

import "../feed/Feed.css";

export class Pages extends Component {
  render() {
    return (
      <Switch>
        {localStorage.jwt ? (
          <>
            <Route exact path="/home">
              <Navbar />
              <HomePage fetchHomePosts={() => this.props.fetchHomePosts()} />
              <Widget />
            </Route>

            <Route exact path="/bookmarks">
              <Navbar />
              <BookmarksPage
                fetchSavedPosts={() => this.props.fetchSavedPosts()}
              />
              <Widget />
            </Route>

            <Route exact path="/profile/:username">
              <Navbar />
              <ProfilePage
                fetchUserPosts={() => this.props.fetchUserPosts()}
                fetchLikedPosts={() => this.props.fetchLikedPosts()}
              />
              <Widget />
            </Route>
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

const mapStateToProps = (state) => ({
  users: console.log(state)
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSavedPosts: () => dispatch(fetchSavedPosts()),
    fetchLikedPosts: () => dispatch(fetchLikedPosts()),
    fetchHomePosts: () => dispatch(fetchHomePosts()),
    fetchUserPosts: () => dispatch(fetchUserPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
