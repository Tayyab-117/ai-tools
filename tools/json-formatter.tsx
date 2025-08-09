'use client'
import { useState } from 'react'
export default function JSONFormatter(){
  const [src,setSrc]=useState('{"hello":"world"}'); const [out,setOut]=useState('')
  const run=()=>{ try{ const obj=JSON.parse(src); setOut(JSON.stringify(obj,null,2)) }catch(e:any){ setOut('Syntax error: '+e.message) } }
  return (<div className="space-y-3"><div className="grid gap-4 md:grid-cols-2">
    <textarea className="textarea" value={src} onChange={e=>setSrc(e.target.value)}/>
    <textarea className="textarea" value={out} readOnly/></div>
    <button className="btn-primary" onClick={run}>Format</button></div>)
}
