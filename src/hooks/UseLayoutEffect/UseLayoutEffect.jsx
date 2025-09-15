import React, { useLayoutEffect, useState } from 'react'

function UseLayoutEffect() {
   const [count,setCount] = useState(1);

 //use layouteffect for  before  animation effect  , it will during the paint of the layout  ,ex : during the components render  
   useLayoutEffect(()=>{
       console.log("layout effect 1")
   },[count])
  console.log("before render 2")
  return (
    <div>
        <h1>UseLayoutEffect</h1>
         <h2>{count}</h2>
         <button onClick={()=>setCount( (cur) => cur + 1)}>Add</button>
    </div>
  )
}

export default UseLayoutEffect
