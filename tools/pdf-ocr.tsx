'use client'
import { useState } from 'react'
import Tesseract from 'tesseract.js'
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'

async function imageToSearchablePDF(files: File[]){
  const pdfDoc = await PDFDocument.create()
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
  for(const f of files){
    const bytes = new Uint8Array(await f.arrayBuffer())
    // OCR
    const { data } = await Tesseract.recognize(bytes, 'eng', { logger: m => console.log(m) })
    const { text, words } = data
    // Embed image
    let img, dims
    if(f.type.includes('png')){ img = await pdfDoc.embedPng(bytes); dims = { w: img.width, h: img.height } }
    else { img = await pdfDoc.embedJpg(bytes); dims = { w: img.width, h: img.height } }
    const page = pdfDoc.addPage([dims.w, dims.h])
    page.drawImage(img, { x:0, y:0, width:dims.w, height:dims.h })
    // Draw invisible text (approx)
    const scaleY = 1
    page.setFont(font); page.setFontSize(12)
    for(const w of words){
      const x = w.bbox.x0, y = dims.h - w.bbox.y1
      const width = (w.bbox.x1 - w.bbox.x0); const height = (w.bbox.y1 - w.bbox.y0)
      page.drawText(w.text, { x, y, size: Math.max(8, height*0.8), color: rgb(1,1,1), opacity: 0 })
    }
  }
  const out = await pdfDoc.save()
  return new Blob([out], { type: 'application/pdf' })
}

export default function PDFOCR(){
  const [busy,setBusy]=useState(false); const [status,setStatus]=useState('')
  const onRun=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault(); const input=(e.currentTarget.elements.namedItem('files') as HTMLInputElement)
    if(!input.files || input.files.length===0) return
    setBusy(true); setStatus('Running OCR… First time can take longer to load the model.')
    const imgs = Array.from(input.files)
    const blob = await imageToSearchablePDF(imgs)
    const url = URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='ocr.pdf'; a.click()
    setBusy(false); setStatus('Done')
  }
  return (<div className="space-y-3">
    <form onSubmit={onRun} className="card p-4 space-y-3">
      <input className="input" type="file" name="files" accept="image/png,image/jpeg" multiple required/>
      <button className="btn-primary" type="submit" disabled={busy}>Create searchable PDF</button>
      {status && <div className="text-sm text-gray-600">{status}</div>}
    </form>
    <p className="text-xs text-gray-500">Tip: If you have a PDF, export its pages to images first, then run OCR. (Full PDF OCR coming soon.)</p>
  </div>)
}

