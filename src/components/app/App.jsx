import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import NavBar from "../navBar/NavBar.jsx"
import Users from "../users/Users.jsx"
import AddUser from "../addUser/AddUser.jsx";


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/addUser" element={<AddUser />} />

            <Route path="*" element={<Users />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
