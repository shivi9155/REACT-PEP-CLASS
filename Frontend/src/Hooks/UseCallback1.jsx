
import React from "react"
const UseCallback1 = React.memo(({handleClick}) => {
    console.log("Button Clicked")
  return (
    <div>
      <button onClick={handleClick}></button>
    </div>
  )
})
  2.// import React from 'react'

// const UseCallback1 = ({ handleClick }) => {
//     console.log("Child Component Rendered");

//     return (
//         <div>
//             <button onClick={handleClick}>Child Button</button>
//         </div>
//     )
// }

export default UseCallback1



