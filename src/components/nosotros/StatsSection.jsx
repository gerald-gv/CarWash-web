import React from 'react'
import { TrendingUpIcon, HeartIcon, SparkleIcon, StarIcon } from 'lucide-react'

const StatsSection = () => {

    const cardStats =[
        { numero: "2+",      label: "Años de Experiencia",      icono: TrendingUpIcon},
        { numero: "8000+",   label: "Clientes Sastifechos",     icono: HeartIcon},
        { numero: "12000+",  label: "Vehiculos Lavados",        icono: SparkleIcon},
        { numero: "98%",     label: "Satisfaccion del Cliente", icono: StarIcon},
    ]


  return (
    <section className='py-16 md:py-20 bg-gradient-to-r from-gray-200 via-slate-200 to-gray-200'>
        <div className='px-4 md:px-6'>

            {/*Mini Cards de Stats*/}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
                {cardStats.map((stats, i) => (
                    <div key={i} className='flex flex-col items-center text-center group '>

                        {/*Icono Stats*/}

                        <div className='mb-4 p-4 rounded-xl shadow-sm group-hover:shadow-lg transition-all duration-300 group-hover:scale-105 border-2 border-sky-500 bg-white'>
                            <stats.icono className="h-8 w-8 text-sky-500" />
                        </div>

                        {/*Numero Stats*/}

                        <div className='text-3xl md:text-4xl font-bold text-gray-800 mb-2'>
                            {stats.numero}
                        </div>

                        {/*Label Stats*/}

                        <div className='text-sm md:text-base text-gray-600 font-medium mb-2'>
                            {stats.label}
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default StatsSection