import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-sm'>
      <div className='container flex h-16 items-center justify-between px-4 md:px-6'>

        {/*Logo de la Empresa*/}
        <Link to="/" className='flex items-center gap-2'>
          <span className='text-2xl font-bold text-gray-900'>CarWash</span>
        </Link>

        {/*Enlaces de rutas con Nav */}
        <nav className='hidden md:flex'>
          <ul className='flex space-x-4'>

            <li>
              <Link className='relative group text-lg font-medium text-gray-500 hover:text-blue-900 transition-colors'>
                Inicio
                <span className='absolute left-0 bottom-0 h-[2px] w-0 bg-blue-900 transition-all duration-300 group-hover:w-full' />
              </Link>
            </li>

            <li>
              <Link className='relative group text-lg font-medium text-gray-500 hover:text-blue-900 transition-colors'>
                Nosotros
                <span className='absolute left-0 bottom-0 h-[2px] w-0 bg-blue-900 transition-all duration-300 group-hover:w-full' />
              </Link>
            </li>

            <li>
              <Link className='relative group text-lg font-medium text-gray-500 hover:text-blue-900 transition-colors'>
                Servicios
                <span className='absolute left-0 bottom-0 h-[2px] w-0 bg-blue-900 transition-all duration-300 group-hover:w-full' />
              </Link>
            </li>

            <li>
              <Link className='relative group text-lg font-medium text-gray-500 hover:text-blue-900 transition-colors'>
                FAQs
                <span className='absolute left-0 bottom-0 h-[2px] w-0 bg-blue-900 transition-all duration-300 group-hover:w-full' />
              </Link>
            </li>

            <li>
              <Link className='relative group text-lg font-medium text-gray-500 hover:text-blue-900 transition-colors'>
                Tus Reservas
                <span className='absolute left-0 bottom-0 h-[2px] w-0 bg-blue-900 transition-all duration-300 group-hover:w-full' />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar