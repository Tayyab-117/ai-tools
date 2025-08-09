'use client'
import * as bodyPix from '@tensorflow-models/body-pix'
import '@tensorflow/tfjs'
import { useRef, useState } from 'react'

export default function BackgroundRemover(){
  const [busy,setBusy]=useState(false)
  const [msg,setMsg]=useState<string>('')
  const imgRef=useRef<HTMLImageElement>(null)
  const canvasRef=useRef<HTMLCanvasElement>(null)

  const onFile=(f:File)=>{
    const url=URL.createObjectURL(f); const img=new Image(); img.onload=()=>{ imgRef.current!.src=url }
    img.src=url
  }

  const run=async()=>{
    if(!imgRef.current) return
    setBusy(true); setMsg('Loading model…')
    const net=await bodyPix.load({architecture:'MobileNetV1', outputStride:16, multiplier:0.75, quantBytes:2})
    setMsg('Segmenting…')
    const seg=await net.segmentPerson(imgRef.current,{internalResolution:'medium'})
    const canvas=canvasRef.current!; canvas.width=imgRef.current.naturalWidth; canvas.height=imgRef.current.naturalHeight
    const ctx=canvas.getContext('2d')!
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.drawImage(imgRef.current,0,0)
    const imageData=ctx.getImageData(0,0,canvas.width,canvas.height)
    for(let i=0;i<seg.data.length;i++){ if(seg.data[i]===0){ imageData.data[i*4+3]=0 } }
    ctx.putImageData(imageData,0,0)
    setMsg('Done')
    setBusy(false)
  }

  const save=()=>{ const a=document.createElement('a'); a.href=canvasRef.current!.toDataURL('image/png'); a.download='cutout.png'; a.click() }

  return (<div className="space-y-3">
    <input type="file" accept="image/*" className="input" onChange={e=>e.target.files && onFile(e.target.files[0])}/>
    <div className="card p-4 space-y-3">
      <button className="btn-primary" onClick={run} disabled={busy}>Remove background</button>
      {msg && <div className="text-sm text-gray-600">{msg}</div>}
      <img ref={imgRef} alt="" className="max-w-full hidden"/>
      <canvas ref={canvasRef} className="w-full rounded border"/>
      <button className="btn-secondary" onClick={save}>Download PNG</button>
    </div>
  </div>)
}

