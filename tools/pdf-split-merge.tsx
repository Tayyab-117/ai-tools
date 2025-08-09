'use client'
import { useState } from 'react'
import { PDFDocument } from 'pdf-lib'

export default function PDFSplitMerge(){
  const [status,setStatus]=useState('')

  const split=async(file:File)=>{
    const bytes=await file.arrayBuffer(); const src=await PDFDocument.load(bytes)
    for(let i=0;i<src.getPageCount();i++){ const out=await PDFDocument.create(); const [p]=await out.copyPages(src,[i]); out.addPage(p); const blob=new Blob([await out.save()],{type:'application/pdf'})
      const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=`page-${i+1}.pdf`; a.click() }
  }

  const merge=async(files:FileList)=>{
    const out=await PDFDocument.create()
    for(const f of Array.from(files)){ const bytes=await f.arrayBuffer(); const src=await PDFDocument.load(bytes); const pages=await out.copyPages(src, src.getPageIndices()); pages.forEach(p=>out.addPage(p)) }
    const blob=new Blob([await out.save()],{type:'application/pdf'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='merged.pdf'; a.click()
  }

  return (<div className="space-y-4">
    <div className="card p-4 space-y-2">
      <div className="font-semibold">Split PDF into pages</div>
      <input className="input" type="file" accept="application/pdf" onChange={e=>e.target.files && split(e.target.files[0])}/>
    </div>
    <div className="card p-4 space-y-2">
      <div className="font-semibold">Merge PDFs</div>
      <input className="input" type="file" accept="application/pdf" multiple onChange={e=>e.target.files && merge(e.target.files)}/>
    </div>
    <div className="text-xs text-gray-500">{status}</div>
  </div>)
}

