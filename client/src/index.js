import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import store from './store.js'

import App from "./components/app/App.jsx";

import {getUsers} from "./redux/action.js"

store.dispatch(getUsers)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
