'use client'
import { useState } from 'react'
const L='Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
const gen=(n:number)=>Array.from({length:n},()=>L).join('\n\n')
export default function Lipsum(){ const [n,setN]=useState(2), [txt,setTxt]=useState(gen(2))
  return (<div className="space-y-3"><div className="card p-4 flex items-center gap-3"><input type="number" className="input w-28" value={n} onChange={e=>{const v=parseInt(e.target.value||'1'); setN(v); setTxt(gen(v))}}/><button className="btn-secondary" onClick={()=>navigator.clipboard.writeText(txt)}>Copy</button></div><textarea className="textarea" value={txt} readOnly/></div>)}
