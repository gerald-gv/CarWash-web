import AboutSection from '@/components/nosotros/AboutSection'
import EquipSection from '@/components/nosotros/EquipSection'
import FoundSection from '@/components/nosotros/FoundSection'
import MissionSection from '@/components/nosotros/MissionSection'
import StatsSection from '@/components/nosotros/StatsSection'
import ValueSection from '@/components/nosotros/ValueSection'
import React from 'react'

const Nosotros = () => {
  return (
    <>
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-800 text-white">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Conoce a{" "}
              <span className="bg-gradient-to-r from-sky-600 to-blue-400 bg-clip-text text-transparent">
                CarWash Pro
              </span>
            </h1>
            <p className="max-w-4xl text-xl md:text-2xl text-gray-300 leading-relaxed">
              Más de dos años dedicados a hacer brillar tu vehículo con la mejor calidad y servicio personalizado.
            </p>
          </div>
        </div>
      </section>
      <StatsSection />
      <AboutSection />
      <ValueSection />
      <EquipSection />
      <MissionSection />
      <FoundSection />
    </>
  )
}

export default Nosotros