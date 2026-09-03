import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LenisProvider } from "@/components/providers/lenis-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "MetaSports Control | Gestión integral para complejos deportivos",
  description:
    "Gestioná reservas, canchas, cobros, caja, clientes, inventario y torneos desde una sola plataforma. MetaSports Control es el sistema operativo para complejos deportivos.",
  keywords: [
    "software para canchas",
    "sistema para canchas de futbol",
    "sistema para canchas de padel",
    "reservas de canchas",
    "gestion de complejos deportivos",
    "software para clubes deportivos",
    "sistema de reservas deportivas",
    "gestion de canchas",
  ],
  generator: "v0.app",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-[#050505] text-white`}>
        <LenisProvider>{children}</LenisProvider>
        <Analytics />
      </body>
    </html>
  )
}
