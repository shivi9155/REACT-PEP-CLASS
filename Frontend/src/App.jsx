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






import React from 'react'
// import UseState from './Hooks/UseState'
// import Practice from './Hooks/Practice'
// import Count from './Hooks/Count.jsx'
// import Disable from './Hooks/Disable.jsx'
// import Fetch from './Hooks/fetch.jsx'
// import UseRef from './Hooks/UseRef.jsx'
// import UseRefTimer from './Hooks/UseReftimer.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BrowserRoute1 from './Hooks/BrowserRoute1.jsx'

export default function AppComponent() {

  return (
    <div>
      {/* <UseState/> */}
      {/* <Count/>
      <Disable/>
      <Practice/> */}
      {/* <UseRef/> */}

      {/* <Fetch/> */}
      
      {/* <UseRefTimer /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/useref' element={<BrowserRoute1/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}
