import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://aquaflowpro.github.io"),
  title: "Aqua Flow Pro | Expert Pump Services in Greater Manchester",
  description:
    "Aqua Flow Pro offers professional pump installation, repair, and maintenance services in Greater Manchester. Get a free quote today for our 24/7 emergency services.",
  keywords:
    "pump installation, pump repair, pump maintenance, Greater Manchester, emergency pump service, Aqua Flow Pro",
  openGraph: {
    title: "Aqua Flow Pro | Expert Pump Services in Greater Manchester",
    description:
      "Aqua Flow Pro offers professional pump installation, repair, and maintenance services in Greater Manchester. Get a free quote today for our 24/7 emergency services.",
    url: "https://aquaflowpro.github.io",
    siteName: "Aqua Flow Pro",
    images: [
      {
        url: "/industrial-commercial-pump-facility-equipment.jpg",
        width: 1200,
        height: 630,
        alt: "Industrial pump facility equipment",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aqua Flow Pro | Expert Pump Services in Greater Manchester",
    description:
      "Aqua Flow Pro offers professional pump installation, repair, and maintenance services in Greater Manchester. Get a free quote today for our 24/7 emergency services.",
    images: ["/industrial-commercial-pump-facility-equipment.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/AquaFlowProImages/Minimalist Wordmark Logo for Aqua Flow Pro.png" type="image/png" />
      </head>
      <body className={`font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
