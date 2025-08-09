'use client'
import { useState, useMemo } from 'react'
import { marked } from 'marked'
export default function MD(){ const [t,setT]=useState('# Hello'); const html=useMemo(()=> marked.parse(t) as string,[t])
  return (<div className="grid gap-4 md:grid-cols-2"><textarea className="textarea" value={t} onChange={e=>setT(e.target.value)}/><div className="card p-4 prose" dangerouslySetInnerHTML={{__html: html}}/></div>)}
