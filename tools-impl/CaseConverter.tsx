'use client'
import { useState } from 'react'
export default function CaseConverter(){
  const [t, setT] = useState('Sample Text')
  const set = (fn:(s:string)=>string)=> (e:any)=> setT(fn(t))
  const title = (s:string)=> s.toLowerCase().replace(/\b\w/g, m=>m.toUpperCase())
  const sentence = (s:string)=> s.toLowerCase().replace(/(^\s*[a-z])|([.!?]\s*[a-z])/g, m=>m.toUpperCase())
  return (
    <div className="space-y-3">
      <textarea value={t} onChange={e=>setT(e.target.value)} className="h-48 w-full rounded-lg border p-3" />
      <div className="flex flex-wrap gap-2">
        <button className="btn btn-secondary" onClick={set(s=>s.toLowerCase())}>lowercase</button>
        <button className="btn btn-secondary" onClick={set(s=>s.toUpperCase())}>UPPERCASE</button>
        <button className="btn btn-secondary" onClick={set(title)}>Title Case</button>
        <button className="btn btn-secondary" onClick={set(sentence)}>Sentence case</button>
        <button className="btn btn-secondary" onClick={()=>navigator.clipboard.writeText(t)}>Copy</button>
      </div>
    </div>
  )
}
