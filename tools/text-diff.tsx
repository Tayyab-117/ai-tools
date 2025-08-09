'use client'
import { useState } from 'react'
function diff(a:string,b:string){ const A=a.split('\n'),B=b.split('\n'),max=Math.max(A.length,B.length); return Array.from({length:max},(_,i)=>({left:A[i]||'',right:B[i]||'',changed:(A[i]||'')!==(B[i]||'')})) }
export default function TextDiff(){
  const [a,setA]=useState('hello\nworld'), [b,setB]=useState('hello\nthere'); const rows=diff(a,b)
  return (<div className="space-y-3"><div className="grid gap-4 md:grid-cols-2">
    <textarea className="textarea" value={a} onChange={e=>setA(e.target.value)}/>
    <textarea className="textarea" value={b} onChange={e=>setB(e.target.value)}/></div>
    <div className="card p-0 overflow-auto"><table className="min-w-full text-sm"><thead className="bg-gray-50"><tr><th className="px-3 py-2 text-left">Left</th><th className="px-3 py-2 text-left">Right</th></tr></thead>
    <tbody>{rows.map((r,i)=>(<tr key={i} className={r.changed?'bg-red-50':''}><td className="px-3 py-1 whitespace-pre">{r.left}</td><td className="px-3 py-1 whitespace-pre">{r.right}</td></tr>))}</tbody></table></div></div>)
}
