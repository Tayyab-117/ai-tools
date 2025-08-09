import Link from 'next/link'
const posts=[{slug:'why-top-10', title:'Why these top 10 paid-style tools, free & private', excerpt:'We handpicked tasks most sites charge for, and run them locally in your browser.'}]
export default function Blog(){return (<div className="container py-10"><h1 className="text-2xl font-semibold mb-2">Blog</h1>
<div className="grid gap-4 md:grid-cols-2">{posts.map(p=>(<Link key={p.slug} href={`/blog/${p.slug}`} className="card p-4 hover:bg-gray-50"><div className="text-base font-semibold">{p.title}</div><div className="text-sm text-gray-600">{p.excerpt}</div></Link>))}</div></div>)}

