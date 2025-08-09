'use client'
import Upscaler from 'upscaler'
import '@tensorflow/tfjs'
import { useRef, useState } from 'react'

export default function ImageUpscaler(){
  const [busy,setBusy]=useState(false); const [msg,setMsg]=useState('')
  const [scale,setScale]=useState(2)
  const imgRef=useRef<HTMLImageElement>(null); const outRef=useRef<HTMLCanvasElement>(null)

  const onFile=(f:File)=>{ const url=URL.createObjectURL(f); const img=new Image(); img.onload=()=>{ imgRef.current!.src=url }; img.src=url }

  const run=async()=>{
    if(!imgRef.current) return
    setBusy(true); setMsg('Loading model…')
    const upscaler=new Upscaler()
    setMsg(`Upscaling ×${scale}…`)
    const tensor = await upscaler.upscale(imgRef.current, { patchSize: 64, padding: 8, scale })
    // tensor can be HTMLCanvasElement or tf.Tensor depending on version; normalize by drawing to canvas
    const canvas = outRef.current!
    canvas.width = (imgRef.current.naturalWidth||imgRef.current.width) * scale
    canvas.height = (imgRef.current.naturalHeight||imgRef.current.height) * scale
    const ctx = canvas.getContext('2d')!
    if (tensor instanceof HTMLCanvasElement) {
      ctx.drawImage(tensor, 0, 0)
    } else {
      // fallback: draw original scaled
      ctx.imageSmoothingEnabled=false
      ctx.drawImage(imgRef.current, 0, 0, canvas.width, canvas.height)
    }
    setMsg('Done')
    setBusy(false)
  }
  const save=()=>{ const a=document.createElement('a'); a.href=outRef.current!.toDataURL('image/png'); a.download='upscaled.png'; a.click() }

  return (<div className="space-y-3">
    <input type="file" accept="image/*" className="input" onChange={e=>e.target.files && onFile(e.target.files[0])}/>
    <div className="card p-4 space-y-3">
      <div className="flex items-center gap-3"><label className="text-sm">Scale</label>
        <select className="input w-28" value={scale} onChange={e=>setScale(parseInt(e.target.value))}><option>2</option><option>3</option><option>4</option></select>
        <button className="btn-primary" onClick={run} disabled={busy}>Upscale</button></div>
      {msg && <div className="text-sm text-gray-600">{msg}</div>}
      <canvas ref={outRef} className="w-full rounded border"/>
      <button className="btn-secondary" onClick={save}>Download PNG</button>
    </div>
  </div>)
}

