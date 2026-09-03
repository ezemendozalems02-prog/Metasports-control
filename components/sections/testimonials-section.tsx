"use client"

import { motion } from "framer-motion"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

const testimonials = [
  {
    text: "Antes teníamos reservas por WhatsApp, planillas y mensajes por todos lados. Ahora vemos todo desde un solo lugar.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    name: "Laura Méndez",
    role: "Dueña de complejo deportivo",
  },
  {
    text: "Configuramos la seña con Mercado Pago y dejamos de perder horarios por reservas que nunca se confirmaban.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Rodrigo Fernández",
    role: "Dueño de club de pádel",
  },
  {
    text: "El módulo de caja cambió todo. Ahora sé exactamente cuánto facturamos por cancha, por bar y por torneos.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Valentina Torres",
    role: "Administradora de complejo deportivo",
  },
  {
    text: "Mis clientes reservan solos desde el celular y yo controlo toda la agenda de las canchas en tiempo real.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Martín Gómez",
    role: "Encargado de complejo de fútbol 5",
  },
  {
    text: "Las métricas me ayudan a entender qué horarios están vacíos y armar promociones para llenarlos.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Camila Ríos",
    role: "Dueña de club de pádel",
  },
  {
    text: "Tengo dos sedes y puedo ver la ocupación de ambas desde el mismo panel. Antes era imposible saberlo.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Sebastián Vargas",
    role: "Propietario de cadena de complejos",
  },
  {
    text: "La gestión de clientes es excelente. Veo el historial de cada jugador y quién no vuelve hace tiempo.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    name: "Florencia Navarro",
    role: "Administradora de complejo deportivo",
  },
  {
    text: "Organizamos nuestro primer torneo de pádel sin una sola planilla. Inscripciones, cuadros y resultados, todo en el sistema.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "Diego Herrera",
    role: "Dueño de club deportivo",
  },
  {
    text: "El control de inventario del bar nos ahorra muchísimo tiempo al cierre. Sabemos exactamente qué reponer.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Paula Castillo",
    role: "Encargada de caja y bar",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const logos = ["SPORT ARENA", "PADEL ONE", "GREEN COURT", "URBAN FC", "CLUB 360", "ARENA SPORTS"]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-4 sm:px-6 py-16 sm:py-24 relative noise-bg overflow-hidden">
      <div className="metallic-separator absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto mb-12 px-2"
        >
          <div className="border border-white/[0.08] py-1.5 px-4 rounded-full text-xs sm:text-sm text-[#9BA0A8] glass-card">
            Testimonios
          </div>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white mt-6 text-center tracking-tight">
            Lo que cambia cuando dejás de administrar manualmente.
          </h2>
          <p className="text-center mt-4 text-[#9BA0A8] text-sm sm:text-lg text-balance px-2">
            Dueños y administradores de complejos que ordenaron la gestión de su negocio.
          </p>
          <p className="text-center mt-2 text-[10px] sm:text-xs text-[#4a4d52]">
            Testimonios ilustrativos a modo de ejemplo.
          </p>
        </motion.div>

        <div className="hidden md:flex justify-center gap-4 lg:gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} duration={17} />
        </div>

        <div className="md:hidden flex justify-center [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[600px] overflow-hidden">
          <TestimonialsColumn testimonials={testimonials} duration={25} />
        </div>

        <div className="mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-white/[0.08]">
          <p className="text-center text-xs sm:text-sm text-[#9BA0A8] mb-8">Pensado para negocios deportivos de todo tipo</p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              className="flex gap-8 sm:gap-12 md:gap-16"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ x: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" } }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <span
                  key={`${logo}-${index}`}
                  className="text-base sm:text-lg md:text-xl font-semibold text-white/20 whitespace-nowrap flex-shrink-0"
                >
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
