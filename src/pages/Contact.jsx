import React, { useState } from 'react'

function Contact() {

     const [user,setUser] = useState("manoj");

  const  Login =()=>{
     localStorage.setItem("user" , user);
  }
  return (
    <div>
    <h1>Contact</h1>
       <button onClick={Login}>login</button>
      
    </div>
  )
}

export default Contact
