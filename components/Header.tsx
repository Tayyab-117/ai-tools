'use client'
import Link from 'next/link'
import { useState } from 'react'
export default function Header(){
  const [open,setOpen]=useState(false)
  return (<header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
    <div className="container flex items-center justify-between py-3">
      <Link href="/" className="text-lg font-semibold">✨ FreeAIHub</Link>
      <nav className="hidden items-center gap-4 md:flex">
        <Link href="/tools" className="btn-secondary">Browse Tools</Link>
        <Link href="/faq" className="btn-secondary">FAQs</Link>
        <Link href="/contact" className="btn-secondary">Contact</Link>
        <Link href="/donate" className="btn-primary">Support</Link>
      </nav>
      <button className="md:hidden btn-secondary" onClick={()=>setOpen(o=>!o)}>Menu</button>
    </div>
    {open && <div className="border-t bg-white md:hidden"><div className="container py-3 flex flex-col gap-2">
      <Link href="/tools" className="btn-secondary">Browse Tools</Link>
      <Link href="/faq" className="btn-secondary">FAQs</Link>
      <Link href="/contact" className="btn-secondary">Contact</Link>
      <Link href="/donate" className="btn-primary">Support</Link>
    </div></div>}
  </header>)
}
