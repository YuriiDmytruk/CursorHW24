import { URL } from "../../env.js";

import { ADD_USER, RENEW_USERS } from "../types";
import { userModel } from "../../models/userModel";

export const addUser = (user) => {
  return async (dispatch, getState) => {
    user.id = getState().users.length;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(user),
    };

    const request = await fetch(`${URL}/users`, requestOptions);
    const response = await request.json();

    if (response.status === 200) {
      dispatch({ type: ADD_USER, payload: user });
    }
  };
};

export async function getUsers(dispatch, getState) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: null,
  };

  const request = await fetch(`${URL}/users`, requestOptions);
  const response = await request.json();

  if (response.status === 200) {
    const users = Object.values(response.userMap);

    let result = [];

    users.forEach((e) => {
      result.push(new userModel(e.id, e.name, e.userName, e.imgLink));
    });

    dispatch({ type: RENEW_USERS, payload: result });
  }
}
