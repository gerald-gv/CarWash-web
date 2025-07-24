import React from 'react'
import Navbar from '@/components/Navbar'
import CardService from '@/components/CardService'
import img4 from '/images/imagen4.jpg'
import img5 from '/images/imagen5.jpg'
import img6 from '/images/imagen6.jpg'
import '@/styles/Servicios.css'
const Servicios = () => {
  const cardsData = [
    { id: 1, title: "Basico", precio: 20, img:img4,
      items:["Lavado exterior con shampoo", "Secado con Ante (Sonax)",
            "Silicona a guardafango y plásticos",
            "Limpieza de pisos", "Limpieza de lunas"]},
    { id: 2, title: "Ejecutivo", precio: 30, img:img5,
      items:["*Servicio Basico*", "Aplicación de silicona a tablero y viniles",
            "Aplicacion de silicona de neumaticos", "Aspirado interior y de maleta",
            "Aplicacion de cera a color Sonax"]},
    { id: 3, title: "Premium", precio: 40, img:img6,
      items:["*Servicio Ejecutivo*", "Lavado de motor con desengrasante",
            "Secado a presión de aire", "Aromatizado"]}
  ];
  return (
    <div>
      <Navbar />
      <main className='main-section'>
        <section className='main-services'>
          {cardsData.map((card, index) => (
            <CardService key={index} 
                        titulo={card.title}
                        precio={card.precio}
                        id={card.id}
                        img={card.img}
                        items={card.items}/>
          ))}
        </section>
      </main>
    </div>
  )
}

export default Servicios