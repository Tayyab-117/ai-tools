'use client'
import { useState } from 'react'
export default function JSONFormatter(){ const [src,setSrc]=useState('{"hello":"world"}'); const [out,setOut]=useState('')
  const pretty=()=>{ try{ setOut(JSON.stringify(JSON.parse(src),null,2)) }catch(e:any){ setOut('Syntax error: '+e.message) } }
  const minify=()=>{ try{ setOut(JSON.stringify(JSON.parse(src))) }catch(e:any){ setOut('Syntax error: '+e.message) } }
  return (<div className="space-y-3"><textarea className="textarea" value={src} onChange={e=>setSrc(e.target.value)}/>
    <div className="flex gap-3"><button className="btn-primary" onClick={pretty}>Format</button><button className="btn-secondary" onClick={minify}>Minify</button></div>
    <textarea className="textarea" value={out} readOnly/></div>)}

