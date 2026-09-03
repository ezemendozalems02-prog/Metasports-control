"use client"

import { motion } from "framer-motion"
import { Check, Minus } from "lucide-react"
import Link from "next/link"
import { AnimatedBorderCard } from "@/components/ui/animated-border-card"

const plans = [
  {
    name: "Starter",
    tag: "Para empezar",
    description: "Para complejos que quieren dejar atrás la agenda manual.",
    price: "USD 27",
    period: "/mes",
    features: [
      "Gestión de reservas",
      "Calendario de canchas",
      "Disponibilidad en tiempo real",
      "Gestión de clientes",
      "Registro de pagos y señas",
      "Panel operativo",
      "Historial de reservas",
      "Configuración de horarios y precios",
      "Acceso desde celular y computadora",
    ],
    cta: "Comenzar con Starter",
    highlighted: false,
  },
  {
    name: "Pro",
    tag: "Más elegido",
    description: "Para complejos que quieren administrar todo su negocio desde una sola plataforma.",
    price: "USD 57",
    period: "/mes",
    features: [
      "Todo lo de Starter, más:",
      "Dashboard avanzado y métricas",
      "Caja y POS",
      "Inventario y gastos",
      "Mercado Pago",
      "Promociones y clientes frecuentes",
      "Reservas recurrentes y lista de espera",
      "Notificaciones automáticas",
      "Empleados y permisos por rol",
    ],
    cta: "Elegir Pro",
    highlighted: true,
  },
  {
    name: "Business",
    tag: "Máximo control",
    description: "Para complejos deportivos que buscan máxima automatización y control.",
    price: "USD 97",
    period: "/mes",
    features: [
      "Todo lo de Pro, más:",
      "Torneos, equipos y rankings",
      "Cuadros de competición",
      "Fidelización y sistema de puntos",
      "Automatizaciones avanzadas",
      "Analytics avanzado e insights",
      "Multi-sede",
      "Auditoría de acciones",
      "Soporte prioritario",
    ],
    cta: "Potenciar mi complejo",
    highlighted: false,
  },
]

const comparisonRows: { label: string; starter: boolean; pro: boolean; business: boolean }[] = [
  { label: "Reservas", starter: true, pro: true, business: true },
  { label: "Calendario de canchas", starter: true, pro: true, business: true },
  { label: "Clientes", starter: true, pro: true, business: true },
  { label: "Pagos y señas", starter: true, pro: true, business: true },
  { label: "Mercado Pago", starter: false, pro: true, business: true },
  { label: "Caja", starter: false, pro: true, business: true },
  { label: "POS", starter: false, pro: true, business: true },
  { label: "Inventario", starter: false, pro: true, business: true },
  { label: "Métricas", starter: false, pro: true, business: true },
  { label: "Promociones", starter: false, pro: true, business: true },
  { label: "Automatizaciones", starter: false, pro: true, business: true },
  { label: "Torneos", starter: false, pro: false, business: true },
  { label: "Ranking", starter: false, pro: false, business: true },
  { label: "Fidelización", starter: false, pro: false, business: true },
  { label: "Multi-sede", starter: false, pro: false, business: true },
  { label: "Analytics avanzado", starter: false, pro: false, business: true },
  { label: "Soporte prioritario", starter: false, pro: false, business: true },
]

function Cell({ ok }: { ok: boolean }) {
  return ok ? (
    <Check className="w-4 h-4 text-green-400 mx-auto" />
  ) : (
    <Minus className="w-4 h-4 text-[#3a3d42] mx-auto" />
  )
}

