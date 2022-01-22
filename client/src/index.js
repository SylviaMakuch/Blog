import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applymiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, compose(applymiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
