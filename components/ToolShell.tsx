'use client'
import { isFav, toggleFav } from '../lib/storage'
import { useEffect, useState } from 'react'
import Link from 'next/link'
export default function ToolShell({ slug, title, tagline, children }:{ slug:string, title:string, tagline:string, children:React.ReactNode }){
  const [fav,setFav]=useState(false); useEffect(()=>{ setFav(isFav(slug)) },[slug])
  return (<div className="container py-8">
    <nav className="text-sm text-gray-500 mb-3"><div className="flex items-center gap-2">
      <Link href="/" className="hover:underline">Home</Link><span>/</span>
      <Link href="/tools" className="hover:underline">Tools</Link><span>/</span>
      <span>{title}</span></div></nav>
    <div className="flex items-center justify-between"><h1 className="text-2xl font-semibold">{title}</h1>
      <button className="btn-secondary" onClick={()=>{ toggleFav(slug); setFav(isFav(slug)) }}>{fav?'★ Favorited':'☆ Favorite'}</button></div>
    <p className="text-gray-600 mt-1">{tagline}</p>
    <div className="mt-4">{children}</div>
  </div>)
}
