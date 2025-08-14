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
                <h1 className='text-2xl font-semibold'>Bienvenido Administrador</h1>
                <button onClick={handleLogout} className="bg-white text-sky-600 hover:bg-sky-100 hover:shadow-lg border-0 rounded-md px-5 py-2 font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-0.5">
                    Cerrar Sesion
                </button>
            </nav>
        </header>
    )
}

export default NavAdmin