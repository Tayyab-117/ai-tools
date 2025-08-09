'use client'
import Link from 'next/link'
import { tools, categories } from '../lib/registry'

export default function Home(){
  const featured = tools.slice(0,6)
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <section className="relative border-b">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.12),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.10),transparent_40%)]"/>
        <div className="container grid items-center gap-8 py-12 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-semibold leading-tight md:text-5xl">Free AI tools that run <span className="underline decoration-primary/40 underline-offset-4">in your browser</span></h1>
            <p className="mt-3 max-w-prose text-muted-foreground">No sign‑up. No limits. Files never leave your device. Open‑model magic for documents, images, and more.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn btn-primary" href="#featured">Try popular</a>
              <Link className="btn btn-secondary" href="/tools">Browse all tools</Link>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span className="badge">Privacy‑first</span>
              <span className="badge">Works offline (PWA)</span>
              <span className="badge">Unlimited usage</span>
            </div>
          </div>
          <div className="card p-4">
            <div className="grid gap-3 md:grid-cols-2">
              {featured.map(t => (
                <Link key={t.slug} href={`/tools/${t.slug}`} className="card p-4 hover:bg-muted/50">
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.tagline}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-muted/40">
        <div className="container grid gap-6 py-8 md:grid-cols-4">
          <div className="card p-6 text-center"><div className="text-2xl font-semibold">100%</div><div className="text-xs text-muted-foreground">Local processing</div></div>
          <div className="card p-6 text-center"><div className="text-2xl font-semibold">∞</div><div className="text-xs text-muted-foreground">Unlimited usage</div></div>
          <div className="card p-6 text-center"><div className="text-2xl font-semibold">PWA</div><div className="text-xs text-muted-foreground">Installable offline</div></div>
          <div className="card p-6 text-center"><div className="text-2xl font-semibold">$0</div><div className="text-xs text-muted-foreground">Free forever</div></div>
        </div>
      </section>

      <section id="categories" className="container py-10">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Browse by category</h2>
          <Link href="/tools" className="link text-sm">View all tools</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {categories.map(c => (
            <Link key={c.slug} href={`/tools?cat=${c.slug}`} className="card p-4 hover:bg-muted/50">
              <div className="text-base font-semibold">{c.name}</div>
              <div className="text-xs text-muted-foreground">Popular: {tools.filter(t=>t.category===c.slug).map(t=>t.name).join(' · ') || 'Coming soon'}</div>
            </Link>
          ))}
        </div>
      </section>

      <section id="featured" className="container py-10">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Popular this week</h2>
          <div className="text-xs text-muted-foreground">Unlimited • No watermark • Works offline</div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featured.map(t => (
            <Link key={t.slug} href={`/tools/${t.slug}`} className="card p-4 hover:bg-muted/50">
              <div className="text-base font-semibold">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.tagline}</div>
              <div className="mt-3 text-primary text-sm">Open →</div>
            </Link>
          ))}
        </div>
      </section>

      <section id="seo" className="container py-10">
        <h2 className="mb-3 text-2xl font-semibold">Why FreeAIHub?</h2>
        <div className="prose prose-sm max-w-none">
          <p><strong>FreeAIHub</strong> provides privacy‑first AI utilities for images, documents, and productivity — all client‑side. Because your data never leaves your device, it&rsquo;s ideal for sensitive work and teams with strict data policies.</p>
          <p>Each tool is lightweight, installable as a PWA, and designed for speed. No sign‑ups, no quotas, and no watermarks.</p>
          <h3>What you can do here</h3>
          <ul>
            <li>Compress and convert images for the web.</li>
            <li>Manually remove backgrounds for product shots.</li>
            <li>Clean CSV files by trimming and deduplicating.</li>
          </ul>
        </div>
      </section>

      <section id="faq" className="container py-10">
        <h2 className="mb-4 text-2xl font-semibold">FAQ</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <details className="rounded border p-3"><summary className="font-medium cursor-pointer">Do you upload my files?</summary><p className="mt-2 text-sm text-muted-foreground">No. All processing happens locally in your browser.</p></details>
          <details className="rounded border p-3"><summary className="font-medium cursor-pointer">Is it really free?</summary><p className="mt-2 text-sm text-muted-foreground">Yes. No limits, no watermarks.</p></details>
          <details className="rounded border p-3"><summary className="font-medium cursor-pointer">Can I use it offline?</summary><p className="mt-2 text-sm text-muted-foreground">Yes. Install it as a PWA from your browser menu.</p></details>
          <details className="rounded border p-3"><summary className="font-medium cursor-pointer">How do I request a new tool?</summary><p className="mt-2 text-sm text-muted-foreground">Open an issue on GitHub or contact us from the site.</p></details>
        </div>
      </section>
    </div>
  )
}
