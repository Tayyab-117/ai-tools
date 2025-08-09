'use client'
import { useEffect, useRef, useState } from 'react'; import QRCode from 'qrcode'
export default function QRCodeGen(){ const [text,setText]=useState('https://example.com'); const [size,setSize]=useState(256); const [level,setLevel]=useState<'L'|'M'|'Q'|'H'>('M'); const canvasRef=useRef<HTMLCanvasElement>(null)
  useEffect(()=>{ QRCode.toCanvas(canvasRef.current, text, { width: size, errorCorrectionLevel: level }) },[text,size,level])
  const download=()=>{ const a=document.createElement('a'); a.href=canvasRef.current!.toDataURL('image/png'); a.download='qr.png'; a.click() }
  return (<div className="space-y-3"><div className="card p-4 flex flex-wrap items-center gap-3">
    <input className="input md:w-96" value={text} onChange={e=>setText(e.target.value)} placeholder="Enter URL or text"/>
    <select className="input w-24" value={level} onChange={e=>setLevel(e.target.value as any)}><option>L</option><option>M</option><option>Q</option><option>H</option></select>
    <input type="number" className="input w-28" value={size} onChange={e=>setSize(parseInt(e.target.value||'256'))}/>
    <button className="btn-primary" onClick={download}>Download PNG</button></div>
    <div className="card p-4"><canvas ref={canvasRef}/></div></div>)}

