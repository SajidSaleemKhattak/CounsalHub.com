import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Client_Signup from "./pages/client/Client_Signup";
import Categories from "./pages/client/categories";
import Addtional from "./pages/client/Additional";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route
          path="/client_signup"
          element={<Client_Signup></Client_Signup>}
        ></Route>
        <Route
          path="/additional_client"
          element={<Addtional></Addtional>}
        ></Route>
        <Route path="/categories" element={<Categories></Categories>}></Route>
      </Routes>
    </div>
  );
};

export default App;
