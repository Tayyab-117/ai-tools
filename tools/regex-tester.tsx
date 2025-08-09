'use client'
import { useMemo, useState } from 'react'
export default function Regex(){ const [p,setP]=useState('\\bhello\\b'), [f,setF]=useState('i'), [t,setT]=useState('Hello hello')
  const res=useMemo(()=>{ try{ const re=new RegExp(p,f); return { arr:[...t.matchAll(re)].map(m=>({m:m[0],i:m.index||0})), err:null } }catch(e:any){ return {arr:[],err:e.message} } },[p,f,t])
  return (<div className="space-y-3"><div className="card p-4 flex items-center gap-3"><input className="input md:w-80" value={p} onChange={e=>setP(e.target.value)} placeholder="Pattern"/><input className="input w-24" value={f} onChange={e=>setF(e.target.value)} placeholder="Flags"/></div><textarea className="textarea" value={t} onChange={e=>setT(e.target.value)}/>{res.err? <div className="text-sm text-red-600">{res.err}</div> : <div className="card p-4 text-sm">Matches: {res.arr.map((x,i)=>(<span key={i} className="mr-2">[{x.m}@{x.i}]</span>))}</div>}</div>)}
