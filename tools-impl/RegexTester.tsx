'use client'
import { useMemo, useState } from 'react'
export default function RegexTester(){
  const [pattern, setPattern] = useState('\\b[a-z]+\\b')
  const [flags, setFlags] = useState('gi')
  const [text, setText] = useState('Hello hello 123 world')
  const output = useMemo(()=>{
    try {
      const re = new RegExp(pattern, flags)
      const parts = text.split(re)
      const matches = text.match(re) || []
      return { parts, matches, error: null }
    } catch (e:any) {
      return { parts: [text], matches: [], error: e.message }
    }
  }, [pattern, flags, text])
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <div className="space-y-2">
        <input value={pattern} onChange={e=>setPattern(e.target.value)} className="w-full rounded border px-3 py-2" placeholder="Pattern" />
        <input value={flags} onChange={e=>setFlags(e.target.value)} className="w-full rounded border px-3 py-2" placeholder="Flags (e.g., gmi)" />
        <textarea value={text} onChange={e=>setText(e.target.value)} className="h-48 w-full rounded border p-3" />
        {output.error && <div className="text-sm text-red-600">{output.error}</div>}
      </div>
      <div className="card p-3 text-sm leading-7">
        {text.split(/(\s+)/).map((chunk,i)=>{
          if (chunk.trim()==='') return <span key={i}>{chunk}</span>
          try {
            const re = new RegExp(pattern, flags)
            return re.test(chunk) ? <mark key={i} className="px-1 rounded">{chunk}</mark> : <span key={i}>{chunk}</span>
          } catch { return <span key={i}>{chunk}</span> }
        })}
        <div className="mt-3 text-xs text-muted-foreground">Matches: {output.matches.length}</div>
      </div>
    </div>
  )
}
