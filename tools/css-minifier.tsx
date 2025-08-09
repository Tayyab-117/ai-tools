'use client'
import { useState } from 'react'
export default function CSSMin(){ const [t,setT]=useState('body { color: red; /* comment */ }'); const run=()=> setT(t.replace(/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,'').replace(/\s+/g,' ').replace(/\s*([{};:,])\s*/g,'$1').trim()); return (<div className="space-y-3"><textarea className="textarea" value={t} onChange={e=>setT(e.target.value)}/><button className="btn-primary" onClick={run}>Minify</button></div>) }
