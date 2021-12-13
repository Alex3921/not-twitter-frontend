import React from "react";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Widget from "./components/Widget";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Feed />

      <Widget />
    </div>
  );
}

export default App;
