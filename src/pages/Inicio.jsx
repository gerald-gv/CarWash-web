import React from 'react'
import Navbar from '../components/Navbar'
import HeroSlider from '../components/HeroSlider'
const Inicio = () => {
  return (
    <div className='min-h-screen flex flex-col'> 
      <Navbar />
      <HeroSlider />
    </div>
  )
}

export default Inicio