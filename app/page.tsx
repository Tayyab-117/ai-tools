import Link from 'next/link'
import { tools } from '../lib/registry'
export default function Home(){
  const featured = tools.slice(0,6)
  const byCat = (c:string)=>tools.filter(t=>t.category===c)
  return (<main className="min-h-screen">
    <section className="border-b bg-white">
      <div className="container py-12 grid gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-semibold leading-tight">Free AI & Web Tools — fast, private, and easy</h1>
          <p className="mt-3 text-gray-600">Run tools right in your browser. No sign‑up, no uploads, no limits. Built for creators, marketers, and developers.</p>
          <div className="mt-6 flex gap-3"><Link href="/tools" className="btn-primary">Browse all tools</Link><a href="#popular" className="btn-secondary">Popular this week</a></div>
        </div>
        <div className="card p-4">
          <div className="grid gap-3 md:grid-cols-2">
            {featured.map(t=>(<Link key={t.slug} href={`/tools/${t.slug}`} className="card p-4 hover:bg-gray-50">
              <div className="text-sm font-semibold">{t.name}</div>
              <div className="text-xs text-gray-600">{t.tagline}</div>
            </Link>))}
          </div>
        </div>
      </div>
    </section>
    <section id="popular" className="container py-10">
      <div className="mb-6 flex items-end justify-between"><h2 className="text-2xl font-semibold">Popular this week</h2><Link className="text-sm underline" href="/tools">See all</Link></div>
      <div className="grid gap-4 md:grid-cols-3">{featured.map(t=>(<Link key={t.slug} href={`/tools/${t.slug}`} className="card p-4 hover:bg-gray-50">
        <div className="text-base font-semibold">{t.name}</div><div className="text-sm text-gray-600">{t.tagline}</div><div className="mt-2 text-brand">Use tool →</div></Link>))}</div>
    </section>
    <section className="container py-10">
      <h2 className="text-2xl font-semibold mb-4">Browse by category</h2>
      <div className="grid gap-4 md:grid-cols-4">{['text','data','images','utilities'].map(c=>(
        <Link key={c} href={`/tools?cat=${c}`} className="card p-4 hover:bg-gray-50">
          <div className="text-base font-semibold capitalize">{c}</div>
          <div className="text-xs text-gray-600">{byCat(c).map(t=>t.name).slice(0,4).join(' · ') || 'More coming soon'}</div>
        </Link>
      ))}</div>
    </section>
  </main>)
}
