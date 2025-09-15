import React, { useEffect, useState } from 'react'

function List({getItem}) {
       const[list,setList] = useState([]);
       
    useEffect(()=>{
        console.log("list up")
        setList(getItem(10));
    },[getItem]);

  return (


    <div>
      {list.map((item,index)=>{
      return <p key={index}> {item}</p>
      })}
    </div>
  )
}

export default List
