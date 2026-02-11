import React, { useEffect, useLayoutEffect, useState } from 'react'

const UseLayout = () => {
    const [number,setNumber] = useState(0);

    useEffect(() => {
        console.log("This is Effect Value "+number)
    },[number])
    useLayoutEffect(()=>{
        console.log("This is Layout "+number);
    })
  return (
    <div>
        <h1>Number: {number}</h1>
        <input type='number' value={number} onChange={(e) => setNumber(e.target.value)}/>
      
    </div>
  )
}

export default UseLayout
