'use client'
import { useState } from 'react'
export default function TS(){ const [ts,setTs]=useState(Math.floor(Date.now()/1000).toString()); const d=new Date(parseInt(ts||'0')*1000||0)
  return (<div className="space-y-3"><input className="input" value={ts} onChange={e=>setTs(e.target.value)}/><div className="card p-4 text-sm">{isNaN(d.getTime())?'Invalid':d.toISOString()}</div></div>)}
