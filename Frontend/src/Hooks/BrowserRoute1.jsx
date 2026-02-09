import React from 'react'

const BrowserRoute1 = () => {
  const products = [
    {id:1,name:'laptop'},
    {id:2,name:'mobile'},
    {id:3,name:'TV'}
  ]
  return(
    <div>
      {products.map((item)=>{
        return(
          <h2 key={item.id}>{item.name}</h2>
        )
      })}
    </div>
  )
}

export default BrowserRoute1;