export function PricingSection() {
  return (
    <section id="pricing" className="px-4 sm:px-6 py-16 sm:py-24 relative noise-bg overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(34,197,94,0.07),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs sm:text-sm font-medium text-[#9BA0A8] uppercase tracking-wider mb-4">Planes</p>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Elegí el nivel de control que necesita tu complejo.
          </h2>
          <p className="text-[#9BA0A8] max-w-xl mx-auto text-balance text-base sm:text-lg px-2">
            Empezá simple. Escalá cuando estés listo.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`h-full ${plan.highlighted ? "md:-translate-y-3" : ""}`}
            >
              {plan.highlighted ? (
                <AnimatedBorderCard
                  borderRadius={16}
                  borderWidth={1.5}
                  speed={0.6}
                  opacity={0.85}
                  innerClassName="bg-[#0B120D]"
                  className="h-full"
                >
                  <div className="p-6 sm:p-8 flex flex-col h-full card-lift">
                    <PlanCardContent plan={plan} />
                  </div>
                </AnimatedBorderCard>
              ) : (
                <AnimatedBorderCard
                  borderRadius={16}
                  borderWidth={1}
                  speed={0.35}
                  opacity={0.4}
                  innerClassName="bg-[#0a0a0d]"
                  className="h-full"
                >
                  <div className="p-6 sm:p-8 flex flex-col h-full card-lift">
                    <PlanCardContent plan={plan} />
                  </div>
                </AnimatedBorderCard>
              )}
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-24"
        >
          <h3 className="text-center font-display text-xl sm:text-2xl font-bold text-white mb-8 sm:mb-10">
            Comparativa completa
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-white/[0.08] glass-card">
            <table className="w-full min-w-[520px] text-sm">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left font-medium text-[#9BA0A8] px-4 sm:px-6 py-4 text-xs sm:text-sm">Funcionalidad</th>
                  <th className="text-center font-semibold text-white px-3 py-4 text-xs sm:text-sm">Starter</th>
                  <th className="text-center font-semibold text-green-400 px-3 py-4 text-xs sm:text-sm">Pro</th>
                  <th className="text-center font-semibold text-white px-3 py-4 text-xs sm:text-sm">Business</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-white/[0.015]" : ""}>
                    <td className="px-4 sm:px-6 py-3 text-xs sm:text-sm text-[#9BA0A8]">{row.label}</td>
                    <td className="px-3 py-3"><Cell ok={row.starter} /></td>
                    <td className="px-3 py-3"><Cell ok={row.pro} /></td>
                    <td className="px-3 py-3"><Cell ok={row.business} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function PlanCardContent({ plan }: { plan: (typeof plans)[number] }) {
  return (
    <>
      {/* Tag */}
      <div className="mb-4">
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
            plan.highlighted
              ? "bg-green-500/15 border-green-500/30 text-green-400"
              : "bg-white/[0.04] border-white/[0.1] text-[#9BA0A8]"
          }`}
        >
          {plan.highlighted && <span>🔥</span>}
          {plan.tag}
        </span>
      </div>

      {/* Plan Name + Description */}
      <div className="mb-5">
        <h3 className="font-heading text-lg sm:text-xl font-semibold text-white mb-1.5">{plan.name}</h3>
        <p className="text-xs sm:text-sm text-[#9BA0A8]">{plan.description}</p>
      </div>

      {/* Price block */}
      <div className="mb-6 flex items-end gap-2">
        <span className="font-display text-3xl sm:text-4xl font-bold text-white">{plan.price}</span>
        <span className="text-sm text-[#9BA0A8] mb-1">{plan.period}</span>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-6 flex-1">
        {plan.features.map((feature) => {
          const isHeader = feature.startsWith("Todo lo de")
          return (
            <li key={feature} className={`flex items-start gap-3 ${isHeader ? "text-[#6b6f76] text-xs italic" : ""}`}>
              {!isHeader && <Check className="w-4 h-4 shrink-0 mt-0.5 text-green-400" />}
              <span className="text-xs sm:text-sm text-[#9BA0A8]">{feature}</span>
            </li>
          )
        })}
      </ul>

      {/* CTA */}
      <Link
        href="#cta-final"
        className={`group block w-full py-3 px-4 sm:px-6 text-center rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 mt-auto ${
          plan.highlighted
            ? "btn-green"
            : "bg-white/[0.06] border border-white/[0.1] text-white hover:bg-white/10 hover:border-[rgba(34,197,94,0.3)]"
        }`}
        style={{ transition: "transform 0.2s, box-shadow 0.2s" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.03)" }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)" }}
      >
        {plan.cta} →
      </Link>
    </>
  )
}
