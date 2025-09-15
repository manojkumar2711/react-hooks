import React from 'react'

function ApiFetch() {
  async function ApiCall() {
    const res = await fetch("https://dummyjson.com/users");
     const data = await res.json();
    console.log(data);
    
}

  return (
    <div>
         <h4>fet Api Call</h4>
         <button onClick={ApiCall}>Api call</button>
    </div>
  )
}

export default ApiFetch
