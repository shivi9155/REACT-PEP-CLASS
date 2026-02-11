import React, { useEffect, useState } from 'react'

const UseSearchParams = () => {
    const [products,setProducts] = useState([]);
    const [searchParams,setSearchParams] = UseSearchParams();
    const category = searchParams.get("category");
    useEffect(() => {
        fetch( `https://dummyjson.com/products/category/${category}`)
        .then(res=>res.json())
        .then((data) => setProducts(data.products));
    },[category])
  return (
    <div>
        {products.map((p)=>{
            return(
                <>
                <div key={p.id}>{p.title} - ${p.price}</div>
                </>
            )
        })}
        <button onClick={() => setSearchParams({category : "beauty"})}>Beauty</button>
        <button onClick={() => setSearchParams({category : "smartPhones"})}>SmartPhones</button>
        <button onClick={() => setSearchParams({category : "laptops"})}>laptops</button>
        
    </div>
  )
}


export default UseSearchParams


2.// import { useSearchParams } from "react-router-dom";
// import { useState, useEffect } from "react";

// function UseSearchParams() {
//   const [searchParams] = useSearchParams();
//   const [value, setValue] = useState("");

//   useEffect(() => {
//     setValue(searchParams.get("name"));
//   }, [searchParams]); // runs only when URL changes

//   return <h1>{value}</h1>;
// }

// export default UseSearchParams;


3.// import { useSearchParams } from "react-router-dom";

// function UseSearchParams() {
//   const [searchParams] = useSearchParams();

//   const value = searchParams.get("name");

//   return <h1>{value}</h1>;
// }

// export default UseSearchParams;


