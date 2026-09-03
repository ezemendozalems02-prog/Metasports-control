"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { CalendarCheck, ShoppingBag, LineChart, Check } from "lucide-react"

// ─── Mini screen content for each device ──────────────────────────────────────

function ReservationScreen() {
  const slots = [
    { time: "18:00", state: "reserved" },
    { time: "19:30", state: "selected" },
    { time: "21:00", state: "free" },
  ]
  const stateStyle: Record<string, string> = {
    reserved: "bg-white/[0.04] text-[#4a4d52] line-through",
    selected: "bg-green-500 text-[#052e12] font-semibold",
    free: "bg-white/[0.04] text-[#9BA0A8]",
  }
  return (
    <div className="flex flex-col h-full bg-[#050505] p-3 gap-2">
      <div className="flex items-center gap-1.5 mb-1">
        <CalendarCheck className="w-3 h-3 text-[#9BA0A8]" />
        <span className="text-[10px] font-semibold text-white">Reservá tu cancha</span>
      </div>
      <div className="flex gap-1.5">
        {["⚽ Fútbol", "🎾 Pádel"].map((s, i) => (
          <span
            key={s}
            className={`text-[8px] px-2 py-1 rounded-full border ${
              i === 1 ? "bg-green-500/15 border-green-500/40 text-green-400" : "bg-white/[0.03] border-white/[0.06] text-[#6b6f76]"
            }`}
          >
            {s}
          </span>
        ))}
      </div>
      <p className="text-[8px] text-[#6b6f76] mt-1">Cancha 3 — Horarios</p>
      <div className="flex flex-col gap-1.5">
        {slots.map((s, i) => (
          <motion.div
            key={s.time}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className={`flex items-center justify-between rounded-lg px-2 py-1.5 ${stateStyle[s.state]}`}
          >
            <span className="text-[9px]">{s.time}</span>
            {s.state === "selected" && <Check className="w-3 h-3" />}
          </motion.div>
        ))}
      </div>
      <div className="mt-auto bg-white/[0.04] border border-white/[0.06] rounded-lg px-2 py-1.5">
        <div className="flex items-center justify-between">
          <span className="text-[8px] text-[#6b6f76]">Seña 30%</span>
          <span className="text-[9px] font-bold text-white">$6.600</span>
        </div>
        <div className="mt-1 text-center text-[7.5px] font-semibold bg-green-500 text-[#052e12] rounded-md py-1">
          Pagar con Mercado Pago
        </div>
      </div>
    </div>
  )
}

function POSScreen() {
  const items = [
    { name: "Agua", price: 2000 },
    { name: "Gatorade", price: 3500 },
    { name: "Hamburguesa", price: 7000 },
    { name: "Pelota", price: 18000 },
  ]
  const total = items.reduce((a, b) => a + b.price, 4000)
  return (
    <div className="flex flex-col h-full bg-[#050505] p-3 gap-2">
      <div className="flex items-center gap-1.5 mb-1">
        <ShoppingBag className="w-3 h-3 text-[#9BA0A8]" />
        <span className="text-[10px] font-semibold text-white">Caja y venta rápida</span>
      </div>
      <div className="flex flex-col gap-1.5">
        {items.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.08 }}
            className="flex items-center justify-between bg-white/[0.04] border border-white/[0.06] rounded-lg px-2 py-1.5"
          >
            <span className="text-[9px] text-[#9BA0A8]">{item.name}</span>
            <span className="text-[9px] font-semibold text-white">${item.price.toLocaleString("es-AR")}</span>
          </motion.div>
        ))}
      </div>
      <div className="mt-auto bg-white/[0.04] border border-white/[0.06] rounded-lg px-2 py-2">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[8px] text-[#6b6f76]">Total</span>
          <span className="text-[10px] font-bold text-white">${total.toLocaleString("es-AR")}</span>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="flex items-center gap-1 text-[7.5px] text-green-400 font-medium"
        >
          <Check className="w-2.5 h-2.5" /> Venta registrada · Stock actualizado
        </motion.div>
      </div>
    </div>
  )
}

function MetricsScreen() {
  const bars = [30, 50, 35, 70, 45, 85, 55, 90, 60, 75, 80, 95]
  return (
    <div className="flex flex-col h-full bg-[#050505] p-3 gap-2">
      <div className="flex items-center gap-1.5 mb-1">
        <LineChart className="w-3 h-3 text-[#9BA0A8]" />
        <span className="text-[10px] font-semibold text-white">Métricas del negocio</span>
      </div>
      <div className="bg-white/[0.04] border border-white/[0.06] rounded-lg px-2 py-2">
        <p className="text-[8px] text-[#9BA0A8] mb-0.5">Facturación del mes</p>
        <motion.p
          className="text-sm font-bold text-green-gradient"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          $11.430.000
        </motion.p>
      </div>
      <div className="flex items-end gap-0.5 h-14 mt-auto">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-gradient-to-t from-green-600 to-green-400 rounded-sm origin-bottom"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: h / 100 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.05, ease: "easeOut" }}
          />
        ))}
      </div>
      <motion.div
        className="flex items-center justify-end gap-1"
        initial={{ opacity: 0, y: 4 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-[9px] text-green-400 font-semibold">↑ 18.6% ocupación 82%</span>
      </motion.div>
    </div>
  )
}

