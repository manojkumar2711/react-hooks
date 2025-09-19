import React, { useEffect, useState } from 'react'

function Pratices() {
   const[count , setCount] = useState(0);
   const[isOn , setIsOn] = useState(true);
   const Arr = [ "apple", "Mango" , "orange"];

    useEffect(()=>{
       
            setCount(cur => (cur + 0) );
             console.log ("run" , count)
    },[])

  console.log ("run 2" , count)
  return (
    <>
    <div> 

    <h2>{count}</h2>
    <button onClick={()=>setCount(cur => (cur +1))}>add</button>
                 <button onClick={()=>setCount(cur => (cur - 1))}>sub</button>
    </div>

    <button  onClick={() => setIsOn(!isOn)} > {isOn ? "on" : "off"}   </button>
    {Arr.map((item ,index)=> <li key={index}>{item}</li> )}
    </>
  )
}

export default Pratices
