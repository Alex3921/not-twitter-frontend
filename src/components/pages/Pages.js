import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Feed from "../feed/Feed";
import Widget from "../widget/Widget";

export default function Pages() {
  return (
    <Switch>
      <Route path="/">
        <Redirect to="/home" />
        <Navbar />
        <Feed />
        <Widget />
      </Route>
    </Switch>
  );
}
