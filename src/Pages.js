import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Feed from "./components/Feed";
import Widget from "./components/widget/Widget";


export default function Pages() {
    return (
        <Switch>
            <Route path="/" >
                <Redirect to="/home" />
                <Navbar />
                <Route exact path="/home"><Feed /></Route>
                <Widget />
            </Route>
        </Switch>
    )
}