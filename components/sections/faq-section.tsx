"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "¿Necesito instalar algo?",
    a: "No. MetaSports Control funciona 100% desde la nube, accedés desde cualquier navegador en celular o computadora.",
  },
  {
    q: "¿Puedo usarlo para fútbol y pádel?",
    a: "Sí. Podés configurar fútbol, pádel y cualquier otro deporte con reservas dentro del mismo complejo.",
  },
  {
    q: "¿Puedo tener varias canchas?",
    a: "Sí, configurás todas las canchas que necesites, cada una con sus propios horarios y precios.",
  },
  {
    q: "¿Los clientes pueden reservar solos?",
    a: "Sí. Tus clientes eligen deporte, cancha y horario, y reservan online las 24 horas.",
  },
  {
    q: "¿Puedo cobrar señas?",
    a: "Sí, configurás el porcentaje de seña que querés cobrar por reserva.",
  },
  {
    q: "¿Puedo conectar Mercado Pago?",
    a: "Sí, tus clientes pueden pagar la seña o el total de la reserva directamente con Mercado Pago.",
  },
  {
    q: "¿Puedo vender bebidas y comida?",
    a: "Sí, con el módulo de caja y POS podés vender cualquier producto y el stock se actualiza automáticamente.",
  },
  {
    q: "¿Puedo organizar torneos?",
    a: "Sí, podés crear torneos, equipos, cuadros de competición y resultados sin usar planillas.",
  },
  {
    q: "¿Puedo administrar empleados?",
    a: "Sí, podés crear usuarios con distintos roles y permisos según lo que cada persona necesita ver u operar.",
  },
  {
    q: "¿Puedo tener varias sedes?",
    a: "Sí, el plan Business incluye gestión multi-sede desde un solo panel general.",
  },
  {
    q: "¿Puedo cambiar de plan?",
    a: "Sí, podés subir o bajar de plan cuando lo necesites, sin complicaciones.",
  },
  {
    q: "¿Puedo cancelar cuando quiera?",
    a: "Sí, no hay permanencia mínima. Podés cancelar tu suscripción cuando lo desees.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="px-4 sm:px-6 py-16 sm:py-24 relative noise-bg overflow-hidden">
      <div className="metallic-separator absolute top-0 left-0 right-0" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-xs sm:text-sm font-medium text-[#9BA0A8] uppercase tracking-wider mb-4">Preguntas frecuentes</p>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Todo lo que necesitás saber.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card rounded-2xl border border-white/[0.08] px-4 sm:px-6"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`} className="border-white/[0.08]">
                <AccordionTrigger className="text-sm sm:text-base text-white hover:no-underline [&[data-state=open]>svg]:text-green-400">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-[#9BA0A8] leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
