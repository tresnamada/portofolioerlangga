import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Erlangga Tresnamada Muliawan - Front End Developer",
  description:
    "Portfolio website of Erlangga Tresnamada Muliawan, a passionate Front End Developer specializing in modern web technologies.",
  keywords: "front end developer",
  authors: [{ name: "Erlangga Tresnamada Muliawan" }],
  openGraph: {
    title: "Erlangga Tresnamada Muliawan - Front End Developer",
    description: "Portfolio website showcasing my projects and skills in web development",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
