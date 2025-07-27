import React from 'react'
import { SparkleIcon, HeartIcon, ShieldCheckIcon, LeafIcon } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const ValueSection = () => {

    const values = [
        { titulo: "Excelencia", descripcion: "Nos compremetos a brindar servicios de la más alta calidad", gradiente: "from-sky-600 to-blue-600", icono: SparkleIcon },
        { titulo: "Pasion", descripcion: "Amamos lo que hacemos, se refleja siempre en nuestro trabajo", gradiente: "from-red-600 to-red-700",   icono: HeartIcon },
        { titulo: "Confianza", descripcion: "Tu vehiculo siempre quedara impecable al lado de nuestro equipo", gradiente: "from-sky-600 to-sky-700", icono: ShieldCheckIcon },
        { titulo: "Sostenibilidad", descripcion: "Cuidamos al medio ambiente con productos ecologicos",  gradiente: "from-green-600 to-green-700", icono: LeafIcon }
    ]

    return (
        <section className='py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 text-white'>

            {/*Contenedor Value */}
            <div className='container mx-auto px-4 md:px-6'>
                
                {/* Titulo - ValueSection */}
                <div className='flex flex-col items-center justify-center space-y-6 text-center mb-16'>

                    <Badge className='bg-sky-500/20 text-primary-foreground border-sky-500/30 px-4 py-2'>
                        Nuestros Servicios
                    </Badge>
                    <h2 className='text-4xl md:text-5xl font-bold tracking-tight'>
                        Lo que nos{" "}
                        <span className='bg-gradient-to-r from-sky-600 to-blue-400 bg-clip-text text-transparent'>Define</span>
                    </h2>
                    <p className='text-gray-300 text-xl leading-relaxed'>Estos valores siempre nos guiaran a quienes somos y que ofrecemos.</p>
                </div>


                {/*Contenedor Columas ValueSection */}

                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    
                    {values.map((value, i) => (
                        <Card key={i} className='bg-white/5  border-white/10 text-white hover:bg-white/10 transition-transform duration-300 group hover:scale-105'>
                            <CardHeader className='text-center pb-4'>
                                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${value.gradiente} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    <value.icono className='h-8 w-8 text-white'/>
                                </div>
                                <CardTitle className='text-xl font-bold'>{value.titulo}</CardTitle>
                                <CardContent>
                                    <CardDescription className='text-gray-300'>{value.descripcion}</CardDescription>
                                </CardContent>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ValueSection