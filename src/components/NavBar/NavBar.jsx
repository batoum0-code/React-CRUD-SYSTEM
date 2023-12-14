import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='nav-bar'>
        <Link to={'/'} className='logo'> this the Home page </Link>
        <ul className='nav-items'>
            <li>Products</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
    </div>
  )
}

export default NavBar
