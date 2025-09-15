import React, { useReducer, useState } from 'react'


const Action ={
    INCREMENT : "increment",
    DECREMENT : "decrement",
}


function reducerFn (state,action){
   switch(action.type){
    case  Action.INCREMENT :
     return {count : state.count + 1};
     case Action.DECREMENT :
        return {count : state.count - 1};
     default :
      return state; 
   }
       
}

function UseReducer() {
    const [state,dispatch] = useReducer(reducerFn,{ count : 0 });

    //const[count ,setCount] = useState(1);
 

    const increment = () =>{
       // setCount((cur) =>(cur + 1));
       dispatch({type : Action.INCREMENT})
    }
    const decrement = () =>{
         // setCount((cur) => (cur - 1))
         dispatch({type : Action.DECREMENT})
    }
   // console.log(state);
  return (
    <div>
    <h1>Use Reducer</h1>
    <div style={ {display : "flex", alignItems: "center" }}>
     
     <button onClick={decrement}>  - </button>
     <h2>{state.count}</h2>
          <button onClick={ increment}> + </button>
    </div>
    </div>
  )
}

export default UseReducer
