'use client'
import { useState } from 'react'
export default function Base64Tool(){ const [t,setT]=useState('hello world'), [out,setOut]=useState('')
  const enc=()=>setOut(btoa(unescape(encodeURIComponent(t)))); const dec=()=>{try{setOut(decodeURIComponent(escape(atob(t))))}catch{setOut('Invalid base64')}}
  return (<div className="space-y-3"><textarea className="textarea" value={t} onChange={e=>setT(e.target.value)}/>
    <div className="flex gap-3"><button className="btn-primary" onClick={enc}>Encode</button><button className="btn-secondary" onClick={dec}>Decode</button></div>
    <div className="card p-4 text-sm"><pre className="whitespace-pre-wrap">{out}</pre></div></div>)}
