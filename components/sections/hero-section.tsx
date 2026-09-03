"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { Zap, ArrowRight, CircleDot } from "lucide-react"
import { AnimatedBorderCard } from "@/components/ui/animated-border-card"

function useTypingEffect(text: string, speed = 50, startDelay = 0) {
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    let i = 0
    timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
      return () => clearInterval(interval)
    }, startDelay)
    return () => clearTimeout(timeout)
  }, [text, speed, startDelay])

  return { displayed, done }
}

function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1400
          let start: number | null = null
          let raf: number
          function step(ts: number) {
            if (!start) start = ts
            const p = Math.min((ts - start) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setDisplay(Math.round(value * eased))
            if (p < 1) raf = requestAnimationFrame(step)
          }
          raf = requestAnimationFrame(step)
          return () => cancelAnimationFrame(raf)
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString("es-AR")}
      {suffix}
    </span>
  )
}

function RevenueChart() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let start: number | null = null
    let raf: number
    let timeoutId: ReturnType<typeof setTimeout>
    const duration = 2200

    function step(ts: number) {
      if (document.hidden) {
        raf = requestAnimationFrame(step)
        return
      }
      if (!start) start = ts
      const elapsed = ts - start
      const p = Math.min(elapsed / duration, 1)
      setProgress(p)
      if (p < 1) {
        raf = requestAnimationFrame(step)
      } else {
        timeoutId = setTimeout(() => {
          start = null
          setProgress(0)
          raf = requestAnimationFrame(step)
        }, 1800)
      }
    }
    raf = requestAnimationFrame(step)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(timeoutId)
    }
  }, [])

  const rawPoints: [number, number][] = [
    [0, 55], [30, 48], [60, 58], [90, 35], [120, 40], [150, 20], [180, 8],
  ]

  function buildPath(pts: [number, number][], t: number): string {
    const totalSegments = pts.length - 1
    const drawn = t * totalSegments
    const fullSegments = Math.floor(drawn)
    const partial = drawn - fullSegments
    let d = `M ${pts[0][0]} ${pts[0][1]}`
    for (let i = 0; i < fullSegments && i < totalSegments; i++) {
      d += ` L ${pts[i + 1][0]} ${pts[i + 1][1]}`
    }
    if (fullSegments < totalSegments && partial > 0) {
      const p0 = pts[fullSegments]
      const p1 = pts[fullSegments + 1]
      d += ` L ${p0[0] + (p1[0] - p0[0]) * partial} ${p0[1] + (p1[1] - p0[1]) * partial}`
    }
    return d
  }

  const chartPath = buildPath(rawPoints, progress)

  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 180 65" className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="heroFillGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(34,197,94,0.25)" />
            <stop offset="100%" stopColor="rgba(34,197,94,0)" />
          </linearGradient>
        </defs>
        <line x1="0" y1="62" x2="180" y2="62" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
        {progress > 0 && (
          <path d={`${chartPath} L 180 62 L 0 62 Z`} fill="url(#heroFillGrad)" />
        )}
        {progress > 0 && (
          <path d={chartPath} fill="none" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </div>
  )
}

const metrics = [
  { label: "Facturación de hoy", value: "$482.500", badge: "+18.4%" },
  { label: "Reservas", value: 24, badge: "+12%" },
  { label: "Ocupación", value: "82%", badge: "+7.2%" },
  { label: "Clientes", value: 1248, badge: "+14%" },
]

const agenda = [
  { time: "14:00", court: "Pádel 1", client: "Juan Pérez", status: "Confirmado", tone: "green" },
  { time: "14:30", court: "Fútbol 5", client: "Los Pibes", status: "Confirmado", tone: "green" },
  { time: "15:00", court: "Pádel 2", client: "Martín Gómez", status: "Seña pagada", tone: "amber" },
  { time: "15:30", court: "Pádel 3", client: "—", status: "Disponible", tone: "muted" },
]

const statusTone: Record<string, string> = {
  green: "bg-green-500/15 text-green-400",
  amber: "bg-amber-400/15 text-amber-300",
  muted: "bg-white/[0.06] text-[#6b6f76]",
}

