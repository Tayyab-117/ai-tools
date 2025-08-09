'use client'
import { useState } from 'react'
export default function CSV2JSON(){ const [csv,setCsv]=useState('name,age\nAli,22'); const [out,setOut]=useState('')
  const run=()=>{ const [header,*rows]=csv.trim().split('\n'); const cols=header.split(','); const json=rows.map(r=>{ const vals=r.split(','); const obj:any={}; cols.forEach((c,i)=>obj[c]=vals[i]); return obj }); setOut(JSON.stringify(json,null,2)) }
  return (<div className="space-y-3"><div className="grid gap-4 md:grid-cols-2"><textarea className="textarea" value={csv} onChange={e=>setCsv(e.target.value)}/><textarea className="textarea" value={out} readOnly/></div><button className="btn-primary" onClick={run}>Convert</button></div>)}
