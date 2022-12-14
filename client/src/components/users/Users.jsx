import React from "react";
import { useSelector } from "react-redux";

import User from "../user/User";
import UsersS from "./style/UsersS";


function Users() {
  const users = useSelector((state) => state.users);

  return (
    <UsersS>
      {users.map((e) => (
        <User key={e.id} user={e} />
      ))}
    </UsersS>
  );
}

export default Users;
