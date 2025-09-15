import React, { useEffect, useMemo, useState } from 'react'

function UseMemo() {
   const[num,setNum] = useState(1);
   const [dark,setDark] = useState(false);

   const number = useMemo(()=>{
      return slowFn(num);
   },[num]) ;


   
  const themeStyle = useMemo(()=>{
    return  { backgroundColor : dark ? "black" : "white",
     color : dark ? "white" : "black",
    }
  },[dark])


useEffect(()=>{
  console.log("theme change")
},[themeStyle]);

  return (
    <div>
      <input type='number' value={num} onChange={(e)=>setNum(e.target.value)}></input>
      <button onClick={()=>setDark((cur)=> !cur)}>Toggle theme</button>
      <div style={themeStyle}> hi {number} </div>
    </div>
  )
}

export default UseMemo


function slowFn(num){
     console.log("Calling slowFn...");
    // for(let i= 0 ; i< 10000; i++) {}
    return num * 2;

}