import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    let {productID} = useParams();
    const [pro , setPro] = useState({});
    useEffect( () => {
      fetch(`http://localhost:3030/posts/${productID}`)
      .then( (res) => res.json())
      .then( (data) => {
        setPro(data); 
        console.log(pro);
      })
    }, [])
  return (
    <>
    <h1>ProductDetails # {productID} </h1>
    <div className='container-details'>
      <h2>ID: {pro.id} </h2>
      <br/>
      <h2>Product Title : {pro.title} </h2>
      <br/>
      <h3>Product Price : {pro.price} DH </h3>
      
    </div>
    </>
  )
}

export default ProductDetails