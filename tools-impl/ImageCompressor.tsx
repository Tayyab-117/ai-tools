'use client'
import { useRef, useState } from 'react'
import DropZone from '../app/components/DropZone'

export default function ImageCompressor(){
  const [img, setImg] = useState<HTMLImageElement|null>(null)
  const [quality, setQuality] = useState(0.8)
  const [format, setFormat] = useState<'image/jpeg'|'image/webp'>('image/webp')
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const handleFiles = async (files: File[]) => {
    const f = files[0]
    const url = URL.createObjectURL(f)
    const image = new Image()
    image.onload = () => { setImg(image) }
    image.src = url
  }

  const download = () => {
    if (!img) return
    const canvas = canvasRef.current!
    canvas.width = img.naturalWidth
    canvas.height = img.naturalHeight
    const ctx = canvas.getContext('2d')!
    ctx.drawImage(img, 0, 0)
    canvas.toBlob((blob)=>{
      if (!blob) return
      const a = document.createElement('a')
      a.href = URL.createObjectURL(blob)
      a.download = `compressed.${format==='image/webp'?'webp':'jpg'}`
      a.click()
    }, format, quality)
  }

  return (
    <div className="space-y-4">
      {!img && <DropZone onFiles={handleFiles} accept="image/*"/>}
      {img && (
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card p-4">
            <img src={img.src} alt="preview" className="w-full rounded" />
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <label className="text-sm">Format</label>
              <select className="rounded border px-2 py-1" value={format} onChange={e=>setFormat(e.target.value as any)}>
                <option value="image/webp">WEBP (smaller)</option>
                <option value="image/jpeg">JPG</option>
              </select>
              <label className="text-sm ml-4">Quality</label>
              <input type="range" min={0.4} max={1} step={0.05} value={quality} onChange={e=>setQuality(parseFloat(e.target.value))} />
              <span className="text-sm">{Math.round(quality*100)}%</span>
              <button className="btn btn-primary ml-auto" onClick={download}>Download</button>
            </div>
          </div>
          <div className="card p-4">
            <div className="text-sm font-semibold mb-2">Output preview</div>
            <canvas ref={canvasRef} className="w-full rounded border"/>
          </div>
        </div>
      )}
    </div>
  )
}
