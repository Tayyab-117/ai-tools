'use client'
import { useState } from 'react'
export default function URLTool(){ const [t,setT]=useState('hello world'); const [o,setO]=useState(''); return (<div className="space-y-3">
  <textarea className="textarea" value={t} onChange={e=>setT(e.target.value)}/>
  <div className="flex gap-3"><button className="btn-primary" onClick={()=>setO(encodeURIComponent(t))}>Encode</button><button className="btn-secondary" onClick={()=>{try{setO(decodeURIComponent(t))}catch{setO('Invalid encoding')}}}>Decode</button></div>
  <div className="card p-4 text-sm"><pre className="whitespace-pre-wrap">{o}</pre></div></div>)}
