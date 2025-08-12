import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { AwardIcon, StarIcon } from 'lucide-react'

const MissionSection = () => {
    return (
        <section className='py-16 md:py-24 lg:py-32 bg-gradient-to-r from-sky-600 via-blue-600 to-slate-700 text-white'>
            <div className='container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16'>

                {/*Contenedor - Titulo */}
                <div className='text-center mb-16'>
                    <Badge className="bg-white/20 border-white/30 px-4 py-2 mb-6" data-aos="zoom-in">
                        Misión y Visión
                    </Badge>
                    <h2 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight' data-aos="fade-up">
                        Nuestro{" "}
                        <span className='bg-gradient-to-r from-white/80 to-gray-300 bg-clip-text text-transparent'>Compromiso</span>
                    </h2>
                </div>

                {/*Contenedor Cards */}
                <div className='grid gap-8 md:grid-cols-2 md:gap-10 lg:gap-12'>

                    {/*Card Mision */}
                    <div data-aos="zoom-in" data-aos-delay="0">
                        <Card className="bg-white/10 border-white/20 text-white hover:bg-white/15 transition-all duration-300 group h-full" >
                            <CardHeader>
                                <div className='flex items-center gap-6 mb-6'>
                                    <div className='p-3 bg-gradient-to-r from-white/20 to-white/30 rounded-xl group-hover:scale-110 transition-transform duration-300'>
                                        <AwardIcon className='h-8 w-8 lg:h-10 lg:w-10' />
                                    </div>
                                    <CardTitle className="text-2xl font-bold">Nuestra Misión</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-lg lg:text-xl text-white/90 leading-relaxed">
                                    Brindar servicios de calidad superior de autolavado, adaptandose a cualquier necesidad para el cliente, contando asi con 3 servicios esenciales
                                    para ellos, utlizando productos como Sonax y tecnicas especializadas que garantizan la satisfaccion del cliente y ademas de un buen cuidado del
                                    vehiculo.
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>

                    {/*Card Vision*/}

                    <div data-aos="zoom-in" data-aos-delay="150">
                        <Card className="bg-white/10 border-white/20 text-white hover:bg-white/15 transition-all duration-300 group h-full" >
                            <CardHeader>
                                <div className='flex items-center gap-6 mb-6'>
                                    <div className='p-3 bg-gradient-to-r from-white/20 to-white/30 rounded-xl group-hover:scale-110 transition-transform duration-300'>
                                        <StarIcon className='h-8 w-8 lg:h-10 lg:w-10' />
                                    </div>
                                    <CardTitle className="text-2xl font-bold">Nuestra Visión</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-lg lg:text-xl text-white/90 leading-relaxed">
                                    Consolidarnos como el autolavado de referencia para nuestra comunidad, ademas de ser reconocidos por la calidad de nuestros servicios,
                                    la comodidad de nuestros precios y la confianza que generamos en cada cliente que nos elige para el cuidado de su vehiculo.
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default MissionSection