import React, { useContext } from 'react'
import { AuthContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const NavAdmin = () => {

    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };


    return (
        <header>
            <nav className='flex justify-between items-center px-8 py-4 bg-blue-600 text-white'>
                <h1 className='text-lg md:text-xl lg:text-2xl font-semibold'>Bienvenido Administrador</h1>
                <button onClick={handleLogout} className="bg-white text-sky-600 text-sm md:text-lg hover:bg-sky-100 hover:shadow-lg border-0 rounded-md px-2 py-1 md:px-3 md:py-2 lg:px-5 lg:py-2 font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-0.5">
                    Cerrar Sesion
                </button>
            </nav>
        </header>
    )
}

export default NavAdmin