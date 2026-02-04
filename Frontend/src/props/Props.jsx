import React from 'react'

const props = () => {

    const car = {
        name: "Honda",
        model: "2022",
        color: "Black"
    }
    const Tech = ["JavaScript","Python","React"];
  return (
    <div>
        <h1>Props in React</h1>
        <h2>{car.name} {car.model} {car.color}</h2>
       
        <div>
            {
                Tech.map((item,index) => (
                 <ul>
                      <li key={index}>{item.name}</li>
                 </ul>




                ))
            }
        </div>
      
    </div>
  )
}

export default props
