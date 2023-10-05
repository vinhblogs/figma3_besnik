import React from 'react'
import Navbar from './navbar/Navbar'
import "./header.css"
import Login from './login/Login'
const Header = () => {
  return (
    <div>
        <header>
            <Navbar/>
            <div className='header-content'>
                <div className="header-content-left">componet</div>
                <div className='header-content-right'><img src="./images/header_pizza.png" alt="" /></div>
            </div>
            <Login/>
        </header>
    </div>
  )
}

export default Header