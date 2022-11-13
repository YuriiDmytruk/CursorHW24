import { ADD_USER, ADD_USERS } from "./types";

import { userModel } from "../models/userModel.js";

export const users = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return [...state, action.payload];
    }
    case ADD_USERS: {
      return [...state, action.payload.flat()];
    }
    default:
      return state;
  }
};

const initialState = [
  new userModel(
    0,
    "Rick Sanchez",
    "@mega_rick",
    "https://cdn.vox-cdn.com/thumbor/g2xlpq1YVNz9ceS6z3VazJ9nUC0=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9432879/r_m_sauce.jpg"
  ),
  new userModel(
    1,
    "Morty Smith",
    "@morty_smith",
    "https://sportshub.cbsistatic.com/i/2022/09/19/13683d26-7779-473d-a77a-316402989115/rick-and-morty-season-6-morty-shocked.jpg"
  ),
  new userModel(
    2,
    "Jerry Smith",
    "@jerry_smith",
    "https://www.looper.com/img/gallery/the-worst-thing-thats-ever-happened-to-jerry-on-rick-and-morty/intro-1567519981.jpg"
  ),
  new userModel(
    3,
    "Beth Smith",
    "@beth_sanchez",
    "https://i.pinimg.com/originals/43/1c/b9/431cb98e914a79c01ef4c7267fa3e0aa.png"
  ),
  new userModel(
    4,
    "Summer Smith",
    "summer_smith",
    "https://i.pinimg.com/originals/93/3f/ce/933fce7bf2db6fed7b2a38569fd5f7c4.png"
  ),
];
