'use client'
import Link from 'next/link'
import { isFav, toggleFav } from '../../lib/storage'
import { useEffect, useState } from 'react'
import type { ToolDefinition } from '../../lib/types'

export default function ToolShell({ tool, children }:{ tool: ToolDefinition, children: React.ReactNode }){
  const [fav, setFav] = useState(false)
  useEffect(()=>{ setFav(isFav(tool.slug)) },[tool.slug])
  const onFav = () => { toggleFav(tool.slug); setFav(isFav(tool.slug)) }

  return (
    <div className="container py-8">
      <nav className="mb-3 text-xs text-muted-foreground">
        <Link href="/">Home</Link> <span className="px-1">/</span>
        <Link href="/tools">Tools</Link> <span className="px-1">/</span>
        <span>{tool.name}</span>
      </nav>

      <div className="mb-1 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">{tool.name}</h1>
        <div className="flex gap-2">
          <button className="btn btn-secondary" onClick={onFav}>{fav? '★ Favorited' : '☆ Favorite'}</button>
          <Link href="/tools" className="btn btn-secondary">← Back to tools</Link>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{tool.tagline}</p>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="card p-4">{children}</div>
        </div>
        <aside className="space-y-4">
          {tool.seo?.longDescription && (
            <div className="card p-4">
              <div className="mb-1 text-sm font-semibold">About this tool</div>
              <p className="text-sm text-muted-foreground">{tool.seo.longDescription}</p>
            </div>
          )}
          {tool.howTo && tool.howTo.length>0 && (
            <div className="card p-4">
              <div className="mb-1 text-sm font-semibold">How to use</div>
              <ol className="list-decimal pl-4 text-sm text-muted-foreground space-y-1">
                {tool.howTo.map((s,i)=>(<li key={i}>{s}</li>))}
              </ol>
            </div>
          )}
          {tool.useCases && tool.useCases.length>0 && (
            <div className="card p-4">
              <div className="mb-1 text-sm font-semibold">Use cases</div>
              <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
                {tool.useCases.map((s,i)=>(<li key={i}>{s}</li>))}
              </ul>
            </div>
          )}
          {tool.faq && tool.faq.length>0 && (
            <div className="card p-4">
              <div className="mb-1 text-sm font-semibold">FAQs</div>
              <ul className="space-y-2 text-sm">
                {tool.faq.map((f,i)=>(<li key={i}><div className="font-medium">{f.q}</div><div className="text-muted-foreground">{f.a}</div></li>))}
              </ul>
            </div>
          )}
          {tool.related && tool.related.length>0 && (
            <div className="card p-4">
              <div className="mb-1 text-sm font-semibold">Related tools</div>
              <div className="grid gap-2">
                {tool.related.map(slug=>(<Link key={slug} href={`/tools/${slug}`} className="rounded-lg border p-2 text-sm hover:bg-muted/60">{slug}</Link>))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}
