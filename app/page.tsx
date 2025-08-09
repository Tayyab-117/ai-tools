import Link from 'next/link'
import { useMemo } from 'react'
import { tools } from '../lib/registry'

function FeaturedCard({ slug, name, tagline }: { slug: string; name: string; tagline: string }) {
  return (
    <Link
      href={`/tools/${slug}`}
      className="card p-4 hover:bg-gray-50 transition"
      aria-label={`${name} – ${tagline}`}
    >
      <div className="text-base font-semibold">{name}</div>
      <div className="mt-1 text-sm text-gray-600">{tagline}</div>
      <div className="mt-2 text-brand text-sm">Open tool →</div>
    </Link>
  )
}

export default function Home() {
  const featured = tools.slice(0, 8)
  const popular = tools.slice(0, 10) // swap with real analytics later
  const byCat = (c: string) => tools.filter(t => t.category === c)

  return (
    <main>
      {/* HERO */}
      <section className="border-b bg-white">
        <div className="container py-10 md:py-14">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Free AI & Web Tools — fast, private, and easy
            </h1>
            <p className="mt-3 text-gray-600">
              Run tools locally in your browser. No sign‑up, no uploads, no limits. Built for creators,
              marketers, and developers.
            </p>

            {/* Search in hero */}
            <div className="mt-6">
              <form action="/tools" className="flex flex-col sm:flex-row gap-2">
                <input
                  name="q"
                  className="input flex-1"
                  placeholder="Search tools (e.g., JSON, QR, Compress)…"
                  aria-label="Search tools"
                />
                <button className="btn-primary" type="submit">Search</button>
              </form>
              <div className="mt-2 text-xs text-gray-500">
                Popular: JSON, QR Code, Image Compress, Diff
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/tools" className="btn-primary">Browse all tools</Link>
              <a href="#popular" className="btn-secondary">Popular this week</a>
            </div>

            {/* Trust mini badges */}
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-gray-600">
              <span className="badge">Local‑only processing</span>
              <span className="badge">No sign‑up</span>
              <span className="badge">Installable PWA</span>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR STRIP (great on mobile) */}
      <section id="popular" className="border-b bg-white/60">
        <div className="container py-6">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Popular this week</h2>
            <Link className="text-sm underline" href="/tools">See all</Link>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-1 snap-x">
            {popular.map(t => (
              <Link
                key={t.slug}
                href={`/tools/${t.slug}`}
                className="snap-start min-w-[260px] card p-4 hover:bg-gray-50"
              >
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-gray-600 mt-0.5">{t.tagline}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container py-10">
        <h2 className="text-2xl font-semibold">Browse by category</h2>
        <p className="text-sm text-gray-600">Jump straight into the kind of task you need.</p>
        <div className="mt-4 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {(['text', 'data', 'images', 'utilities'] as const).map(cat => (
            <Link key={cat} href={`/tools?cat=${cat}`} className="card p-4 hover:bg-gray-50">
              <div className="text-base font-semibold capitalize">{cat}</div>
              <div className="text-xs text-gray-600">
                {byCat(cat).map(t => t.name).slice(0, 4).join(' · ') || 'More coming soon'}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED TOOLS GRID */}
      <section className="container py-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured tools</h2>
          <Link className="text-sm underline" href="/tools">View directory</Link>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featured.map(t => (
            <FeaturedCard key={t.slug} slug={t.slug} name={t.name} tagline={t.tagline} />
          ))}
        </div>
      </section>

      {/* USE‑CASE / TEMPLATES */}
      <section className="container py-10">
        <h2 className="text-2xl font-semibold">Common workflows</h2>
        <p className="text-sm text-gray-600">Pre‑built flows to save time.</p>
        <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card p-4">
            <div className="font-semibold">Clean an API response</div>
            <p className="text-sm text-gray-600 mt-1">Format → Diff → Share</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link href="/tools/json-formatter" className="btn-secondary text-sm">JSON Formatter</Link>
              <Link href="/tools/text-diff" className="btn-secondary text-sm">Text Diff</Link>
              <Link href="/tools/base64" className="btn-secondary text-sm">Base64</Link>
            </div>
          </div>
          <div className="card p-4">
            <div className="font-semibold">Optimize a blog image</div>
            <p className="text-sm text-gray-600 mt-1">Remove EXIF → Compress → Convert</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link href="/tools/exif-remover" className="btn-secondary text-sm">EXIF Remover</Link>
              <Link href="/tools/image-compressor" className="btn-secondary text-sm">Compressor</Link>
              <Link href="/tools/image-compressor" className="btn-secondary text-sm">WEBP</Link>
            </div>
          </div>
          <div className="card p-4">
            <div className="font-semibold">Launch a campaign</div>
            <p className="text-sm text-gray-600 mt-1">Short link → QR → UTM</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link href="/tools/qr-code" className="btn-secondary text-sm">QR Code</Link>
              <Link href="/tools/url-encoder" className="btn-secondary text-sm">URL Encoder</Link>
              <Link href="/tools/uuid" className="btn-secondary text-sm">UUID</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="container py-10">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card p-5">
            <div className="font-semibold">Privacy by default</div>
            <p className="text-sm text-gray-600 mt-1">Tools run in your browser — your files never leave your device.</p>
          </div>
          <div className="card p-5">
            <div className="font-semibold">Fast on any device</div>
            <p className="text-sm text-gray-600 mt-1">Lightweight, no trackers by default, optimized for mobile.</p>
          </div>
          <div className="card p-5">
            <div className="font-semibold">Free & open‑ended</div>
            <p className="text-sm text-gray-600 mt-1">No sign‑up, no quotas. Donate if it helps your workflow.</p>
          </div>
        </div>
      </section>

      {/* SEO SECTION */}
      <section className="container py-10">
        <h2 className="text-2xl font-semibold">What you can build with these tools</h2>
        <div className="prose text-sm text-gray-700 mt-2 max-w-none">
          <p>
            FreeAIHub bundles essential utilities for content, development, and marketing in one place — from
            <Link href="/tools/json-formatter"> JSON formatting</Link> and
            <Link href="/tools/text-diff"> text compare</Link> to
            <Link href="/tools/image-compressor"> image compression</Link> and
            <Link href="/tools/qr-code"> QR codes</Link>. Everything runs locally in your browser, which means
            faster feedback loops and safer data handling.
          </p>
          <p>
            For teams, these tools speed up everyday tasks without new logins or permissions. For solo creators,
            they eliminate tabs and subscriptions. Explore the full directory or jump straight to a workflow above.
          </p>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="container py-10">
        <h2 className="text-2xl font-semibold">FAQs</h2>
        <div className="mt-4 space-y-2">
          {[
            { q: 'Do you upload my files?', a: 'No. Processing happens in your browser using Web APIs (Canvas, File, Crypto).' },
            { q: 'Is it free?', a: 'Yes. Most tools are free and unlimited. Donations keep the site online.' },
            { q: 'Do I need an account?', a: 'No account required.' },
            { q: 'Is it GDPR friendly?', a: 'Yes. By default we avoid processing personal data server‑side. See Privacy for details.' },
          ].map((f, i) => (
            <details key={i} className="rounded-xl border bg-white p-3">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-1 text-sm text-gray-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container py-10">
        <div className="card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="text-lg font-semibold">Ready to get more done?</div>
            <div className="text-sm text-gray-600">Browse the full directory or start with a popular tool.</div>
          </div>
          <div className="flex gap-3">
            <Link href="/tools" className="btn-primary">Open directory</Link>
            <Link href="/tools/json-formatter" className="btn-secondary">Try JSON tool</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
