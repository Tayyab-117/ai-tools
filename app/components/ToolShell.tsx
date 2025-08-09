'use client'
import Link from 'next/link'
import { isFav, toggleFav } from '../../lib/storage'
import { useEffect, useState } from 'react'
import { tools } from '../../lib/registry'

export default function ToolShell({ slug, title, tagline, children }:{ slug:string, title:string, tagline:string, children: React.ReactNode }){
  const [fav, setFav] = useState(false)
  const tool = tools.find(t => t.slug === slug)
  const related = (tool?.seo?.related || []).map(r => tools.find(t=>t.slug===r)).filter(Boolean) as any[]
  useEffect(()=>{ setFav(isFav(slug)) },[slug])
  const onFav = () => { toggleFav(slug); setFav(isFav(slug)) }

  return (
    <div className="container py-8">
      <div className="mb-3 text-sm">
        <Link href="/" className="link">Home</Link> <span className="text-muted-foreground">/</span> <Link href="/tools" className="link">All tools</Link> <span className="text-muted-foreground">/</span> <span className="text-muted-foreground">{title}</span>
      </div>
      <div className="mb-2 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <div className="flex items-center gap-2">
          <Link href="/tools" className="btn btn-secondary">← Back to tools</Link>
          <button className="btn btn-secondary" onClick={onFav}>{fav? '★ Favorited' : '☆ Favorite'}</button>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{tagline}</p>

      <div className="mt-5 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 card p-4">
          {children}
        </div>
        <aside className="space-y-4">
          {tool?.seo?.longDescription && (
            <div className="card p-4">
              <div className="font-semibold mb-2">About this tool</div>
              <p className="text-sm text-muted-foreground">{tool.seo.longDescription}</p>
            </div>
          )}
          {!!(tool?.seo?.howTo?.length) && (
            <div className="card p-4">
              <div className="font-semibold mb-2">How to use</div>
              <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
                {tool!.seo!.howTo!.map((s,i)=>(<li key={i}>{s}</li>))}
              </ol>
            </div>
          )}
          {!!(tool?.seo?.useCases?.length) && (
            <div className="card p-4">
              <div className="font-semibold mb-2">Use cases</div>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                {tool!.seo!.useCases!.map((s,i)=>(<li key={i}>{s}</li>))}
              </ul>
            </div>
          )}
          {!!(tool?.seo?.faq?.length) && (
            <div className="card p-4">
              <div className="font-semibold mb-2">FAQ</div>
              <div className="space-y-2">
                {tool!.seo!.faq!.map((f,i)=>(
                  <details key={i} className="rounded border p-2">
                    <summary className="cursor-pointer text-sm font-medium">{f.q}</summary>
                    <p className="mt-1 text-sm text-muted-foreground">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          )}
          {!!related.length && (
            <div className="card p-4">
              <div className="font-semibold mb-2">Related tools</div>
              <div className="grid gap-2">
                {related.map(r=> (
                  <Link key={r.slug} href={`/tools/${r.slug}`} className="rounded-lg border p-3 hover:bg-muted/60">
                    <div className="text-sm font-medium">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.tagline}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}
