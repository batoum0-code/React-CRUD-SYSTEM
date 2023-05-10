import React from 'react'
import { Link } from 'react-router-dom'
import './SideBar.css'
const SideBar = () => {
  return (
    <div className='side-bar'>
      <Link className='side-items' to = '/products'>Products</Link>
      <Link className='side-items' to = '/Categories'>Categories</Link>
    </div>
  )
}

export default SideBar