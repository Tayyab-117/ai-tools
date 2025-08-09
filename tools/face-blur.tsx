'use client'
import * as faceapi from '@vladmandic/face-api'
import '@tensorflow/tfjs'
import { useEffect, useRef, useState } from 'react'

export default function FaceBlur(){
  const [ready,setReady]=useState(false); const [status,setStatus]=useState('')
  const imgRef=useRef<HTMLImageElement>(null); const canvasRef=useRef<HTMLCanvasElement>(null)

  useEffect(()=>{ (async()=>{
    // load models from public URL or CDN
    const url = 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model/'
    await faceapi.nets.tinyFaceDetector.loadFromUri(url)
    setReady(true)
  })() },[])

  const onFile=(f:File)=>{ const url=URL.createObjectURL(f); const img=new Image(); img.onload=()=>{ imgRef.current!.src=url }; img.src=url }

  const run=async()=>{
    if(!imgRef.current) return
    setStatus('Detecting faces…')
    const detections = await faceapi.detectAllFaces(imgRef.current, new faceapi.TinyFaceDetectorOptions())
    const canvas = canvasRef.current!; canvas.width = imgRef.current.naturalWidth; canvas.height = imgRef.current.naturalHeight
    const ctx=canvas.getContext('2d')!; ctx.drawImage(imgRef.current,0,0)
    for(const det of detections){
      const { x, y, width, height } = det.box
      const patch = ctx.getImageData(x,y,width,height)
      // simple box blur
      const off=document.createElement('canvas'); off.width=width; off.height=height; const octx=off.getContext('2d')!
      octx.putImageData(patch,0,0); octx.filter='blur(6px)'; octx.drawImage(off,0,0) // blur patch
      ctx.drawImage(off,x,y)
    }
    setStatus(`Blurred ${detections.length} face(s).`)
  }

  const save=()=>{ const a=document.createElement('a'); a.href=canvasRef.current!.toDataURL('image/png'); a.download='blurred.png'; a.click() }

  return (<div className="space-y-3">
    <input type="file" accept="image/*" className="input" onChange={e=>e.target.files && onFile(e.target.files[0])}/>
    <div className="card p-4 space-y-3">
      <button className="btn-primary" onClick={run} disabled={!ready}>Auto‑blur faces</button>
      <div className="text-xs text-gray-500">{ready?'Model ready':'Loading face model…'}</div>
      <div className="text-xs text-gray-500">{status}</div>
      <canvas ref={canvasRef} className="w-full rounded border"/>
      <button className="btn-secondary" onClick={save}>Download PNG</button>
    </div>
  </div>)
}

