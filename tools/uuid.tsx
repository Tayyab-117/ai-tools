'use client'
import { useState } from 'react'
function uuidv4(){ const a=new Uint8Array(16); crypto.getRandomValues(a); a[6]=(a[6]&0x0f)|0x40; a[8]=(a[8]&0x3f)|0x80
  const h=(n:number)=>n.toString(16).padStart(2,'0'); const s=Array.from(a,h).join(''); return `${s.slice(0,8)}-${s.slice(8,12)}-${s.slice(12,16)}-${s.slice(16,20)}-${s.slice(20)}` }
export default function UUIDGen(){ const [val,setVal]=useState(uuidv4())
  return (<div className="space-y-3"><div className="card p-4 text-sm">{val}</div><div className="flex gap-3">
    <button className="btn-primary" onClick={()=>setVal(uuidv4())}>Generate</button><button className="btn-secondary" onClick={()=>navigator.clipboard.writeText(val)}>Copy</button></div></div>)}

