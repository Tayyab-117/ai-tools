'use client'
import { useMemo, useState } from 'react'
const WORDS = 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'.split(' ')
export default function LoremIpsum(){
  const [paras, setParas] = useState(3)
  const text = useMemo(()=>{
    const out:string[]=[]; for(let p=0;p<paras;p++){ let s=''; for(let i=0;i<80;i++){ s += WORDS[Math.floor(Math.random()*WORDS.length)] + ' ' } out.push(s.trim()+'.') } return out.join('\n\n')
  },[paras])
  return (
    <div className="space-y-3">
      <label className="text-sm">Paragraphs</label>
      <input type="range" min={1} max={10} value={paras} onChange={e=>setParas(parseInt(e.target.value))} />
      <textarea className="h-64 w-full rounded border p-3" readOnly value={text} />
      <button className="btn btn-primary" onClick={()=>navigator.clipboard.writeText(text)}>Copy</button>
    </div>
  )
}
