import React from 'react'

const WhatsappButton = () => {

    const numero = import.meta.env.VITE_PHONE;
    const mensaje = "Hola, quiero más informacion de los servicios."
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`


    return (
        <div className='fixed bottom-6 right-6 z-50 flex items-center gap-3'>

            {/* Mensaje flotante */}
            <div className="relative hidden sm:flex items-center">
                <div className="bg-white text-gray-700 px-3 py-2 rounded-xl shadow-md text-sm font-medium">
                    ¿Tienes dudas? <span className="text-green-600 font-semibold">¡Escríbenos!</span>
                </div>
                {/* Triángulo apuntando al botón */}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
            </div>

            <a href={url} rel="noopener noreferrer" target='_blank'>
                <div className='relative w-14 h-14'>

                    {/* Efecto radar */}
                    <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping" style={{ animationDuration: "2.5s" }}></span>
                    <span className="absolute inset-0 rounded-full bg-green-500 opacity-50 animate-ping" style={{ animationDuration: "2.5s", animationDelay: "1.25s" }}></span>


                    {/* Botón principal */}
                    <div className='relative w-14 h-14 rounded-full grid place-items-center bg-green-500 shadow-[0_0_20px_8px_rgba(34,197,94,0.7)] hover:scale-125 hover:bg-green-700 transition-all duration-300'>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-7 h-7">
                        
                            <path d="M20.52 3.48A11.77 11.77 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.55 4.15 1.6 5.95L0 24l6.22-1.63A11.92 11.92 0 0012 24c6.63 0 12-5.37 12-12 0-3.17-1.23-6.17-3.48-8.52zM12 21.82c-2.07 0-4.1-.55-5.88-1.6l-.42-.25-3.68.96.98-3.58-.26-.43A9.8 9.8 0 012.18 12c0-5.42 4.4-9.82 9.82-9.82 2.63 0 5.1 1.02 6.96 2.88A9.79 9.79 0 0121.82 12c0 5.42-4.4 9.82-9.82 9.82zm5.66-7.48c-.31-.16-1.84-.91-2.13-1.02-.29-.11-.5-.16-.71.16-.21.31-.82 1.02-1.01 1.23-.19.21-.37.23-.68.08-.31-.16-1.31-.48-2.5-1.52-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.72-.97-2.36-.25-.6-.5-.51-.71-.52h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63 0 1.55 1.12 3.05 1.28 3.26.16.21 2.19 3.35 5.32 4.7.74.32 1.31.51 1.76.65.74.24 1.41.21 1.94.13.59-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.37z" />
                        
                        </svg>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default WhatsappButton