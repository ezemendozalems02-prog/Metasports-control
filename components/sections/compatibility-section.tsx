"use client"

import { motion } from "framer-motion"
import { CalendarCheck, LandPlot, CreditCard, Wallet, Users, Boxes, Trophy, BarChart3 } from "lucide-react"

const modules = [
  { label: "Reservas", icon: CalendarCheck, description: "Calendario inteligente y disponibilidad en tiempo real." },
  { label: "Canchas", icon: LandPlot, description: "Configurá fútbol, pádel y cualquier otro espacio deportivo." },
  { label: "Cobros", icon: CreditCard, description: "Gestioná señas, saldos y pagos desde un solo lugar." },
  { label: "Caja", icon: Wallet, description: "Controlá ingresos, egresos y movimientos diarios." },
  { label: "Clientes", icon: Users, description: "Construí una base de datos de todos tus jugadores." },
  { label: "Inventario", icon: Boxes, description: "Gestioná bebidas, comida, accesorios y productos." },
  { label: "Torneos", icon: Trophy, description: "Creá torneos, equipos, partidos, resultados y rankings." },
  { label: "Métricas", icon: BarChart3, description: "Entendé exactamente cómo está funcionando tu negocio." },
]

export function CompatibilitySection() {
  return (
    <section id="funciones" className="px-4 sm:px-6 py-16 sm:py-24 relative noise-bg overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-xs sm:text-sm font-medium text-[#9BA0A8] uppercase tracking-wider mb-4">La solución</p>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Todo el negocio. Una sola plataforma.
          </h2>
          <p className="text-[#9BA0A8] max-w-2xl mx-auto text-balance text-sm sm:text-base">
            Más control. Menos caos. Cada módulo de tu complejo, conectado en un mismo sistema.
          </p>
        </motion.div>

        {/* Modules grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {modules.map((mod, i) => {
            const Icon = mod.icon
            return (
              <motion.div
                key={mod.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group flex flex-col gap-3 sm:gap-4 px-4 sm:px-5 py-4 sm:py-5 glass-card rounded-2xl border border-white/[0.08] card-lift cursor-default hover:border-[rgba(34,197,94,0.35)] transition-colors"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:border-[rgba(34,197,94,0.4)] group-hover:bg-green-500/10 transition-colors">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#9BA0A8] group-hover:text-green-400 transition-colors" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-white mb-1">{mod.label}</p>
                  <p className="text-[11px] sm:text-xs text-[#6b6f76] leading-snug">{mod.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom tag line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-xs sm:text-sm text-[#6b6f76] mt-8 sm:mt-10"
        >
          Todas tus reservas. Todos tus cobros. Todas tus métricas. <span className="text-[#9BA0A8]">En un solo lugar.</span>
        </motion.p>
      </div>
    </section>
  )
}
