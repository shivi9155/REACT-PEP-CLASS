import React from 'react'

const UseMemo = () => {
const [count, setCount] = React.useState(0)

const [text ,setText] = React.useState("")
const memoizedValue = React.useMemo(() => {
  console.log('Calculating memoized value...')
  return count * 2;
}, [count])
// const memoizedValue = () => {
//   console.log("multiply")
//   return count * 2
// }


  return (
    <div>
      <h1>{count}</h1>
      <h2>{memoizedValue}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input type="text" onChange={(e)=>setText(e.target.value)}/>
      <input type="checkbox" name="" id="" />
    </div>
  )
}

export default UseMemo
