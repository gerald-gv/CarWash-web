import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { SparkleIcon, ZapIcon, ShieldCheckIcon } from 'lucide-react'


const EquipSection = () => {

    const equipment = [
        {
            icono: SparkleIcon, color: "from-sky-600 to-blue-600", titulo: "Sistema de Lavado a Presión", label: "Lavado Exterior", especificacion: "Alta presión - Profesional",
            descripcion: "Equipo de Lavado con shampoo especializado y sistemas de enjuages de alta presión para un lavado impecable"
        },

        {
            icono: ZapIcon, color: "from-yellow-400 to-yellow-500", titulo: "Aspiradoras Industriales", label: "Limpieza Interior", especificacion: "Succión Profesional",
            descripcion: "Aspiradoras de alta potencia para limpieza interior completa, incluyendo asientos, alfombras y maleta."
        },

        {
            icono: ShieldCheckIcon, color: "from-sky-600 to-sky-700", titulo: "Compresor de Aire y Desengrasante", label: "Motor y Secado", especificacion: "Secado a presión",
            descripcion: "Sistema de secado a presión de aire y equipos especializados para lavado de motor con desengrasante."
        }
    ]


    return (
        <section className='py-16 md:py-24 lg:py-32 bg-gradient-to-br from-white via-slate-100 to-gray-100'>

            {/*Contenedor EquipSection */}

            <div className='container mx-auto px-4 md:px-6'>

                {/*Titulo EquipSection */}

                <div className='flex flex-col items-center space-y-6 text-center mb-16'>
                    <Badge className='bg-gradient-to-r from-slate-600 to-gray-700 text-white px-4 py-2' data-aos="zoom-in">
                        Tecnologias y Equipos
                    </Badge>
                    <h2 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900' data-aos="fade-up">
                        Equipamiento Especializado para cada Servicio
                    </h2>
                    <p className='max-w-4xl text-gray-700 text-xl lg:text-2xl  leading-relaxed' data-aos="fade-up" data-aos-delay="150">
                        Contamos con una gran cantidad de herramientas profesionales para cada nivel de Servicio. desde el
                        basico hasta el premium.
                    </p>
                </div>


                {/*Contenedor Columas Cards EquipSection */}

                <div className='grid md:grid-cols-3 gap-6 lg:gap-8 xl:gap-12'>
                    {equipment.map((equipo, i) => (
                        <div data-aos="zoom-in" data-aos-delay={i * 150}>
                            <Card key={i} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 border-0">
                                <CardHeader className="text-center ">
                                    <div className={`mx-auto mb-6 bg-gradient-to-r ${equipo.color} w-24 h-24 xl:w-28 xl:h-28 rounded-xl flex items-center justify-center
                                group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <equipo.icono className='h-12 w-12 xl:h-14 xl:w-14 text-white' />
                                    </div>
                                    <CardTitle className="text-xl lg:text-2xl font-bold text-gray-800">{equipo.titulo}</CardTitle>
                                    <p className='text-sky-600 font-semibold text-base'>{equipo.label}</p>
                                </CardHeader>
                                <CardContent className="text-center space-y-4 pb-4">
                                    <Badge variant="secondary" className="bg-gray-200 text-gray-700">
                                        {equipo.especificacion}
                                    </Badge>
                                    <CardDescription className="text-gray-600 leading-relaxed md:text-base">{equipo.descripcion}</CardDescription>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EquipSection