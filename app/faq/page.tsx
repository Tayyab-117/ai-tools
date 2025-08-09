export default function FAQ(){
  const items=[
    {q:'Do you upload my files?',a:'No. Processing is local in your browser using Web APIs and WASM/ML models.'},
    {q:'Is it free?',a:'Yes. No sign-up or quotas. Model downloads may consume bandwidth when first used.'},
    {q:'Why is it slow the first time?',a:'Models (e.g., OCR/ASR) are downloaded once and then cached by your browser.'}
  ]
  return (<div className="container py-10"><h1 className="text-2xl font-semibold mb-2">FAQs</h1>
    <div className="mt-4 space-y-2">{items.map((f,i)=>(<details key={i} className="rounded-xl border bg-white p-3"><summary className="cursor-pointer font-medium">{f.q}</summary><p className="mt-1 text-sm text-gray-700">{f.a}</p></details>))}</div></div>)
}

