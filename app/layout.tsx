import './globals.css'
import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'FreeAIHub — 10 Premium‑grade Tools, Free & Private',
  description: 'Top 10 tools people usually pay for: background remover, upscaler, OCR‑to‑PDF, video converter, transcription, denoise, face blur, PDF merge/split, EXIF remove, image convert.',
  manifest: '/manifest.webmanifest',
  themeColor: '#3B82F6'
}
export default function RootLayout({ children }:{ children:React.ReactNode }){
  return (<html lang="en"><body><Header/>{children}<Footer/></body></html>)
}

