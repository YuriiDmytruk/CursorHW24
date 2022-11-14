import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import store from './store'

import App from "./components/app/App";

import {getUsers} from "./redux/users-store/action"
import {getNews} from "./redux/news-store/action"

store.dispatch(getUsers)
store.dispatch(getNews)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
