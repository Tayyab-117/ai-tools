import './globals.css'
import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
export const metadata: Metadata = {
  title: 'FreeAIHub — AI Tools that run in your browser',
  description: 'A curated set of AI‑flavored tools. Fast, private, and free.',
  manifest: '/manifest.webmanifest',
  themeColor: '#3B82F6',
  openGraph: { title:'FreeAIHub — AI Tools', description:'Fast, private, free tools for images, audio, text, and data.', type:'website' },
  twitter: { card:'summary_large_image', title:'FreeAIHub', description:'AI tools, no accounts required.' }
}
export default function RootLayout({ children }:{ children:React.ReactNode }){
  return (<html lang="en"><body><Header/>{children}<Footer/></body></html>)
}

