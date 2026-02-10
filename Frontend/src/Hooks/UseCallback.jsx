import React, { useCallback, useState } from 'react'
import UseCallback1 from './UseCallback1';
const UseCallback = () => {

    const [count,setCount] = useState(0);
    const handleClick = useCallback(() => {
        console.log("Rendered");
    },[])
        
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count+1)}>Inc</button>
        <UseCallback1 handleClick={handleClick}/>

      
    </div>
  )
}

export default UseCallback
