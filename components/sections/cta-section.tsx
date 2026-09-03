"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { LiquidCtaButton } from "@/components/buttons/liquid-cta-button"

export function CtaSection() {
  return (
    <section id="cta-final" className="px-4 sm:px-6 py-16 sm:py-24 relative overflow-hidden noise-bg">
      <div className="metallic-separator absolute top-0 left-0 right-0" />

      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] sm:w-[600px] h-[250px] sm:h-[400px] bg-[radial-gradient(ellipse,rgba(34,197,94,0.08),transparent_70%)]" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-[10%] w-16 h-32 border border-white/[0.02] rounded-2xl rotate-12 hidden sm:block" />
        <div className="absolute bottom-10 right-[15%] w-20 h-40 border border-white/[0.02] rounded-2xl -rotate-6 hidden sm:block" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center relative z-10 px-2"
      >
        <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
          Tu complejo merece algo mejor que una planilla.
        </h2>
        <p className="text-sm sm:text-lg text-[#9BA0A8] mb-8 sm:mb-10 text-balance">
          Pasá a una gestión deportiva inteligente.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link href="#pricing" className="w-full sm:w-auto">
            <div className="w-full sm:w-auto">
              <LiquidCtaButton>Empezar ahora</LiquidCtaButton>
            </div>
          </Link>
          <Link
            href="#pricing"
            className="group flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-medium text-[#9BA0A8] hover:text-white transition-colors w-full sm:w-auto"
          >
            <span>Solicitar una demo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
        <p className="mt-6 text-xs sm:text-sm text-green-400 font-medium">
          7 días de prueba gratis · Sin tarjeta de crédito
        </p>
        <p className="mt-3 text-xs sm:text-sm text-[#4a4d52] tracking-wide">
          Reservas · Cobros · Caja · Clientes · Torneos · Métricas
        </p>
      </motion.div>
    </section>
  )
}
