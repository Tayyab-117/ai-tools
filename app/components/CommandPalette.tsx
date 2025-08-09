'use client'
import { useEffect, useMemo, useState } from 'react'
import { tools } from '../../lib/registry'
import { getRecents, saveRecent } from '../../lib/storage'
import { useRouter } from 'next/navigation'

export default function CommandPalette({ open, onClose }: { open: boolean, onClose: ()=>void }){
  const [q, setQ] = useState('')
  const router = useRouter()
  const recent = typeof window !== 'undefined' ? getRecents() : []
  useEffect(()=>{ if (!open) setQ('') },[open])
  if (!open) return null
  const list = useMemo(()=>{
    const base = tools
    if (!q) return base
    return base.filter(t => (t.name + ' ' + (t.keywords||[]).join(' ') + ' ' + t.tagline).toLowerCase().includes(q.toLowerCase()))
  },[q])
  return (
    <div className="fixed inset-0 z-50 bg-black/40" onClick={onClose}>
      <div className="container max-w-2xl pt-24" onClick={e=>e.stopPropagation()}>
        <div className="card p-3">
          <div className="flex items-center gap-2 rounded-lg border px-3 py-2">
            <span>🔎</span>
            <input autoFocus placeholder="Type a tool name or keyword…" value={q} onChange={(e)=>setQ(e.target.value)} className="w-full outline-none"/>
            <kbd>Esc</kbd>
          </div>
          {!q && recent.length>0 && (
            <div className="mt-3">
              <div className="text-xs text-muted-foreground mb-1">Recent</div>
              <div className="grid gap-2">
                {recent.map(slug=>{
                  const t = tools.find(x=>x.slug===slug); if (!t) return null
                  return <button key={slug} className="rounded-lg border p-3 text-left hover:bg-muted" onClick={()=>{ saveRecent(slug); router.push(`/tools/${slug}`); onClose() }}>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.tagline}</div>
                  </button>
                })}
              </div>
            </div>
          )}
          <div className="mt-3 grid gap-2 max-h-72 overflow-auto">
            {list.map(t=> (
              <button key={t.slug} className="rounded-lg border p-3 text-left hover:bg-muted" onClick={()=>{ saveRecent(t.slug); router.push(`/tools/${t.slug}`); onClose() }}>
                <div className="text-sm font-medium">{t.name} <span className="badge ml-2">{t.badge||'Local'}</span></div>
                <div className="text-xs text-muted-foreground">{t.tagline}</div>
              </button>
            ))}
            {list.length===0 && <div className="text-sm text-muted-foreground">No tools found.</div>}
          </div>
        </div>
      </div>
    </div>
  )
}
