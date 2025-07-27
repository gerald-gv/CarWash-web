import React from 'react'
import { Badge } from '@/components/ui/badge'

const AboutSection = () => {
    return (
        <section className='py-16 md:py-24 lg:py-32 bg-gradient-to-br from-white via-slate-100 to-gray-100'>
            <div className='container mx-auto px-4 md:px-6'>

                {/*Contenedor Columas About - Imagen */}
                <div className='grid gap-12 lg:grid-cols-2 lg:gap-10 items-center'>

                    {/*Columna Quienes Somos*/}

                    <div className='space-y-8'>
                        <div className='space-y-4'>
                            <Badge className='bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4 py-2 text-sm font-semibold'>
                                ¿Quienes Somos?
                            </Badge>
                            <h2 className='text-4xl md:text-5xl font-bold tracking-tight text-gray-900'>
                                Nuestra Historia..
                            </h2>
                        </div>
                        <div className='space-y-6 text-gray-700 text-lg leading-relaxed'>
                            <p className='border-l-4 border-sky-500 pl-6 bg-white/80 p-4 rounded-r-lg shadow-sm'>
                                CarWash Pro comenzo con un emprendimiento familiar, con vision de ofrecer servicios autolavados eficientes
                                y que hiciera la diferencia a nuestra comunidad.
                            </p>
                            <p className='border-l-4 border-emerald-400 pl-6 bg-white/80 p-4 rounded-r-lg shadow-sm'>
                                Nos especializamos en tres niveles de servicios: Basico, Ejecutivo y Premium.
                                Utilizando productos de calidad como Sonax y tecnicas que garantizan un autolavado eficiente.
                            </p>
                            <p className='border-l-4 border-sky-500 pl-6 bg-white/80 p-4 rounded-r-lg shadow-sm'>
                                Actualmente somos reconocidos por nuestra excelente atencion al cliente a un buen nivel de detalle,
                                desde lavados exterieros y manteniendo impecable el vehiculo.
                            </p>
                        </div>
                    </div>

                    {/*Columna Imagen */}
                    
                    <div className='relative'>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection