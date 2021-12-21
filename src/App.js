import React from "react";
import Navbar from "./components/navbar/Navbar";
import Feed from "./components/Feed";
import Widget from "./components/widget/Widget";
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
