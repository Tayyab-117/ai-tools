'use client'
import { useMemo, useState } from 'react'
export default function WordCounter(){
  const [t, setT] = useState('Paste your text here...')
  const stats = useMemo(()=>{
    const chars = t.length
    const words = (t.trim().match(/\S+/g) || []).length
    const sentences = (t.match(/[.!?]+/g) || []).length
    const minutes = Math.max(1, Math.round(words/200))
    return { chars, words, sentences, minutes }
  },[t])
  return (
    <div className="grid gap-3">
      <textarea value={t} onChange={e=>setT(e.target.value)} className="h-56 w-full rounded-lg border p-3" />
      <div className="grid grid-cols-4 gap-3">
        <div className="card p-3 text-center"><div className="text-xl font-semibold">{stats.words}</div><div className="text-xs text-muted-foreground">Words</div></div>
        <div className="card p-3 text-center"><div className="text-xl font-semibold">{stats.chars}</div><div className="text-xs text-muted-foreground">Characters</div></div>
        <div className="card p-3 text-center"><div className="text-xl font-semibold">{stats.sentences}</div><div className="text-xs text-muted-foreground">Sentences</div></div>
        <div className="card p-3 text-center"><div className="text-xl font-semibold">{stats.minutes}m</div><div className="text-xs text-muted-foreground">Read time</div></div>
      </div>
    </div>
  )
}
