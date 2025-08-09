import Link from 'next/link'
export default function Footer(){
  return (<footer className="border-t mt-10 bg-white">
    <div className="container py-10">
      <div className="grid gap-6 md:grid-cols-4">
        <div><div className="text-lg font-semibold">✨ FreeAIHub</div><p className="mt-1 text-sm text-gray-600">Free, private, browser‑only tools.</p></div>
        <div><h4 className="text-sm font-semibold">Explore</h4><ul className="mt-2 space-y-1 text-sm text-gray-600">
          <li><Link href="/tools">All Tools</Link></li><li><Link href="/faq">FAQs</Link></li></ul></div>
        <div><h4 className="text-sm font-semibold">Company</h4><ul className="mt-2 space-y-1 text-sm text-gray-600">
          <li><Link href="/about">About</Link></li><li><Link href="/contact">Contact</Link></li></ul></div>
        <div><h4 className="text-sm font-semibold">Legal</h4><ul className="mt-2 space-y-1 text-sm text-gray-600">
          <li><Link href="/privacy">Privacy Policy</Link></li><li><Link href="/terms">Terms of Service</Link></li></ul></div>
      </div>
      <div className="mt-8 flex items-center justify-between border-t pt-6 text-xs text-gray-500">
        <span>© {new Date().getFullYear()} FreeAIHub. All rights reserved.</span><span>Made for privacy & speed.</span>
      </div>
    </div>
  </footer>)
}
