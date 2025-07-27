import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import React from 'react'
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className='min-h-screen flex flex-col overflow-x-hidden'>
        <Navbar />
        <main className="flex-grow">
            <Outlet/>
        </main>
        <Footer />
    </div>
  )
}

export default Layout