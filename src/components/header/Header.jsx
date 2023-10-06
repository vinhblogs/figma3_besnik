import React from 'react'
import Navbar from './navbar/Navbar'
import "./header.css"
import Login from './login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../home/Home'
import Contact from '../contact/Contact'

const Header = () => {
  return (
    <>
        <header>
            
            <Routes>
              <Route path="/"  element={<Home/>} />
              {/* <Route path="/contact" element={<Contact/>} /> */}
              <Route path="/contact" Component={Contact} />
              <Route path="/login" Component={Login} />
            </Routes>       
            {/* <div className='header-content'>
                <div className="header-content-left">componet</div>
                <div className='header-content-right'><img src="./images/header_pizza.png" alt="" /></div>
            </div> */}
        </header>
    </>
  )
}

export default Header