import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Cormorant_Garamond, Montserrat, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Etherealglow – By Ishika | Luxury Beauty Salon",
  description:
    "Experience luxury beauty treatments at Etherealglow. Premium nail art, skincare, hair styling, and spa services in an elegant sanctuary.",
  generator: "v0.app",
  keywords: "luxury beauty salon, nail art, skincare, hair styling, spa treatments, premium beauty services",
  authors: [{ name: "Ishika" }],
  openGraph: {
    title: "Etherealglow – By Ishika | Luxury Beauty Salon",
    description:
      "Experience luxury beauty treatments at Etherealglow. Premium nail art, skincare, hair styling, and spa services.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${cormorant.variable} ${montserrat.variable} ${inter.variable} font-sans antialiased`}
      >
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
