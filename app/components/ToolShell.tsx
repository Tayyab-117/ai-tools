'use client'
import { isFav, toggleFav } from '../../lib/storage'
import { useEffect, useState } from 'react'

export default function ToolShell({ slug, title, tagline, children }:{ slug:string, title:string, tagline:string, children: React.ReactNode }){
  const [fav, setFav] = useState(false)
  useEffect(()=>{ setFav(isFav(slug)) },[slug])
  const onFav = () => { toggleFav(slug); setFav(isFav(slug)) }
  return (
    <div className="container py-10">
      <div className="mb-1 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <button className="btn btn-secondary" onClick={onFav}>{fav? '★ Favorited' : '☆ Favorite'}</button>
      </div>
      <p className="text-sm text-muted-foreground">{tagline}</p>
      <div className="mt-4">{children}</div>
    </div>
  )
}
