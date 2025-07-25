import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import React from 'react'

const Layout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
        <Navbar />
        <main className="flex-grow">
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout