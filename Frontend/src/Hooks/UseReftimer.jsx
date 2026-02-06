// import React, { useRef, useState, useEffect } from 'react'

// const useReftimer = () => {
    
//   const timer = useRef(null)
//   const [time, setTime] = useState(0)

//   const start = () => {
//     if (timer.current) return
//     timer.current = setInterval(() => {
//       setTime(prev => prev + 1)
//     }, 1000)
//   }

//   const stop = () => {
//     clearInterval(timer.current)
//     timer.current = null
//   }
//   const reset = () => {
    
//     stop();
//     setTime(0);
//   }

//   return { time, start, stop,reset }
// }

// const App = () => {
//   const { time, start, stop,reset } = useReftimer()

//   return (
//     <div>
//       <h1>Timer : {time}</h1>
//       <button onClick={start}>Start</button>
//       <button onClick={stop}>Stop</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default App


