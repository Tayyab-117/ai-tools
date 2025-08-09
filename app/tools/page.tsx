'use client'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { tools } from '../../lib/registry'
export default function ToolsDirectory(){
  const [q,setQ]=useState(''); const [cat,setCat]=useState('all')
  const list = useMemo(()=>{ const term=q.toLowerCase(); return tools.filter(t => (cat==='all'||t.category===cat) && (t.name+t.tagline+t.seo.longDescription).toLowerCase().includes(term)) },[q,cat])
  return (<div className="container py-10">
    <div className="mb-4 flex flex-wrap items-center gap-2">
      <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search tools…" className="input md:w-96"/>
      <select className="input md:w-56" value={cat} onChange={e=>setCat(e.target.value)}>
        <option value="all">All categories</option><option value="images">Images</option><option value="audio">Audio</option><option value="video">Video</option><option value="pdf">PDF</option><option value="utilities">Utilities</option>
      </select>
    </div>
    <div className="grid gap-4 md:grid-cols-3">
      {list.map(t=>(<Link key={t.slug} href={`/tools/${t.slug}`} className="card p-4 hover:bg-gray-50"><div className="text-base font-semibold">{t.name} <span className="badge ml-2">Local</span></div><div className="text-sm text-gray-600">{t.tagline}</div></Link>))}
    </div>
  </div>)
}

