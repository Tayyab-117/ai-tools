'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import CommandPalette from './CommandPalette'

export default function Header() {
  const [dark, setDark] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(()=>{
    const root = document.documentElement
    if (dark) root.classList.add('dark'); else root.classList.remove('dark')
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase()==='k'){ e.preventDefault(); setOpen(o=>!o) }
    }
    window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  },[dark])
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <span>✨ FreeAIHub</span>
          <span className="badge ml-1">Free & Private</span>
        </Link>
        <nav className="hidden gap-4 md:flex">
          <Link href="/tools" className="btn btn-secondary">All tools</Link>
          <Link href="/faq" className="btn btn-secondary">FAQs</Link>
          <Link href="/contact" className="btn btn-secondary">Contact</Link>
          <Link href="/donate" className="btn btn-primary">Donate</Link>
          <button className="btn btn-secondary" onClick={()=>setOpen(true)}>Search <kbd className="ml-2">⌘/Ctrl + K</kbd></button>
        </nav>
        <button aria-label="Toggle theme" className="btn btn-secondary" onClick={()=>setDark(d=>!d)}>
          {dark ? '☀️' : '🌙'}
        </button>
      </div>
      <CommandPalette open={open} onClose={()=>setOpen(false)} />
    </header>
  )
}
