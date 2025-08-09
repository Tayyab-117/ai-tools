import './globals.css'
import type { Metadata } from 'next'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'FreeAIHub — Free, private AI tools that run in your browser',
    template: '%s — FreeAIHub'
  },
  description: 'No sign-up. No limits. Files never leave your device. PWA-ready.',
  manifest: '/manifest.webmanifest',
  themeColor: '#3B82F6',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'FreeAIHub',
    description: 'Free, private AI tools that run in your browser. No sign-up. No limits.',
    url: 'https://free-ai-tools-hub.vercel.app',
    siteName: 'FreeAIHub',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FreeAIHub — Free, private AI tools',
    description: 'Run AI tools in your browser. No upload. No limits.'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
