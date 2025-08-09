'use client'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { tools, categories } from '../../lib/registry'

export default function ToolsDirectory(){
  const [q, setQ] = useState('')
  const [cat, setCat] = useState<string>('all')
  const list = useMemo(()=>{
    return tools.filter(t => (cat==='all' || t.category===cat) && (t.name + ' ' + (t.keywords||[]).join(' ') + ' ' + t.tagline).toLowerCase().includes(q.toLowerCase()))
  },[q, cat])
  return (
    <div className="container py-10">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search tools…" className="w-full rounded-lg border px-3 py-2 md:w-96" />
        <select className="rounded border px-2 py-2" value={cat} onChange={e=>setCat(e.target.value)}>
          <option value="all">All categories</option>
          {categories.map(c=>(<option key={c.slug} value={c.slug}>{c.name}</option>))}
        </select>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {list.map(t => (
          <Link key={t.slug} href={`/tools/${t.slug}`} className="card p-4 hover:bg-muted/50">
            <div className="text-base font-semibold">{t.name} <span className="badge ml-2">{t.badge||'Local'}</span></div>
            <div className="text-sm text-muted-foreground">{t.tagline}</div>
          </Link>
        ))}
        {list.length===0 && <div className="text-sm text-muted-foreground">No tools found.</div>}
      </div>
      <p className="mt-6 text-sm text-muted-foreground">Looking for something else? Hit <span className="badge">⌘/Ctrl + K</span> to open the command palette and search across all tools.</p>
    </div>
  )
}
