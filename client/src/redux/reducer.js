import { ADD_USER, ADD_USERS, RENEW_USERS } from "./types";

export const users = (state = [], action) => {
  switch (action.type) {
    case ADD_USER: {
      return [...state, action.payload];
    }
    case ADD_USERS: {
      return [...state, action.payload.flat()];
    }
    case RENEW_USERS: {
      return action.payload;
    }
    default:
      return state;
  }
};