import React from "react";

import { userModel } from "../../models/userModel.js";

import User from "../user/User.jsx"

import UsersS from "./style/UsersS.js"



function Users() {
  const users = [
    new userModel(0, "Tom", "@tommy", ""),
    new userModel(1, "Jerry", "@jerry", ""),
    new userModel(2, "Lusy", "@lusy", ""),
  ];


  return (
    <UsersS>
      {users.map((e) => (
        <User key={e.id} user={e} />
      ))}
    </UsersS>
  );
}

export default Users;
