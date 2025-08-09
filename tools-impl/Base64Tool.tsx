'use client'
import { useState } from 'react'
export default function Base64Tool(){
  const [t, setT] = useState('Hello')
  const encode = ()=> setT(btoa(unescape(encodeURIComponent(t))))
  const decode = ()=> { try { setT(decodeURIComponent(escape(atob(t)))) } catch { alert('Invalid Base64') } }
  return (
    <div className="space-y-3">
      <textarea value={t} onChange={e=>setT(e.target.value)} className="h-48 w-full rounded-lg border p-3" />
      <div className="flex flex-wrap gap-2">
        <button className="btn btn-secondary" onClick={encode}>Encode</button>
        <button className="btn btn-secondary" onClick={decode}>Decode</button>
        <button className="btn btn-secondary" onClick={()=>navigator.clipboard.writeText(t)}>Copy</button>
      </div>
    </div>
  )
}
