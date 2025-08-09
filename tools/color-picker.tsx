'use client'
import { useState } from 'react'
export default function ColorPick(){ const [c,setC]=useState('#3B82F6')
  const shades = [0.9,0.75,0.6,0.45,0.3,0.15]
  return (<div className="space-y-3"><input type="color" className="input h-12" value={c} onChange={e=>setC(e.target.value)}/>
    <div className="grid grid-cols-3 md:grid-cols-6 gap-2">{shades.map((s,i)=>{ const col=c; return (<button key={i} className="h-12 rounded border" style={{background: col}} onClick={()=>navigator.clipboard.writeText(col)} title={col}></button>)})}</div>
    <div className="card p-4 text-sm">Selected: {c}</div></div>)}
