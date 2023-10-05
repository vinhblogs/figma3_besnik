import React from 'react'
import "./navbar.css"
const Navbar = () => {
  return (
    <>
    <nav>
        <div className="navbar-logo">
            <img src="./images/Logo_nav.png" alt="logo-navbar" />
        </div>
        <div className="navbar-menu">
            <ul className='menu-links'>
                <li><a href="/home">Home</a></li>
                <li><a href="/review">Review</a></li>
                <li><a href="/about-us">About Us</a></li>
                <li><a href="contact">Contact Us</a></li>
            </ul>
        </div>
        <div className="navbar-sign">
            <button className='btn-sign'>Sign Up</button>
             <div><img src="./images/Cart._nav.png" alt="" /></div>
        </div>
    </nav>
    </>
  )
}

export default Navbar