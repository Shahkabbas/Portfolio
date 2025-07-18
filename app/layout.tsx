import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Shah Kashif Abbas - Pharmacovigilance Professional | Portfolio",
  description:
    "Professional portfolio of Shah Kashif Abbas, a certified Pharmacovigilance and MedDRA professional with B.Pharm background. Specializing in drug safety, ICSR processing, and regulatory compliance.",
  keywords: [
    "Pharmacovigilance",
    "MedDRA",
    "Drug Safety",
    "ICSR",
    "B.Pharm",
    "Quality Assurance",
    "Regulatory Affairs",
    "Pharmaceutical",
  ],
  authors: [{ name: "Shah Kashif Abbas" }],
  creator: "Shah Kashif Abbas",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shahkashifabbas.dev",
    title: "Shah Kashif Abbas - Pharmacovigilance Professional",
    description:
      "Professional portfolio showcasing expertise in pharmacovigilance, drug safety, and pharmaceutical quality assurance.",
    siteName: "Shah Kashif Abbas Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${poppins.className} antialiased bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
