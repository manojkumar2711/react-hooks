import React, { useContext } from 'react'
import { ThemeContext } from './UseContext'

function User() {
    const {theme} = useContext(ThemeContext)

    const themeStyle ={
        backgroundColor : theme === "light" ? "white" : "black",
        color : theme === "light" ? "black" : "white",
    } 


  return (
    <div>
      <h1 style={themeStyle}>user</h1>
    </div>
  )
}

export default User
