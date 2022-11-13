import React from "react";
import { NavLink } from "react-router-dom";

import NavBarS from "./style/NavBarS.js"

function NavBar() {
  return (
    <NavBarS>
      <ul className="header">
        <li className="option">
          <NavLink className="link" to="/users">
            Users
          </NavLink>
        </li>
        <li className="option">
          <NavLink className="link" to="/addUser">
            Add User
          </NavLink>
        </li>
      </ul>
    </NavBarS>
  );
}

export default NavBar;
