'use client'
import { useRef, useState } from 'react'
export default function EXIF(){ const [img,setImg]=useState<string|null>(null); const canvasRef=useRef<HTMLCanvasElement>(null)
  const handle=(f:File)=>{ const url=URL.createObjectURL(f); const im=new Image(); im.onload=()=>{ const c=canvasRef.current!; c.width=im.naturalWidth; c.height=im.naturalHeight; const ctx=c.getContext('2d')!; ctx.drawImage(im,0,0); setImg(c.toDataURL('image/jpeg',0.92)) }; im.src=url }
  const save=()=>{ if(!img) return; const a=document.createElement('a'); a.href=img; a.download='clean.jpg'; a.click() }
  return (<div className="space-y-3"><input type="file" accept="image/*" onChange={e=>e.target.files && handle(e.target.files[0])} className="input"/><canvas ref={canvasRef} className="hidden"/>{img && <div className="card p-4"><img src={img} className="max-w-full rounded"/><button className="btn-primary mt-3" onClick={save}>Download Clean JPG</button></div>}</div>)}
