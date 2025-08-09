'use client'
import Link from 'next/link'
export default function Donate(){
  const url = process.env.NEXT_PUBLIC_DONATION_URL
  return (
    <div className='container py-10'>
      <h1 className='text-2xl font-semibold'>Support FreeAIHub</h1>
      <p className='mt-1 text-sm text-muted-foreground'>If these tools help you, consider supporting the project.</p>
      {url ? (
        <a className="btn btn-primary mt-4" href={url} target="_blank">Open secure checkout</a>
      ) : (
        <div className="card p-3 mt-4 text-sm">
          <div>Set <code>NEXT_PUBLIC_DONATION_URL</code> (Stripe Payment Link, Ko‑fi, or Buy Me a Coffee) in Vercel → Settings → Environment Variables.</div>
          <Link className="link" href="/contact">Or contact us</Link>
        </div>
      )}
    </div>
  )
}
