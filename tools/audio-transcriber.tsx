'use client'
import { useEffect, useState } from 'react'
import { pipeline } from '@xenova/transformers'

export default function AudioTranscriber(){
  const [asr,setAsr]=useState<any>(null)
  const [text,setText]=useState<string>('')
  const [busy,setBusy]=useState(false)
  useEffect(()=>{ (async()=>{
    const p = await pipeline('automatic-speech-recognition','Xenova/whisper-tiny.en')
    setAsr(p)
  })() },[])
  const run=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault(); if(!asr) return
    const file=(e.currentTarget.elements.namedItem('file') as HTMLInputElement).files?.[0]; if(!file) return
    setBusy(true); const out=await asr(file)
    setText(out.text); setBusy(false)
  }
  return (<div className="space-y-3">
    <form onSubmit={run} className="card p-4 space-y-3">
      <input className="input" type="file" name="file" accept="audio/*" required/>
      <button className="btn-primary" type="submit" disabled={!asr || busy}>Transcribe (English)</button>
      <div className="text-xs text-gray-500">{!asr?'Loading model (~75MB) on first use…':'Model ready'}</div>
    </form>
    <textarea className="textarea" value={text} readOnly placeholder="Transcript will appear here"/>
  </div>)
}

