'use client'
import { useRef, useState } from 'react'
export default function ImageConverter(){ const [img,setImg]=useState<HTMLImageElement|null>(null); const [format,setFormat]=useState<'image/jpeg'|'image/png'|'image/webp'>('image/webp'); const canvasRef=useRef<HTMLCanvasElement>(null)
  const handleFiles=(f:File)=>{ const url=URL.createObjectURL(f); const image=new Image(); image.onload=()=>{ setImg(image) }; image.src=url }
  const download=()=>{ if(!img) return; const c=canvasRef.current!; c.width=img.naturalWidth; c.height=img.naturalHeight; const ctx=c.getContext('2d')!; ctx.drawImage(img,0,0); c.toBlob((blob)=>{ if(!blob) return; const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=`converted.${format==='image/webp'?'webp':format==='image/png'?'png':'jpg'}`; a.click() },format,0.92) }
  return (<div className="space-y-4">{!img && <input type="file" accept="image/*" className="input" onChange={e=>e.target.files && handleFiles(e.target.files[0])}/>}{img && <div className="space-y-3">
    <div className="card p-4 flex flex-wrap items-center gap-3"><select className="input w-48" value={format} onChange={e=>setFormat(e.target.value as any)}>
      <option value="image/webp">WEBP</option><option value="image/png">PNG</option><option value="image/jpeg">JPG</option></select>
      <button className="btn-primary" onClick={download}>Download</button></div>
    <div className="card p-4"><canvas ref={canvasRef} className="w-full rounded border"/></div></div>}</div>)}

