import React, { useEffect } from 'react'
import axios from './axios'

function ApiAxios() {
   async function  ApiCall() {
    //this is use instance so no full url  --- full url in instance file 
    const res = await axios.get("/users");
    console.log(res);
    
   }
 useEffect(()=>{
    ApiCall();
 },[])

  return (
    <div>
       <h4>Api axios</h4>
       <button onClick={ApiCall}>Api call use Axios</button>
    </div>
  )
}

export default ApiAxios
