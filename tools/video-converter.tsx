'use client'
import { useEffect, useState } from 'react'
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg'

export default function VideoConverter(){
  const [ffmpeg,setFFmpeg]=useState<any>(null)
  const [log,setLog]=useState<string>('')
  const [busy,setBusy]=useState(false)
  useEffect(()=>{ const f=createFFmpeg({ log: true }); setFFmpeg(f) },[])

  const run=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault(); if(!ffmpeg) return
    const form=e.currentTarget; const file=(form.elements.namedItem('file') as HTMLInputElement).files?.[0]; if(!file) return
    const format=(form.elements.namedItem('format') as HTMLSelectElement).value
    setBusy(true); await ffmpeg.load()
    ffmpeg.FS('writeFile','in', await fetchFile(file))
    setLog('Converting…')
    if(format==='gif'){ await ffmpeg.run('-i','in','-vf','fps=12,scale=640:-1:flags=lanczos','out.gif') }
    else { await ffmpeg.run('-i','in','-c:v','libx264','-crf','28','-preset','veryfast','out.mp4') }
    const outName = format==='gif' ? 'out.gif' : 'out.mp4'
    const data = ffmpeg.FS('readFile', outName)
    const url = URL.createObjectURL(new Blob([data.buffer],{type: format==='gif'?'image/gif':'video/mp4'}))
    const a=document.createElement('a'); a.href=url; a.download=outName; a.click()
    setBusy(false); setLog('Done.')
  }

  return (<form onSubmit={run} className="card p-4 space-y-3">
    <input className="input" type="file" name="file" accept="video/*" required/>
    <div className="flex items-center gap-3"><label className="text-sm">Format</label>
      <select name="format" className="input w-28"><option value="gif">GIF</option><option value="mp4">MP4</option></select>
      <button className="btn-primary" type="submit" disabled={busy || !ffmpeg}>Convert</button></div>
    <div className="text-xs text-gray-500">{log || 'First run downloads FFmpeg.wasm (~20MB).'}</div>
  </form>)
}

