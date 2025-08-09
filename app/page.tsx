import Link from 'next/link'
import { tools } from '../lib/registry'
export default function Home(){
  const popular = [...tools].sort((a:any,b:any)=>(b.pop||0)-(a.pop||0)).slice(0,6)
  return (<main>
    <section className="border-b bg-white"><div className="container py-10 md:py-14 max-w-5xl">
      <h1 className="text-4xl md:text-5xl font-semibold leading-tight">AI‑powered tools that respect your privacy</h1>
      <p className="mt-3 text-gray-600">Images, audio, text, and documents — running directly in your browser. No uploads. No accounts.</p>
      <div className="mt-6 flex flex-wrap gap-3"><Link href="/tools" className="btn-primary">Browse all tools</Link><a href="#popular" className="btn-secondary">Popular this week</a></div>
      <div className="mt-4 flex flex-wrap gap-3 text-xs text-gray-600"><span className="badge">Local‑only processing</span><span className="badge">Installable PWA</span><span className="badge">No tracking</span></div></div></section>
    <section className="container py-8"><div className="mb-4 flex items-center justify-between"><h2 className="text-2xl font-semibold">All tools</h2><Link className="text-sm underline" href="/tools">Open directory</Link></div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">{tools.map(t=>(<Link key={t.slug} href={`/tools/${t.slug}`} className="card p-4 hover:bg-gray-50">
        <div className="text-base font-semibold">{t.name}</div><div className="text-sm text-gray-600">{t.tagline}</div><div className="mt-2 text-brand text-sm">Open tool →</div></Link>))}</div></section>
    <section id="popular" className="container py-8"><div className="mb-4 flex items-center justify-between"><h2 className="text-2xl font-semibold">Popular this week</h2><Link className="text-sm underline" href="/tools">See all</Link></div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">{popular.map(t=>(<Link key={t.slug} href={`/tools/${t.slug}`} className="card p-4 hover:bg-gray-50">
        <div className="text-base font-semibold">{t.name}</div><div className="text-sm text-gray-600">{t.tagline}</div><div className="mt-2 text-brand">Use tool →</div></Link>))}</div></section>
    <section className="border-t border-b bg-white"><div className="container py-10"><h2 className="text-center text-sm uppercase tracking-wider text-gray-500">Trusted by creators using tools from</h2>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">{['OpenAI','Hugging Face','Stability AI','Canva','Vercel','Cloudflare'].map((n,i)=>(
        <div key={i} className="flex items-center justify-center"><span className="text-gray-500 text-sm font-semibold">{n}</span></div>))}</div></div></section>
    <section className="container py-10"><div className="card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
      <div><div className="text-lg font-semibold">Get more done, privately</div><div className="text-sm text-gray-600">Open the directory or try a popular tool.</div></div>
      <div className="flex gap-3"><Link href="/tools" className="btn-primary">Open directory</Link><Link href="/tools/image-compressor" className="btn-secondary">Compress image</Link></div></div></section>
  </main>)
}

