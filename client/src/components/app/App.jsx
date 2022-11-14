import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import NavBar from "../navBar/NavBar"
import Users from "../users/Users"
import AddUser from "../addUser/AddUser";
import News from "../news/News";
import AddNews from "../addNews/AddNews"


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/addUser" element={<AddUser />} />
            <Route path="/news" element={<News />} />
            <Route path="/addNews" element={<AddNews />} />
            
            <Route path="*" element={<Users />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
