import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Account from "./pages/Account";
import Contact from "./pages/Contact";
import User from "./pages/User";
import NavbarCom from "./components/Navbar";

import PrivateRoute from "./PrivateRouter/PrivateRoute";
function Router() {
  return (
    <BrowserRouter>
      <NavbarCom />
      <Routes>
        <Route path="/" element={<Home />}></Route>
 

        <Route element={<PrivateRoute/>}>
         <Route path="/about" element={<About />}></Route>
          <Route path="/account" element={<Account />}></Route>

        </Route>


        <Route path="/user/:username" element={<User />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
     
    </BrowserRouter>
  );
}

export default Router;
