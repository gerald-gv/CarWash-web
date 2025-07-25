import React from 'react'
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"


const FaqItems = () => {
  return (
    <>
      {/* ¿Qué tipos de servicios de lavado ofrecen? */}

      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg font-medium text-foreground hover:text-sky-600">
          ¿Qué tipos de servicios de lavado ofrecen?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          Actuimente contamos con la disponibilidad de 3 serviocios diferentes, entre ellos tenemos lavados basicos, lavados ejecutivos hasta lavados premium, donde cada
          servicio te ofrecera un lavado perfecto para tu vehiculo. Puedes ver todos nuestros servicios en la sección "Servicios".
        </AccordionContent>
      </AccordionItem>

      {/* ¿Cuánto tiempo toma un servicio de autolavado? */}

      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg font-medium text-foreground hover:text-sky-600">
          ¿Cuánto tiempo toma un servicio de autolavado?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          El tiempo va a varirar segun el tipo de servicio que elija. El servicio basico puede durar entre 10-15 minutos, el servicio Ejecutivo
          puede durar alrededor de 20-25 minutos y el servicio Premiunm entre 35-45 minutos.
        </AccordionContent>
      </AccordionItem>

      {/* ¿Qué productos utilizan para el lavado? */}

      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg font-medium text-foreground hover:text-sky-600">
          ¿Qué productos utilizan para el lavado?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          Utilizamos productos de alta calidad como shampoo automotriz, silicona Sonax, cera a color, desengrasante y aromatizantes,
          todos seguros para la pintura y acabados del vehículo.
        </AccordionContent>
      </AccordionItem>

      {/* ¿Necesito hacer una reserva previa? */}

      <AccordionItem value="item-4">
        <AccordionTrigger className="text-lg font-medium text-foreground hover:text-sky-600">
          ¿Necesito hacer una reserva previa?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          Para nuestros servicios de autolavado basico no se requiere una reserva, pero para otros servicios como a nivel Ejecutivo o Premium, si se requiere
          una reserva con antelación para que asi evite las horas donde haya más clientes a nuestra disposición.
        </AccordionContent>
      </AccordionItem>

    </>
  )
}

export default FaqItems