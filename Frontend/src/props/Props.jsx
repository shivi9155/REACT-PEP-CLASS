import React from 'react'

const Props = ({details, sum, onClick}) => {

    
  return (
    <div>
        <h1>Props in React</h1>
        {/* <h2>{car.name} {car.model} {car.color}</h2> */}
       
        <div>
            {
                details.map((item, index) => (
                 <ul key={index}>
                      <li>{item.name} - {item.age}</li>
                      <li><button onClick={() => sum(4,5)}>Sum</button></li>
                      <li><button onClick={() => onClick()}>Click Me</button></li>
                      <button onClick={() => dbClick()}>Double Click</button>
                 </ul>
                ))
            }
        </div>
      
    </div>
  )
}

export default Props
