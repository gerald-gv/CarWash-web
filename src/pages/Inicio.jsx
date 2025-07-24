import React from 'react'
import Navbar from '../components/Navbar'
import HeroSlider from '../components/HeroSlider'
import Card from '../components/CardInicio'
const Inicio = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <HeroSlider />
      <Card />
    </div>
  )
}

export default Inicio