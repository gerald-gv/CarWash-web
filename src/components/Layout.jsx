import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import React from 'react'
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Layout = () => {

  useEffect(() => {
    AOS.init({
      duration: 800, // duración de la animación en ms
      once: true, // solo una vez
    });
  }, []);

  return (
    <div className='min-h-screen flex flex-col'>
        <Navbar />
        <main className="flex-grow overflow-hidden">
            <Outlet/>
        </main>
        <Footer />
    </div>
  )
}

export default Layout