import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const BrowserRoute1 = () => {
  const { id } = useParams();
  
  // const products = [
  //   { id: 1, name: 'laptop' },
  //   { id: 2, name: 'mobile' },
  //   { id: 3, name: 'TV' }
  // ];
  // useEffect(()=>{
  //   fetch("").then(res=>res.json()).then((data)=>setProducts(data));
  // })
  // const product=products.find(p=>p.id==id)

  const [users,setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then((data)=>setUsers(data));
  },[])

  return (
    <div>
     
      {/* {products.map(item => (
        <div key={item.id}>{item.name}</div>
      ))} */}
      <h1>Product ID: {id}</h1>
      {/* <h1>{product?.name}</h1>
       */}
       {users.map((user) => {
        return(
          <>
          <div key={user.id}>
          <p>{user.name}</p>
          {/* <Link to={`/user/${user.id}`}>View Details</Link> */}
         

          </div>
          </>
        )
       })}

      
    </div>
  )
}

export default BrowserRoute1;
