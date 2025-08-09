'use client'
import { useState } from 'react'
export default function Accordion({ items }:{ items:{title:string,content:string}[] }){
  const [open,setOpen]=useState<number|null>(0)
  return (<div className="space-y-2">
    {items.map((it,i)=>(<div key={i} className="rounded-xl border bg-white">
      <button className="w-full px-4 py-3 text-left font-medium" onClick={()=>setOpen(open===i?null:i)}>{it.title}</button>
      {open===i && <div className="px-4 pb-4 text-sm text-gray-700">{it.content}</div>}
    </div>))}
  </div>)
}
