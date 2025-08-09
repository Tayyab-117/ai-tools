'use client'
import { useState } from 'react'
import { PDFDocument } from 'pdf-lib'
export default function PDFTools(){
  const [status,setStatus]=useState('Select a PDF to split or merge.'); const [outUrl,setOutUrl]=useState<string>(''); const [mode,setMode]=useState<'split'|'merge'>('split'); const [pages,setPages]=useState('1-2')
  async function split(file: File){ setStatus('Reading PDF…'); const bytes = await file.arrayBuffer(); const src = await PDFDocument.load(bytes); const doc = await PDFDocument.create(); const ranges = pages.split(',').map(r=>r.trim())
    for(const r of ranges){ if(r.includes('-')){ const [a,b]=r.split('-').map(x=>parseInt(x)); const copied = await doc.copyPages(src, Array.from({length:(b-a+1)},(_,i)=>a-1+i)); copied.forEach(p=>doc.addPage(p)) } else { const idx=parseInt(r)-1; const copied = await doc.copyPages(src, [idx]); doc.addPage(copied[0]) } }
    const out = await doc.save(); const url = URL.createObjectURL(new Blob([out],{type:'application/pdf'})); setOutUrl(url); setStatus('Done. Download below.') }
  async function merge(list: FileList){ setStatus('Reading PDFs…'); const doc = await PDFDocument.create(); for(const f of Array.from(list)){ const src = await PDFDocument.load(await f.arrayBuffer()); const copied = await doc.copyPages(src, src.getPageIndices()); copied.forEach(p=>doc.addPage(p)) }
    const out = await doc.save(); const url = URL.createObjectURL(new Blob([out],{type:'application/pdf'})); setOutUrl(url); setStatus('Done. Download below.') }
  return (<div className="space-y-4"><div className="card p-4 space-y-3">
    <div className="flex flex-wrap items-center gap-3"><select className="input w-40" value={mode} onChange={e=>setMode(e.target.value as any)}>
      <option value="split">Split (by pages)</option><option value="merge">Merge (multiple PDFs)</option></select>
      {mode==='split' ? (<><input type="file" accept="application/pdf" className="input" onChange={e=>{ const f=e.target.files?.[0]; if(f) split(f) }}/>
        <input className="input w-40" value={pages} onChange={e=>setPages(e.target.value)} placeholder="e.g., 1,3-5"/></>)
        : (<input type="file" accept="application/pdf" className="input" multiple onChange={e=>{ const fs=e.target.files; if(fs) merge(fs!) }}/>)}
    </div><div className="text-sm text-gray-600">{status}</div>{outUrl && <a className="btn-primary inline-block" href={outUrl} download={mode==='split'?'split.pdf':'merged.pdf'}>Download PDF</a>}</div></div>)}

