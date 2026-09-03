"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#producto", label: "Producto" },
  { href: "#funciones", label: "Funciones" },
  { href: "#pricing", label: "Planes" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#faq", label: "FAQ" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <nav
        className={`max-w-5xl mx-auto flex items-center justify-between h-12 px-4 sm:px-6 rounded-full transition-all duration-300 ${
          scrolled ? "glass-card shadow-[0_8px_30px_rgba(0,0,0,0.4)]" : "bg-transparent border border-transparent"
        }`}
      >
        <Link href="/" className="font-display text-base sm:text-lg font-bold flex items-center gap-1.5 tracking-tight">
          <span className="text-white">MetaSports</span>
          <span className="text-green-gradient">CONTROL</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 text-sm rounded-full transition-colors text-[#9BA0A8] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://metasportscontrol.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-1.5 text-sm rounded-full font-medium border border-white/[0.12] text-[#9BA0A8] hover:text-white hover:border-[rgba(34,197,94,0.4)] transition-all duration-200"
          >
            Iniciar sesión
          </Link>
          <Link
            href="#pricing"
            className="btn-green ml-1 px-4 py-1.5 text-sm rounded-full font-semibold"
          >
            Solicitar demo →
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 text-[#9BA0A8] hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-4 right-4 bg-[#0D0D0D] border border-[rgba(34,197,94,0.2)] rounded-2xl p-4 space-y-3 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm text-[#9BA0A8] hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://metasportscontrol.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block w-full px-4 py-2 text-sm font-medium text-center rounded-lg border border-white/[0.12] text-[#9BA0A8] hover:text-white transition-colors"
            >
              Iniciar sesión
            </Link>
            <Link
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="btn-green block w-full px-4 py-2 text-sm font-semibold text-center rounded-lg"
            >
              Solicitar demo →
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
