import Link from 'next/link'
export default function Footer(){
  return (
    <footer className="border-t">
      <div className="container py-10">
        <div className="grid gap-6 md:grid-cols-4">
          <div>
            <div className="text-lg font-semibold">✨ FreeAIHub</div>
            <p className="mt-1 text-sm text-muted-foreground">Free, offline‑capable AI tools that run in your browser.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Explore</h4>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li><a href="#featured">Popular tools</a></li>
              <li><a href="#categories">Categories</a></li>
              <li><a href="#how">How it works</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Support</h4>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li><Link href="/donate">Donate</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between border-t pt-6 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} FreeAIHub. All rights reserved.</span>
          <span>Last updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>
    </footer>
  )
}
