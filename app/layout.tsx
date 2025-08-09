import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FreeAIHub — Free, private AI tools that run in your browser',
  description: 'No sign-up. No limits. Files never leave your device. PWA-ready.',
  manifest: '/manifest.webmanifest',
  themeColor: '#3B82F6'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
