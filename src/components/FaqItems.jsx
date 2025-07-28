import React from 'react'
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"


const FaqItems = () => {
  const questions = [
    { id: "item-1", pregunta: "¿Qué tipos de servicios de lavado ofrecen?",
      respuesta: "Actualmente contamos con la disponibilidad de 3 servicios diferentes, entre ellos tenemos lavados basicos, lavados ejecutivos hasta lavados premium, donde cada servicio te ofrecera un lavado perfecto para tu vehiculo. Puedes ver todos nuestros servicios en la sección 'Servicios'.",
    },
    { id: "item-2", pregunta: "¿Cuánto tiempo toma un servicio de autolavado?",
      respuesta: "El tiempo va a variar segun el tipo de servicio que elija. El servicio basico puede durar entre 10-15 minutos, el servicio Ejecutivo puede durar alrededor de 20-25 minutos y el servicio Premium entre 35-45 minutos.",
    },
    { id: "item-3", pregunta: "¿Qué productos utilizan para el lavado?",
      respuesta: "Utilizamos productos de alta calidad como shampoo automotriz, silicona Sonax, cera a color, desengrasante y aromatizantes, todos seguros para la pintura y acabados del vehículo.",
    },
    { id: "item-4", pregunta: "¿Necesito hacer una reserva previa?",
      respuesta: "Para nuestros servicios de autolavado basico no se requiere una reserva pero si puede realizar, pero para otros servicios como a nivel Ejecutivo o Premium, si se requiere una reserva con antelación para que asi evite las horas donde haya más clientes a nuestra disposición.",
    }
  ];

  return (
    <>
      {questions.map((item, i) => (
        <AccordionItem value={item.id} key={item.id} data-aos="fade-up" data-aos-delay={i * 150}>
          <AccordionTrigger className="text-base md:text-lg font-medium text-foreground hover:text-sky-600 cursor-pointer">
            {item.pregunta}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {item.respuesta}
          </AccordionContent>
        </AccordionItem>
      ))}
    </>
  );
};

export default FaqItems;