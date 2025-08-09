'use client'
import { useState } from 'react'
export default function JSONFormatter(){
  const [input, setInput] = useState('{"hello":"world"}')
  const [error, setError] = useState<string|null>(null)
  const [output, setOutput] = useState('')
  const format = () => {
    try {
      const obj = JSON.parse(input)
      setOutput(JSON.stringify(obj, null, 2))
      setError(null)
    } catch (e:any) {
      setError(e.message); setOutput('')
    }
  }
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <textarea className="h-64 w-full rounded-lg border p-3" value={input} onChange={e=>setInput(e.target.value)}/>
      <textarea className="h-64 w-full rounded-lg border p-3 font-mono" readOnly value={output}/>
      <div className="md:col-span-2 flex items-center gap-2">
        <button className="btn btn-primary" onClick={format}>Format</button>
        {error && <span className="text-sm text-red-600">{error}</span>}
      </div>
    </div>
  )
}
