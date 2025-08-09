export default function FAQ(){
  const items=[
    {q:'Do tools upload my files?',a:'No. Processing happens in your browser.'},
    {q:'Do I need an account?',a:'No. Everything is free to use.'},
    {q:'Can I contribute?',a:'Yes — reach out on the Contact page.'}
  ]
  return (<div className="container py-10"><h1 className="text-2xl font-semibold mb-2">FAQs</h1>
    <div className="mt-4 space-y-2">{items.map((f,i)=>(<details key={i} className="rounded-xl border bg-white p-3">
      <summary className="cursor-pointer font-medium">{f.q}</summary><p className="mt-1 text-sm text-gray-700">{f.a}</p></details>))}</div></div>)
}

