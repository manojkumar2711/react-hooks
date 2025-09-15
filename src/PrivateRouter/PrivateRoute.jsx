import React from 'react'
import { Outlet } from 'react-router-dom'
import Contact from '../pages/Contact'

function PrivateRoute() {
   
     const user = localStorage.getItem("user");
     console.log(user);

    if(!user){
        return <Contact/>
    }
  return <Outlet/>
};

export default PrivateRoute
