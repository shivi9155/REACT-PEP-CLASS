import React, { useMemo, useState } from 'react'

export default function UseMemo() {

    const [count,setCount] = useState(0);
    const [text,setText] = useState("");
    const doubleC = useMemo(() => {
        console.log("Calculating doubleC")
        return count*2;

    },[count])
  return (
    <div>
        <h1>{count}</h1>
        <h1>{doubleC}</h1>
      <button onClick={() => setCount(count+1)}>Inc</button>
    </div>
  )
}
