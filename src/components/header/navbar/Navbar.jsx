import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav>
        <div className="navbar-logo">
            <img src="./images/Logo_nav.png" alt="logo-navbar" />
        </div>
        <div className="navbar-menu">
            <ul className='menu-links'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/review">Review</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </div>
        <div className="navbar-sign">
            <Link to={"/login"}><button className='btn-sign'>Sign Up</button></Link>
            
             <div><img src="./images/Cart._nav.png" alt="" /></div>
        </div>
    </nav>
    </>
  )
}

export default Navbar