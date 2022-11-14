import { ADD_USER, RENEW_USERS } from "../types";

export const users = (state = [], action) => {
  switch (action.type) {
    case ADD_USER: {
      return [...state, action.payload];
    }
    case RENEW_USERS: {
      return action.payload;
    }
    default:
      return state;
  }
};