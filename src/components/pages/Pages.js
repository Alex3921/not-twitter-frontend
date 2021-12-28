import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Feed from "../feed/Feed";
import Widget from "../widget/Widget";
import SigninPage from "./SigninPage";

import HomePage from "./HomePage";
import BookmarksPage from "./BookmarksPage";
import ProfilePage from "./ProfilePage";
import PostsContainer from "../containers/PostsContainer";
import "../feed/Feed.css";

export default function Pages() {
  return (
    <Switch>
      {console.log(localStorage)}
      {localStorage.jwt ? (
        <>
          <Route exact path="/home">
            <Navbar />
            <HomePage />
            <Widget />
          </Route>

          <Route exact path="/bookmarks">
            <Navbar />
            <BookmarksPage />
            <Widget />
          </Route>

          <Route exact path="/profile/:username">
            <Navbar />
            <ProfilePage />
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
