import React from "react";
import { NavLink } from "react-router-dom";

import NavBarS from "./style/NavBarS"

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
        <li className="option">
          <NavLink className="link" to="/news">
            News
          </NavLink>
        </li>
        <li className="option">
          <NavLink className="link" to="/addNews">
            Add News
          </NavLink>
        </li>
      </ul>
    </NavBarS>
  );
}

export default NavBar;
