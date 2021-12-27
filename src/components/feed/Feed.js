import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Bookmarks from "../pages/BookmarksPage";
import ProfilePage from "../pages/ProfilePage";
import PostsContainer from "../containers/PostsContainer";
import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/bookmarks">
          <Bookmarks />
        </Route>
        <Route path="/bookmarks">
          <ProfilePage />
        </Route>
      </Switch>
      <PostsContainer />
    </div>
  );
}

export default Feed;
