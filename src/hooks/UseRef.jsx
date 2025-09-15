import React, { useRef, useState } from 'react'

function UseRef() {
  
    const[input,setInput] = useState("");
    const inputRef = useRef();

    console.log("reload")


    const print=()=>{
        console.log(input);
        setInput(inputRef.current.value);
        inputRef.current.focus();
        console.log(inputRef.current.value);
    }


  return (
    <div>
     <input ref={inputRef} ></input>
      <input onChange={(e)=>setInput(e.target.value)}></input>
      <h2>{input}</h2>
      <button onClick={print}>print</button>
    </div>
  )
}

export default UseRef
