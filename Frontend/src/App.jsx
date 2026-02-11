// import React from 'react'
// import Student from './Student'
// import Props from './props/props.jsx'

// const App = () => {
//   // const car = { name: 'Honda', model: '2022', color: 'Black' }
//   // const Tech = ['JavaScript', 'Python', 'React']
//   const details = [
//         {name:"Shivani" ,age:20},
//         {name:"Shraddha",age:21}
//     ]

//     function sum(a,b){
//        console.log(a+b);
//     }
//     function handleClick(){
//       alert("Single Clicked");
//     }
//     function dbClick() {
//        alert("Double Clicked")
//     }
//   return (
//     <div>
//       {/* <h1>Hello React</h1>
//       <Student/> */}
//       {/* <Props name={car.name} model={car.model} color={car.color}/> */}
//       {/* <Props tech={Tech}/> */}
//         <Props details={details} sum={sum} onClick={handleClick} dbClick={dbClick}/>


//     </div>
//   )
// }

// export default App


// import React from "react";
// class Props extends React.Component{

//   constructor(){
//     super();
//     this.state = {
//       users:[]
//     }
//   }
//   fetchUsers=() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res=>res.json())
//     .then(data=>this.setState({users:data}))
//   }
//   render(){
//     return(
//       <>
//        <h1>Welcome</h1>
//       <Props users={this.state.users}/>
//       </>
     
//     )
//   }
// }
// export default Props;

// import React from 'react'
// class Props extends React.Component(
//   render(){
//     return(
     

//     )
//   }  
// )

// export default Props;


// import UseState from './Hooks/UseState'
// import Practice from './Hooks/Practice'
// import Count from './Hooks/Count.jsx'
// import Disable from './Hooks/Disable.jsx'
// import Fetch from './Hooks/fetch.jsx'
// import UseRef from './Hooks/UseRef.jsx'
// import UseRefTimer from './Hooks/UseReftimer.jsx'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import BrowserRoute1 from './Hooks/BrowserRoute1.jsx'
// import UseMemo from './Hooks/UseMemo.jsx'
// import UseCallback from './Hooks/UseCallback.jsx'
// // import Counter from './Hooks/Counter.jsx'
// import { CounterContext } from "../context/Counter.jsx";

// export default function AppComponent() {

  // return (
  //   <div>
      {/* <UseState/> */}
      {/* <Count/>
      <Disable/>
      <Practice/> */}
      {/* <UseRef/> */}

      {/* <Fetch/> */}
      
       {/* <UseRefTimer /> */}
      {/* <Counter/> */}
      // <BrowserRouter>
      //   <Routes>
          {/* <Route path='/useref' element={<BrowserRoute1/>} />
          <Route path='/useref/:id' element={<BrowserRoute1/>} /> */}
          {/* <Route path='/callback' element={<UseCallback/>}/> */}
          // <Route path='/counter' element={<Counter/>}/>

          
      {/* <UseMemo/> */}
      
//          </Routes>
//       </BrowserRouter> 
      
//     </div>
//   )
// }



// import React from "react";
// // import Counter from "./Hooks/UseLayout.jsx";
// // import UseLayout from "./Hooks/UseLayout.jsx";
// import UseSearchParams from "./Hooks/UseSearchParams.jsx";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// function App() {
//   return (
   

//       <BrowserRouter>
//       <div>
          
//         <UseSearchParams/>
//       </div>
//         {/* <Routes> */}
//           {/* <Route path="/counter" element={<Counter />} /> */}
//           {/* <Route path="/layout" element={<UseLayout />} />
//           <Route path="/search" element={<UseSearchParams />} />
//         </Routes> */}


//       </BrowserRouter>
    
  
   
     
    
//   );
// }

// export default App;


// import ProductCart from "./ProductCart";
// import Cart from "./Cart";
// function App() {
//   return (
//     <div>
//      <h1>Shopping Cart</h1>
//      <ProductCart/>
//      <Cart/>

//     </div>
//   );
// }

// export default App;







// import ProductCart from "./Context/ProductCart";
// import Cart from "./Context/Cart";
// import { CartProvider } from "./Context/CartContext";
// import UseLayout from './Hooks/useLayout';
// import { BrowserRouter } from "react-router-dom";
// import UseSearchParams from './Hooks/UseSearchParams';

// function App() {
//   return (
//     <BrowserRouter>
      // <div>
        {/* <h1>Shopping Cart</h1> */}
        {/* <ProductCart/> */}
        {/* <Cart/> */}
        {/* <UseLayout/> */}
        {/* <UseSearchParams/>
      </div>
    </BrowserRouter>
  );
}

export default App; */}





import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from './Redux/Store/CreateSlice'
function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}
export default App
