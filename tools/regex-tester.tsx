'use client'
import { useMemo, useState } from 'react'
export default function RegexTester(){ const [pattern,setPattern]=useState('\\bhello\\b'), [flags,setFlags]=useState('i'), [text,setText]=useState('Hello world. hello!')
  const matches=useMemo(()=>{ try{ const re=new RegExp(pattern,flags); const arr=[...text.matchAll(re)].map(m=>({m:m[0],i:m.index||0})); return {arr,err:null} }catch(e:any){ return {arr:[],err:e.message} } },[pattern,flags,text])
  return (<div className="space-y-3"><div className="card p-4 flex flex-wrap items-center gap-3">
    <input className="input md:w-80" value={pattern} onChange={e=>setPattern(e.target.value)} placeholder="Pattern"/>
    <input className="input w-24" value={flags} onChange={e=>setFlags(e.target.value)} placeholder="Flags"/></div>
    <textarea className="textarea" value={text} onChange={e=>setText(e.target.value)}/>
    {matches.err? <div className="text-sm text-red-600">{matches.err}</div> : <div className="card p-4 text-sm">Matches: {matches.arr.map((x,i)=>(<span key={i} className="mr-2">[{x.m}@{x.i}]</span>))}</div>}</div>)}
