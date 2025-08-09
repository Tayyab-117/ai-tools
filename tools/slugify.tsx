'use client'
import { useState } from 'react'
export default function Slug(){ const [t,setT]=useState('Hello World! New Post'); const slug=t.toLowerCase().trim().replace(/[^a-z0-9\s-]/g,'').replace(/\s+/g,'-').replace(/-+/g,'-')
  return (<div className="space-y-3"><input className="input" value={t} onChange={e=>setT(e.target.value)}/><div className="card p-4 text-sm">{slug}</div><button className="btn-secondary" onClick={()=>navigator.clipboard.writeText(slug)}>Copy</button></div>)}
