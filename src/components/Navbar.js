import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/LayoutNav";
import About from "../pages/About";
import Cart from "../pages/Cart";
export default function Navbar() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route>
                <Route path="/" element={<Layout/>}>
                    <Route path="About" element={<About/>}/>
                    <Route path="Cart" element={<Cart/>}/>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter></>
  )
}
