import React from "react";
import {Switch, Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Feed from "./components/Feed";
import Widgets from "./components/widget/Widget";


export default function Pages() {
    return (
        <Switch>
            <Route path="/">
                <Navbar />
                <Widgets />
            </Route>
        </Switch>
    )
}