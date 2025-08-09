import Link from 'next/link'
import { tools } from '../lib/registry'
export default function Home(){
  const popular = tools.slice(0,6)
  return (<main>
    <section className="border-b bg-white">
      <div className="container py-10 md:py-14">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">10 premium‑grade tools — free, private, in your browser</h1>
          <p className="mt-3 text-gray-600">Skip subscriptions. These tasks are usually paid elsewhere — we run them locally for privacy and speed.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/tools" className="btn-primary">Browse all tools</Link>
            <a href="#popular" className="btn-secondary">Popular this week</a>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-gray-600">
            <span className="badge">Local‑only processing</span><span className="badge">No sign‑up</span><span className="badge">Installable PWA</span>
          </div>
        </div>
      </div>
    </section>
    <section id="popular" className="border-b bg-white">
      <div className="container py-8">
        <div className="mb-4 flex items-center justify-between"><h2 className="text-2xl font-semibold">Popular this week</h2><Link className="text-sm underline" href="/tools">See all</Link></div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map(t => (<Link key={t.slug} href={`/tools/${t.slug}`} className="card p-4 hover:bg-gray-50">
            <div className="text-base font-semibold">{t.name}</div><div className="text-sm text-gray-600">{t.tagline}</div><div className="mt-2 text-brand">Use tool →</div>
          </Link>))}
        </div>
      </div>
    </section>
    <section className="container py-10">
      <h2 className="text-2xl font-semibold">Why these tools</h2>
      <div className="prose text-sm text-gray-700 mt-2 max-w-none">
        <p>Most online platforms charge for these features — <a href="/tools/background-remover">background removal</a>, <a href="/tools/image-upscaler">image upscaling</a>, <a href="/tools/pdf-ocr">OCR to searchable PDF</a>, <a href="/tools/video-converter">video conversion</a>, <a href="/tools/audio-transcriber">audio transcription</a>, <a href="/tools/audio-denoise">audio denoise</a>, and <a href="/tools/face-blur">face blurring</a>. We run them in your browser so your data stays on device.</p>
      </div>
    </section>
  </main>)
}

