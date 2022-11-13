import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { users } from "./redux/reducer.js";

import thunk from 'redux-thunk'

const reducer = combineReducers({
  users,
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, enhancer);

export default store;
