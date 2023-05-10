import React from 'react'
import './AddPro.css'
import { useState } from 'react'
import  axios  from 'axios'
const AddPro = () => {

  const [title,setTitle] = useState();
  const [price, setPrice] = useState();

   const formSubmit = (e) => {

    e.preventDefault();

    axios.post('http://localhost:3030/posts/' , {
      title,
      price
  })
  
  .then( data => console.log(data)
  )
  }
  return (
    <div className='add-container'>
      <form onSubmit={formSubmit}>
        <label>Title  </label>
        <input 
        type='text'
        placeholder='Title'
        onChange={(e)=>setTitle( e.target.value)}
        />
        <label>Price </label>
        <input
        type='number'
        placeholder='Price'
        onChange={(e) => setPrice(e.target.value)}
        
        />
        <button className='btn add-btn'> Add Product </button>
      </form>
    </div>
  )
}

export default AddPro