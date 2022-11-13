import { ADD_USER } from "./types.js";

export const addUser = (user) => {
  return (dispatch, getState) => {
    user.id = getState().users.length
    console.log(user);
    dispatch({ type: ADD_USER, payload: user });
  };
};

export const getUsers = () => {
  console.log()
  return  (dispatch, getState) => {
    
  };
}
