import React,{useRef, useState, useEffect} from 'react'

const UseRef = () => {
    // const inputRef=useRef(null);
    // const scrollTo=useRef(null);
    // const [count, setCount]=useState(0)
    // const ref=useRef(0)

    // useEffect(()=>{
    //     ref.current++
    // },[count])
    // const scroll=()=>{
    //     scrollTo.current.scrollIntoView({behavior:"smooth"})
    // }
    // useEffect(()=>{
        // inputRef.current.focus()

    //     ref.current = count;
    // },[])

    const useReftimer = () => {
        const timer = useRef(null);
        const [time,setTime] = useState(0);
        const start=()=>{

            if(timer.current) return
            timer.current = setTimeout(() => {
                setTime(prev=>prev+1)
            },1000)
        }
        const stop = () => {

            clearInterval(timer.current)
            timer.current = null;
        }

    }
    

  return (
    <div>
      <h1>Ref Example</h1>
      <input ref={inputRef} placeholder="Focus me on mount" style={{padding:"8px", marginTop:"8px"}} />
        {/* <h1>Count:{count}</h1> */}
        {/* <h1>Ref:{inputRef.current.focus}</h1> */}
      {/* <h1>Ref: {ref.current}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button> */}
      <button onClick={() => setCount(count+1)}>Inc</button>


      <button onClick={scroll}>Scrolldown Contact Us</button>
      <h1 ref={scrollTo} style={{marginTop:"1000px"}}>Contact Form</h1>
    </div>
  )
}
export default UseRef