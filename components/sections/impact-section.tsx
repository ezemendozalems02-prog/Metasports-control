"use client"

import { motion } from "framer-motion"

const clients = ["SPORT ARENA", "PADEL ONE", "GREEN COURT", "URBAN FC", "CLUB 360", "ARENA SPORTS"]

export function ImpactSection() {
  return (
    <section className="px-4 sm:px-6 py-14 sm:py-20 relative noise-bg overflow-hidden">
      <div className="metallic-separator absolute top-0 left-0 right-0" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs sm:text-sm font-medium text-[#6b6f76] uppercase tracking-wider mb-8 sm:mb-10"
        >
          Ya están digitalizando la gestión de sus complejos
        </motion.p>

        {/* Infinite marquee */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max gap-12 sm:gap-20 animate-marquee">
            {[...clients, ...clients].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="text-lg sm:text-2xl font-bold tracking-tight text-white/25 whitespace-nowrap shrink-0 select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-xs sm:text-sm text-[#6b6f76] mt-10 sm:mt-12"
        >
          Una plataforma pensada para negocios deportivos que quieren crecer.
        </motion.p>
        <p className="text-center text-[10px] text-[#4a4d52] mt-2">
          Marcas ilustrativas a modo de ejemplo.
        </p>
      </div>

      <div className="metallic-separator absolute bottom-0 left-0 right-0" />
    </section>
  )
}