// ─── Single device frame ──────────────────────────────────────────────────────

interface PhoneProps {
  rotateY?: number
  rotateZ?: number
  scale?: number
  zIndex?: number
  parallaxY: ReturnType<typeof useTransform>
  children: React.ReactNode
  label: string
  delay?: number
}

function PerspectivePhone({ rotateY = 0, rotateZ = 0, scale = 1, zIndex = 1, parallaxY, children, label, delay = 0 }: PhoneProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      style={{ y: parallaxY, zIndex }}
      className="relative flex flex-col items-center"
    >
      <div
        style={{
          transform: `perspective(900px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
          transformOrigin: "center center",
        }}
        className="relative"
      >
        {/* Phone shell */}
        <div className="relative w-[180px] h-[370px] bg-gradient-to-b from-[#1c1c1f] to-[#0e0e11] rounded-[2.4rem] p-[6px] shadow-2xl shadow-black/70 border border-white/[0.10]">
          {/* Screen */}
          <div className="w-full h-full bg-[#050505] rounded-[2rem] overflow-hidden relative">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#050505] rounded-b-xl z-20" />
            <div className="w-full h-full pt-6">
              {children}
            </div>
          </div>
          {/* Side buttons */}
          <div className="absolute right-[-3px] top-20 w-[3px] h-10 bg-[#2a2a2d] rounded-l-sm" />
          <div className="absolute left-[-3px] top-16 w-[3px] h-6 bg-[#2a2a2d] rounded-r-sm" />
          <div className="absolute left-[-3px] top-26 w-[3px] h-10 bg-[#2a2a2d] rounded-r-sm" />
        </div>
        {/* Ground shadow */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-3 bg-black/40 rounded-full blur-md" />
      </div>
      <p className="mt-8 text-xs text-[#9BA0A8] font-medium tracking-wide">{label}</p>
    </motion.div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function ProductShowcaseSection() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll()

  const yLeft = useTransform(scrollYProgress, [0, 1], [40, -60])
  const yCenter = useTransform(scrollYProgress, [0, 1], [20, -40])
  const yRight = useTransform(scrollYProgress, [0, 1], [60, -80])

  return (
    <section id="como-funciona" ref={ref} className="px-4 sm:px-6 py-20 sm:py-32 noise-bg overflow-hidden">
      <div className="metallic-separator absolute top-0 left-0 right-0" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[400px] bg-[radial-gradient(ellipse,rgba(34,197,94,0.05),transparent_70%)]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-xs sm:text-sm font-medium text-[#9BA0A8] uppercase tracking-wider mb-4">Cómo funciona</p>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Tus clientes reservan. Vos controlás todo.
          </h2>
          <p className="text-[#9BA0A8] max-w-xl mx-auto text-balance text-sm sm:text-base">
            Reservas online, caja y métricas conectadas en tiempo real.
          </p>
        </motion.div>

        {/* 3 devices in perspective */}
        <div className="hidden sm:flex items-end justify-center gap-4 md:gap-10 pb-8">
          <PerspectivePhone rotateY={14} rotateZ={1.5} scale={0.88} zIndex={1} parallaxY={yLeft} label="Reservas online" delay={0.1}>
            <ReservationScreen />
          </PerspectivePhone>

          <PerspectivePhone rotateY={0} rotateZ={0} scale={1} zIndex={3} parallaxY={yCenter} label="Caja + POS" delay={0}>
            <POSScreen />
          </PerspectivePhone>

          <PerspectivePhone rotateY={-14} rotateZ={-1.5} scale={0.88} zIndex={1} parallaxY={yRight} label="Métricas" delay={0.2}>
            <MetricsScreen />
          </PerspectivePhone>
        </div>

        {/* Mobile fallback */}
        <div className="sm:hidden flex flex-col gap-4">
          {[
            { label: "Reservas online", Screen: ReservationScreen },
            { label: "Caja + POS", Screen: POSScreen },
            { label: "Métricas", Screen: MetricsScreen },
          ].map(({ label, Screen }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden border border-white/[0.08]"
            >
              <div className="px-4 pt-4 pb-2 border-b border-white/[0.06]">
                <p className="text-xs font-semibold text-white">{label}</p>
              </div>
              <div className="h-52 overflow-hidden">
                <Screen />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="metallic-separator absolute bottom-0 left-0 right-0" />
    </section>
  )
}
