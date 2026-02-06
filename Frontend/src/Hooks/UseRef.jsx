import React, { useState, useRef, useEffect } from 'react'

export default function UseRef() {

    // const [count, setCount] = useState(0);
    // const ref = useRef(0);
    const inputRef = useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
    },[])

    // useEffect(() => {
    //     ref.current++;
    // }, [count]);

    return (
        <div>
            <h1>Ref Example</h1>
            <h2>Count : {count}</h2>
            <h2>Count : {ref.current}</h2>
            <button onClick={() => setCount(count + 1)}>Inc</button>
        </div>
    );
}
