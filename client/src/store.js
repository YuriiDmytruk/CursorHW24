import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { users } from "./redux/users-store/reducer";
import { news } from "./redux/news-store/reducer";

import thunk from 'redux-thunk'

const reducer = combineReducers({
  users,
  news,
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, enhancer);

export default store;
