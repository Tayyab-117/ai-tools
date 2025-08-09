'use client'
import { useState } from 'react'
export default function HTMLMin(){ const [t,setT]=useState('<div> Hello </div>'); const run=()=> setT(t.replace(/>\s+</g,'><').replace(/\s{2,}/g,' ').trim()); return (<div className="space-y-3"><textarea className="textarea" value={t} onChange={e=>setT(e.target.value)}/><button className="btn-primary" onClick={run}>Minify</button></div>) }
