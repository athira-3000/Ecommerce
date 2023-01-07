import React from 'react'
import { Outlet, Link } from "react-router-dom";
const LayoutNav = () => {
  return (
    <>
      <div className="nav">
      <div className="navItem"><h1>E-Cart</h1></div>
      <div className="navItem">
        <ul>
            <li><a href="/#">Home</a></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><a href="/#">Login</a></li>
        </ul>
      </div>  
      </div>
      <Outlet/>
    </>
  )
}

export default LayoutNav
