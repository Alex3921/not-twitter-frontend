import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
         <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);