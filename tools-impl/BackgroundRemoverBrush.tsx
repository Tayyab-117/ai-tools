'use client'
import { useEffect, useRef, useState } from 'react'
import DropZone from '../app/components/DropZone'

export default function BackgroundRemoverBrush(){
  const [img, setImg] = useState<HTMLImageElement|null>(null)
  const [brush, setBrush] = useState(35)
  const [erasing, setErasing] = useState(true)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const handleFiles = (files: File[]) => {
    const f = files[0]
    const url = URL.createObjectURL(f)
    const image = new Image()
    image.onload = () => {
      setImg(image)
      const canvas = canvasRef.current!
      canvas.width = image.naturalWidth
      canvas.height = image.naturalHeight
      const ctx = canvas.getContext('2d')!
      ctx.drawImage(image, 0, 0)
    }
    image.src = url
  }

  useEffect(()=>{
    const canvas = canvasRef.current
    if(!canvas) return
    let drawing = false
    const ctx = canvas.getContext('2d')!

    const start = (x:number,y:number)=>{ drawing = true; draw(x,y) }
    const end = ()=>{ drawing = false }
    const draw = (x:number,y:number)=>{
      if(!drawing) return
      ctx.save()
      ctx.globalCompositeOperation = erasing ? 'destination-out' : 'source-over'
      ctx.beginPath()
      ctx.arc(x, y, brush, 0, Math.PI*2)
      ctx.fillStyle = 'rgba(0,0,0,1)'
      ctx.fill()
      ctx.restore()
    }

    const getXY = (e:MouseEvent|TouchEvent)=>{
      const r = canvas.getBoundingClientRect()
      if (e instanceof TouchEvent){
        const t = e.touches[0]
        return { x: (t.clientX - r.left) * (canvas.width/r.width), y: (t.clientY - r.top) * (canvas.height/r.height) }
      } else {
        const m = e as MouseEvent
        return { x: (m.clientX - r.left) * (canvas.width/r.width), y: (m.clientY - r.top) * (canvas.height/r.height) }
      }
    }

    const md = (e:MouseEvent)=>{ e.preventDefault(); const {x,y}=getXY(e); start(x,y) }
    const mm = (e:MouseEvent)=>{ const {x,y}=getXY(e); draw(x,y) }
    const mu = ()=> end()
    const td = (e:TouchEvent)=>{ e.preventDefault(); const {x,y}=getXY(e); start(x,y) }
    const tm = (e:TouchEvent)=>{ const {x,y}=getXY(e); draw(x,y) }
    const tu = ()=> end()

    canvas.addEventListener('mousedown', md)
    canvas.addEventListener('mousemove', mm)
    window.addEventListener('mouseup', mu)
    canvas.addEventListener('touchstart', td, {passive:false})
    canvas.addEventListener('touchmove', tm, {passive:false})
    window.addEventListener('touchend', tu)
    return ()=>{
      canvas.removeEventListener('mousedown', md)
      canvas.removeEventListener('mousemove', mm)
      window.removeEventListener('mouseup', mu)
      canvas.removeEventListener('touchstart', td)
      canvas.removeEventListener('touchmove', tm)
      window.removeEventListener('touchend', tu)
    }
  },[brush, erasing])

  const download = () => {
    const a = document.createElement('a')
    a.href = canvasRef.current!.toDataURL('image/png')
    a.download = 'cutout.png'
    a.click()
  }

  return (
    <div className="space-y-4">
      {!img && <DropZone onFiles={handleFiles} accept="image/*"/>}
      {img && (
        <div className="space-y-3">
          <div className="card p-3 flex flex-wrap items-center gap-3">
            <label className="text-sm">Brush size</label>
            <input type="range" min={5} max={100} value={brush} onChange={e=>setBrush(parseInt(e.target.value))} />
            <span className="text-sm">{brush}px</span>
            <button className="btn btn-secondary" onClick={()=>setErasing(e=>!e)}>{erasing? 'Erase' : 'Paint back'}</button>
            <button className="btn btn-primary" onClick={download}>Download PNG</button>
          </div>
          <div className="card p-2 overflow-auto">
            <canvas ref={canvasRef} className="max-w-full" />
          </div>
        </div>
      )}
    </div>
  )
}
