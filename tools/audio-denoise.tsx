'use client'
import { useEffect, useState } from 'react'
import RNNoise from 'rnnoise-wasm'

export default function AudioDenoise(){
  const [module,setModule]=useState<any>(null)
  const [status,setStatus]=useState('')
  useEffect(()=>{ RNNoise().then(setModule) },[])

  const run=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault(); if(!module) return
    const file=(e.currentTarget.elements.namedItem('file') as HTMLInputElement).files?.[0]; if(!file) return
    setStatus('Processing…')
    const buf=await file.arrayBuffer(); const f32=new Float32Array(buf)
    const frameSize=480; // 30ms at 16k
    const out=new Float32Array(f32.length)
    const st = new module.RNNoise()
    for(let i=0;i<f32.length;i+=frameSize){ const frame=f32.slice(i,i+frameSize); const den = st.processFrame(frame); out.set(den,i) }
    const wavBlob = new Blob([out.buffer],{type:'application/octet-stream'}) // simplistic; real WAV header omitted
    const a=document.createElement('a'); a.href=URL.createObjectURL(wavBlob); a.download='denoised.pcm'; a.click()
    setStatus('Done (raw PCM). For WAV, rewrap in an editor).')
  }

  return (<form onSubmit={run} className="card p-4 space-y-3">
    <input className="input" type="file" name="file" accept="audio/wav,audio/pcm" required/>
    <button className="btn-primary" disabled={!module} type="submit">Denoise</button>
    <div className="text-xs text-gray-500">{module?'Ready':'Loading RNNoise WASM…'}</div>
    <div className="text-xs text-gray-500">{status}</div>
  </form>)
}

