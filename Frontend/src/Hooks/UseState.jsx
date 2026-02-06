// import React, { useEffect, useState } from "react";
// const UseState = () => {
//     const [count,setCount] = useState(0);
//     const [type ,setType] = useState("");
//     const [quantity,setQuantity] = useState(1);

//     useEffect(() => {
//         if(count%2==0){
//             setType("Even");
//         }
//         else{
//             setType("Odd");
//         }
        
//     },[])
//     let price = 300;
//     let total = price*quantity;
//     return(
//         <div>

//             <h1>UseState Examples</h1>
//             <h1>Count : {count}</h1>
//             <button onClick={() => setCount(count+1)}>Increment</button>
//             <button onClick={() => setCount(count-1)}>Decrement</button>
//             <h1>Type: {type}</h1>
//             <button onClick={() => setQuantity(q=>q+1)}>Inc Value</button>
//             <h1>Price : {total}</h1>
//             <button onClick={() => setQuantity(q=>q-1)}>Dec Value</button>


//         </div>
//     )
// }
// export default UseState;



import React, { useState } from "react";

// function Count() {
//   const [count, setCount] = useState(0);

//   // Derived value
//   const type = count % 2 === 0 ? "EVEN" : "ODD";

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <h2>Type: {type}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>
//     </div>
//   );
// }

function UseState ()  {
    const [showpassword,setShowpassword] = useState(false);
    const [inputpassword,setInputpassword] =useState();
    return(
        <>
        <h1>Toggle Example</h1>
        <input type={showpassword ? "text" : "password"} placeholder="Enter passwod" value={inputpassword} onChange={(e) => setInputpassword(e.target.value)}/>
        <button onClick={() => setShowpassword(!showpassword)}>{showpassword ? "Hide" : "Show"} Password</button>
        </>
    )
}
export default UseState;


