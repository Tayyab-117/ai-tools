import './globals.css'
import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner'

export const metadata: Metadata = {
  title: 'FreeAIHub — Free, Private, Browser‑Only Tools',
  description: 'A growing collection of privacy‑first AI & web tools. No sign‑up, no uploads.',
  manifest: '/manifest.webmanifest',
  themeColor: '#3B82F6',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'FreeAIHub — Free, Private, Browser‑Only Tools',
    description: 'No sign‑up. No uploads. Tools for images, text, data, and utilities.',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'FreeAIHub', description: 'Free, private tools in your browser.' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
        <CookieBanner/>
      </body>
    </html>
  )
}
