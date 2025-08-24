import FaqItems from '@/components/FaqItems'
import { Accordion } from '@/components/ui/accordion'
import React from 'react'

const FAQs = () => {

  const numero = import.meta.env.VITE_PHONE
  const mensaje = "Hola, quiero más información sobre los servicios."
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`

  return (
    <section className='w-full py-12 md:py-32'>
      <div className='container px-4 md:px-6 mx-auto'>
        <div className='flex flex-col items-center justify-center text-center space-y-4 mb-12'>
          <div className='space-y-2'>
            <h1 className='text-3xl font-bold tracking-tighter md:text-5xl text-foreground mb-8' data-aos="fade-up">
              Preguntas Frecuentes de nuestra Comunidad
            </h1>
            <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed' data-aos="fade-up" data-aos-delay="150">
              Encontraras las preguntas más comunes acerca de nuestro servicio de autolavado. Si tienes alguna otra consulta, contactanos mediante Whatsapp!
            </p>

            {/* Boton Whatsapp */}
            <div data-aos="fade-up" data-aos-delay="150">

              <a href={url} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 mt-6 text-white font-semibold bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6 mr-2">

                  <path d="M20.52 3.48A11.77 11.77 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.55 4.15 1.6 5.95L0 24l6.22-1.63A11.92 11.92 0 0012 24c6.63 0 12-5.37 12-12 0-3.17-1.23-6.17-3.48-8.52zM12 21.82c-2.07 0-4.1-.55-5.88-1.6l-.42-.25-3.68.96.98-3.58-.26-.43A9.8 9.8 0 012.18 12c0-5.42 4.4-9.82 9.82-9.82 2.63 0 5.1 1.02 6.96 2.88A9.79 9.79 0 0121.82 12c0 5.42-4.4 9.82-9.82 9.82zm5.66-7.48c-.31-.16-1.84-.91-2.13-1.02-.29-.11-.5-.16-.71.16-.21.31-.82 1.02-1.01 1.23-.19.21-.37.23-.68.08-.31-.16-1.31-.48-2.5-1.52-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.72-.97-2.36-.25-.6-.5-.51-.71-.52h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63 0 1.55 1.12 3.05 1.28 3.26.16.21 2.19 3.35 5.32 4.7.74.32 1.31.51 1.76.65.74.24 1.41.21 1.94.13.59-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.37z" />
                
                </svg>
                Chatear en WhatsApp
              </a>
              
            </div>
          </div>
        </div>
      </div>

      <div className='mx-auto max-w-4xl px-4'>
        <Accordion type="single" collapsible>
          <FaqItems />
        </Accordion>
      </div>
    </section>
  )
}

export default FAQs