import FaqItems from '@/components/FaqItems'
import { Accordion } from '@/components/ui/accordion'
import React from 'react'

const FAQs = () => {
  return (
    <section className='w-full py-12 md:py-32'>
      <div className='container px-4 md:px-6 mx-auto'>
        <div className='flex flex-col items-center justify-center text-center space-y-4 mb-12'>
          <div className='space-y-2'>
            <h1 className='text-3xl font-bold tracking-tighter md:text-5xl text-foreground mb-8'>
              Preguntas Frecuentes de nuestra Comunidad
            </h1>
            <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed'>
              Encontraras las preguntas más comunes acerca de nuestro servicio de autolavado. Si tienes alguna otra consulta, contactanos mediante Whatsapp!
            </p>
          </div>
        </div>
      </div>

      <div className='mx-auto max-w-4xl'>
        <Accordion type="single" collapsible>
          <FaqItems />
        </Accordion>
      </div>
    </section>
  )
}

export default FAQs