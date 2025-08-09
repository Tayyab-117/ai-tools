'use client'
import { useState } from 'react'
function toTitle(str:string){ return str.toLowerCase().replace(/\b\w/g,c=>c.toUpperCase()) }
export default function CaseConverter(){ const [t,setT]=useState('Hello world sample TEXT'), [mode,setMode]=useState('lower')
  const conv=(s:string)=>mode==='upper'?s.toUpperCase():mode==='title'?toTitle(s):mode==='snake'?s.toLowerCase().replace(/\W+/g,'_'):mode==='kebab'?s.toLowerCase().replace(/\W+/g,'-'):s.toLowerCase()
  return (<div className="space-y-3"><div className="flex flex-wrap items-center gap-3 card p-4">
    <select className="input w-48" value={mode} onChange={e=>setMode(e.target.value)}>
      <option value="lower">lowercase</option><option value="upper">UPPERCASE</option><option value="title">Title Case</option><option value="snake">snake_case</option><option value="kebab">kebab-case</option></select>
    <button className="btn-primary" onClick={()=>navigator.clipboard.writeText(conv(t))}>Copy</button></div>
    <textarea className="textarea" value={t} onChange={e=>setT(e.target.value)}/>
    <div className="card p-4 text-sm"><div className="font-semibold mb-1">Result</div><pre className="whitespace-pre-wrap">{conv(t)}</pre></div></div>)
}
