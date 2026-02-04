import React from 'react'
import Student from './Student'
import Props from './props/props.jsx'

const App = () => {
  const car = { name: 'Honda', model: '2022', color: 'Black' }
  const Tech = ['JavaScript', 'Python', 'React']

  return (
    <div>
      {/* <h1>Hello React</h1>
      <Student/> */}
      <Props name={car.name} model={car.model} color={car.color}/>
      {/* <Props tech={Tech}/> */}
    </div>
  )
}

export default App