function DashboardMock() {
  return (
    <div className="relative animate-float">
      <AnimatedBorderCard
        borderRadius={22}
        borderWidth={1.5}
        speed={0.45}
        opacity={0.65}
        innerClassName="bg-transparent"
        className="w-[300px] xs:w-[340px] sm:w-[460px] lg:w-[560px]"
      >
        <div className="relative bg-[#0A0A0A] rounded-[21px] overflow-hidden shadow-[0_0_60px_rgba(34,197,94,0.15)]">
          {/* Window bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#0D0D0D]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <span className="text-[9px] sm:text-[10px] text-[#6b6f76] font-medium tracking-wide">METASPORTS CONTROL</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-live-pulse" />
              <span className="text-[8px] sm:text-[9px] text-green-400 font-medium hidden sm:inline">En vivo</span>
            </div>
          </div>

          <div className="p-3 sm:p-5">
            <p className="text-[11px] sm:text-sm text-white font-semibold mb-3 sm:mb-4">Buenos días, Martín 👋</p>

            {/* Metric cards */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              {metrics.map((m) => (
                <div key={m.label} className="bg-white/[0.04] border border-white/[0.06] rounded-lg sm:rounded-xl p-1.5 sm:p-2.5">
                  <p className="text-[6px] sm:text-[9px] text-[#6b6f76] leading-tight mb-0.5 sm:mb-1 truncate">{m.label}</p>
                  <p className="text-[8.5px] sm:text-[13px] font-bold text-white leading-tight">
                    {typeof m.value === "number" ? <AnimatedNumber value={m.value} /> : m.value}
                  </p>
                  <p className="text-[6px] sm:text-[9px] font-medium leading-tight text-green-400 mt-0.5">{m.badge}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-5 gap-2 sm:gap-3">
              {/* Agenda */}
              <div className="col-span-3 bg-white/[0.03] border border-white/[0.06] rounded-lg sm:rounded-xl p-2 sm:p-3">
                <p className="text-[7px] sm:text-[9px] text-[#6b6f76] font-semibold uppercase tracking-wider mb-1.5 sm:mb-2">Agenda de hoy</p>
                <div className="flex flex-col gap-1 sm:gap-1.5">
                  {agenda.map((a) => (
                    <div key={a.time + a.court} className="flex items-center justify-between gap-1">
                      <div className="flex items-center gap-1 sm:gap-1.5 min-w-0">
                        <span className="text-[6.5px] sm:text-[9px] text-[#6b6f76] font-mono shrink-0">{a.time}</span>
                        <span className="text-[6.5px] sm:text-[9.5px] text-white font-medium truncate">{a.court}</span>
                      </div>
                      <span className={`text-[5.5px] sm:text-[8px] px-1 sm:px-1.5 py-0.5 rounded-full font-medium shrink-0 ${statusTone[a.tone]}`}>
                        {a.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chart */}
              <div className="col-span-2 bg-white/[0.03] border border-white/[0.06] rounded-lg sm:rounded-xl p-2 sm:p-3 flex flex-col">
                <p className="text-[6.5px] sm:text-[8.5px] text-[#6b6f76] font-medium mb-1">Ingresos 7 días</p>
                <div className="flex-1 min-h-[36px] sm:min-h-[52px]">
                  <RevenueChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedBorderCard>
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-4 bg-[rgba(34,197,94,0.15)] rounded-full blur-xl" />
    </div>
  )
}

export function HeroSection() {
  const line1 = "Dejá de administrar tu"
  const line2 = "complejo en planillas."
  const { displayed: text1, done: done1 } = useTypingEffect(line1, 45, 600)
  const { displayed: text2 } = useTypingEffect(line2, 45, done1 ? 0 : 99999)
  const [line2Started, setLine2Started] = useState(false)

  useEffect(() => {
    if (done1) setLine2Started(true)
  }, [done1])

  const showCursor1 = !done1
  const showCursor2 = line2Started && text2.length < line2.length

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 pb-16 sm:pb-20 relative overflow-hidden noise-bg hero-radial">
      {/* Green radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(34,197,94,0.1),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[radial-gradient(ellipse,rgba(74,222,128,0.07),transparent_70%)]" />
      </div>

      {/* Faint technical grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-60" />

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 items-center w-full">
        <div className="text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass-card-green mb-6 sm:mb-8"
          >
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 shrink-0" />
            <span className="text-xs sm:text-sm text-[#9BA0A8]">Gestión inteligente para complejos deportivos</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[3.4rem] font-bold tracking-tight mb-4 sm:mb-6 min-h-[2.4em] sm:min-h-[2.2em]"
          >
            <span className="text-white block">
              {text1}
              {showCursor1 && (
                <span className="inline-block w-[3px] h-[0.85em] bg-white ml-1 align-middle animate-blink" />
              )}
            </span>
            <span className="text-green-gradient block">
              {line2Started ? text2 : ""}
              {showCursor2 && (
                <span className="inline-block w-[3px] h-[0.85em] bg-green-400 ml-1 align-middle animate-blink" />
              )}
              {line2Started && text2.length >= line2.length && (
                <span className="inline-block w-[3px] h-[0.85em] bg-green-400 ml-1 align-middle animate-blink" />
              )}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-[#9BA0A8] max-w-xl mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed text-balance px-2 sm:px-0"
          >
            MetaSports Control centraliza reservas, canchas, cobros, caja, clientes, torneos, inventario y métricas para que puedas administrar tu complejo deportivo de forma simple y profesional.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
          >
            <Link
              href="#pricing"
              className="btn-green inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base"
            >
              Empezar ahora <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#funciones"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#9BA0A8] hover:text-white border border-white/[0.08] rounded-full hover:border-[rgba(34,197,94,0.3)] transition-all duration-300"
            >
              <span>Ver cómo funciona</span>
            </Link>
          </motion.div>

          {/* Trust line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 sm:mt-8"
          >
            <p className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-[#6b6f76]">
              <CircleDot className="w-3.5 h-3.5 text-green-400" />
              Sin instalaciones. Sin sistemas complicados. Todo desde la nube.
            </p>
          </motion.div>

          {/* Mobile dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="lg:hidden flex justify-center mt-12 relative"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 bg-[radial-gradient(circle,rgba(34,197,94,0.1),transparent_70%)]" />
            </div>
            <DashboardMock />
          </motion.div>
        </div>

        {/* Dashboard — desktop */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative hidden lg:flex justify-center items-center"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-80 bg-[radial-gradient(circle,rgba(34,197,94,0.12),transparent_70%)] animate-subtle-pulse" />
          </div>
          <DashboardMock />
        </motion.div>
      </div>
    </section>
  )
}
