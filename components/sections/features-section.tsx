"use client"

import { motion } from "framer-motion"
import { MessageCircle, FileSpreadsheet, HandCoins, CalendarClock, TrendingDown, PackageX, UserX, Trophy } from "lucide-react"

const problems = [
  { icon: MessageCircle, label: "Reservas por WhatsApp" },
  { icon: FileSpreadsheet, label: "Planillas interminables" },
  { icon: HandCoins, label: "Cobros manuales" },
  { icon: CalendarClock, label: "Horarios que se pisan" },
  { icon: TrendingDown, label: "No saber cuánto facturaste realmente" },
  { icon: PackageX, label: "No controlar el stock" },
  { icon: UserX, label: "Clientes que no vuelven" },
  { icon: Trophy, label: "Torneos gestionados manualmente" },
]

export function FeaturesSection() {
  return (
    <section id="problema" className="px-4 sm:px-6 py-16 sm:py-24 relative noise-bg overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-xs sm:text-sm font-medium text-[#9BA0A8] uppercase tracking-wider mb-4">El problema</p>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Tu complejo creció. Tu forma de administrarlo no.
          </h2>
          <p className="text-[#9BA0A8] max-w-xl mx-auto text-balance text-sm sm:text-base px-2">
            Cuando todo depende de mensajes, planillas y anotaciones, administrar un complejo se vuelve más difícil de lo necesario.
          </p>
        </motion.div>

        {/* Pain points grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {problems.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex flex-col items-start gap-3 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
              >
                <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/15 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-red-400/80" />
                </div>
                <p className="text-xs sm:text-sm text-[#9BA0A8] leading-snug">{p.label}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Transition */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-2 mt-12 sm:mt-16"
        >
          <div className="w-px h-10 bg-gradient-to-b from-white/10 to-green-500/40" />
          <p className="text-xs sm:text-sm text-green-400 font-medium">Así se ve cuando todo está ordenado ↓</p>
        </motion.div>
      </div>
    </section>
  )
}
