import React, { useCallback, useState } from 'react'
import List from './List';

function UseCallBack() {
   const[num,setNum] = useState(1)
     const[dark ,setDark] = useState(false); 

   const darkTheme = {
    backgroundColor : dark ? "white" : "black",
    color : dark ? "black" : "white",
   }

   const getItem = useCallback( (inr)=>{
     return [num + inr + 1 , num + inr + 2, num + inr  + 3 ];
   },[num]);

  return (
    <div style={darkTheme}>
      <input type='number' value={num} onChange={(e)=>setNum(parseInt(e.target.value))}></input>
      <button onClick={()=>setDark((cur) => !cur)}>toggle Theme</button>

      <List getItem={getItem}/>
    </div>
  )
}

export default UseCallBack
