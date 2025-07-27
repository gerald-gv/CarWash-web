import React from 'react'
import { Link } from 'react-router-dom'

const FoundSection = () => {
  return (
    <section className='py-16 md:py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white'>

        {/*Contenedor FoundSection */}

        <div className='container mx-auto px-4 md:px-6 '>
            <div className='flex flex-col items-center justify-center space-y-8 text-center'>

                {/*Contenedor Titulo */}
                
                <div className='space-y-4'>
                    <h2 className='text-4xl md:text-5xl font-bold tracking-tight'>
                        Listo para experimentar la {" "}
                        <span className='bg-gradient-to-r from-sky-600 to-blue-400 bg-clip-text text-transparent'>Excelencia</span>
                        ?
                    </h2>
                    <p className='max-w-2xl mx-auto text-gray-300 text-xl leading-relaxed'>
                        Ven y Descubre porque miles de clientes confian en nuestros servicios para el lavado de sus vehiculos.
                    </p>
                </div>

                {/*Contenedor Botones */}
                
                <div className='flex flex-col md:flex-row gap-6 mt-8'>
                    <Link to="/servicios" className='px-4 md:px-8 py-4 inline-flex rounded-full bg-sky-600 text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-sky-600/90'>
                        Ver Nuestros Servicios
                    </Link>
                    <Link to="/faqs" className='rounded-full border-2 border-white px-4 md:px-8 py-4 text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105'>
                        Ver FAQs
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FoundSection