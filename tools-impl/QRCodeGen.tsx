'use client'
import QRCode from 'qrcode'
import { useEffect, useRef, useState } from 'react'
export default function QRCodeGen(){
  const [text, setText] = useState('https://example.com')
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(()=>{ QRCode.toCanvas(canvasRef.current, text, { margin:1, scale:6 }) },[text])
  const download = () => {
    const a = document.createElement('a')
    a.href = canvasRef.current!.toDataURL('image/png')
    a.download = 'qrcode.png'
    a.click()
  }
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <div className="card p-4">
        <label className="text-sm">Text / URL</label>
        <input value={text} onChange={e=>setText(e.target.value)} className="mt-2 w-full rounded border px-3 py-2" />
        <button className="btn btn-primary mt-3" onClick={download}>Download PNG</button>
      </div>
      <div className="card p-4 grid place-items-center">
        <canvas ref={canvasRef} />
      </div>
    </div>
  )
}
