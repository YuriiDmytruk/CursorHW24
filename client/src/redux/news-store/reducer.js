import { ADD_NEWS, RENEW_NEWS } from "../types";

export const news = (state = [], action) => {
  switch (action.type) {
    case ADD_NEWS: {
      return [...state, action.payload];
    }
    case RENEW_NEWS: {
      return action.payload;
    }
    default:
      return state;
  }
};