'use client'
import { useState } from 'react'
export default function JSONFormatter(){
  const [src,setSrc]=useState('{"hello":"world"}'); const [out,setOut]=useState('')
  const format=()=>{ try{ const obj=JSON.parse(src); setOut(JSON.stringify(obj,null,2)) }catch(e:any){ setOut('Syntax error: '+e.message) } }
  const minify=()=>{ try{ const obj=JSON.parse(src); setOut(JSON.stringify(obj)) }catch(e:any){ setOut('Syntax error: '+e.message) } }
  return (<div className="space-y-3"><div className="grid gap-4 md:grid-cols-2"><textarea className="textarea" value={src} onChange={e=>setSrc(e.target.value)}/><textarea className="textarea" value={out} readOnly/></div><div className="flex gap-2"><button className="btn-primary" onClick={format}>Format</button><button className="btn-secondary" onClick={minify}>Minify</button></div></div>)
}
