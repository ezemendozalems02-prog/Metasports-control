"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calculator } from "lucide-react"

function formatCurrency(n: number) {
  return `$${Math.round(n).toLocaleString("es-AR")}`
}

export function RoiCalculatorSection() {
  const [canchas, setCanchas] = useState(6)
  const [reservasPorDia, setReservasPorDia] = useState(30)
  const [ticket, setTicket] = useState(20000)

  const facturacionMensual = reservasPorDia * ticket * 30

  return (
    <section className="px-4 sm:px-6 py-16 sm:py-24 relative noise-bg overflow-hidden">
      <div className="metallic-separator absolute top-0 left-0 right-0" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-xs sm:text-sm font-medium text-[#9BA0A8] uppercase tracking-wider mb-4">Calculadora</p>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            ¿Cuánto puede facturar un complejo mejor administrado?
          </h2>
          <p className="text-[#9BA0A8] max-w-xl mx-auto text-balance text-sm sm:text-base">
            Una mejor ocupación puede generar ingresos adicionales significativos a lo largo del año.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card rounded-2xl border border-white/[0.08] p-6 sm:p-10 grid md:grid-cols-2 gap-10 items-center"
        >
          {/* Inputs */}
          <div className="flex flex-col gap-6">
            <FieldSlider label="Canchas" value={canchas} setValue={setCanchas} min={1} max={20} step={1} />
            <FieldSlider label="Reservas promedio por día" value={reservasPorDia} setValue={setReservasPorDia} min={1} max={80} step={1} />
            <FieldSlider
              label="Ticket promedio por reserva"
              value={ticket}
              setValue={setTicket}
              min={5000}
              max={60000}
              step={500}
              format={(v) => `$${v.toLocaleString("es-AR")}`}
            />
          </div>

          {/* Result */}
          <div className="flex flex-col items-center justify-center text-center gap-3 rounded-2xl bg-green-500/5 border border-green-500/20 p-6 sm:p-8">
            <Calculator className="w-6 h-6 text-green-400" />
            <p className="text-xs sm:text-sm text-[#9BA0A8]">Facturación estimada mensual</p>
            <p className="font-display text-3xl sm:text-4xl font-bold text-green-gradient">
              {formatCurrency(facturacionMensual)}
            </p>
            <p className="text-[11px] sm:text-xs text-[#6b6f76] max-w-xs">
              Estimación orientativa a partir de tus datos. No constituye una garantía de resultados.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FieldSlider({
  label,
  value,
  setValue,
  min,
  max,
  step,
  format,
}: {
  label: string
  value: number
  setValue: (v: number) => void
  min: number
  max: number
  step: number
  format?: (v: number) => string
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-xs sm:text-sm text-[#9BA0A8]">{label}</label>
        <span className="text-sm sm:text-base font-semibold text-white">{format ? format(value) : value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full h-1.5 rounded-full bg-white/[0.08] appearance-none cursor-pointer accent-green-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-400 [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(34,197,94,0.6)]"
      />
    </div>
  )
}
