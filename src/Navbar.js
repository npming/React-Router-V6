import React from 'react'
import './Styles/Navbar.css'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="feeds">Feeds</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="contact">Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar