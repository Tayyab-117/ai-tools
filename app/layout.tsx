import './globals.css'
import type { Metadata } from 'next'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: 'FreeAIHub — Free, private AI tools that run in your browser',
    template: '%s · FreeAIHub'
  },
  description: 'No sign-up. No limits. Files never leave your device. PWA-ready.',
  openGraph: {
    type: 'website',
    title: 'FreeAIHub — Free AI tools (no upload, no limits)',
    description: 'Free, private, client-side tools for images, text, CSVs and more.',
    url: 'https://example.com',
    siteName: 'FreeAIHub'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FreeAIHub — Free, private AI tools',
    description: 'Run tools in your browser. No accounts.',
  },
  manifest: '/manifest.webmanifest',
  themeColor: '#3B82F6'
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
