import React from 'react'
import './products.css'
import { Link } from 'react-router-dom'
import { useEffect , useState} from 'react'

const Products = () => {
  

  const [product, setProduct] = useState([]);

  // Get All Product 
  const getAllProducts = () => {
    
      fetch('http://localhost:3030/posts')
      .then((res) => res.json())
      .then((data)=>{
        
        setProduct(data);
      })
    }


  // display data

  useEffect( () => {
    getAllProducts();
  } , [] )

  //////////////

  // delete products

  
  // slice data function 

  const onSliceData = (data) =>{
     return (data.slice(1.9))
    
  }
  const deleteProduct = (productId) =>{
  fetch(`http://localhost:3030/posts/${productId}` , {
    method:"DELETE"
  })
  .then( (res) => res.json() )
  .then( (data) => {
    getAllProducts();
    console.log(data);
 
  })
  }
  //////////////////
  

  
  
  return (
    <div className='product-container'>
      <h1>All Products</h1>
      <Link to={'/products/add'} className='btn' > Add New Product </Link>
      <table className='products-table'>
        <thead>
          <tr >
            <td>ID</td>
            <td>Title</td>
            <td>Price</td>
            <td>Operation</td>
          </tr>
        </thead>
        <tbody>
        {
          product.map( (product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                <button className='product-btn view-btn' >View</button>
                <Link to={`/products/${product.id}`} className='product-btn details-btn'>Details</Link>
                <button className='product-btn delete-btn' onClick={ () => deleteProduct(product.id) } >Delete</button>
                </td>
              </tr>
            )
          })
        }
        
        </tbody>
      </table>
    </div>
  )
}

export default Products