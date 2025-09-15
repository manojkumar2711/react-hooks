import React, { createContext, useState } from 'react'
import Container from './container'

export const ThemeContext = createContext();

function UseContext() {

   const[theme ,setTheme]= useState("light");

   const Toggle = ()=>{
      setTheme((cur) => (cur === "light" ? "dark" : "light"));
   }


  return (
    <ThemeContext.Provider value={{theme}}>
         <button onClick={Toggle}>Theme change</button>
        <h2>home</h2>
        <Container  />
    </ThemeContext.Provider>
  )
}

export default UseContext
