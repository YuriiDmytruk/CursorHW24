import { ADD_USER } from "./types.js";

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};
