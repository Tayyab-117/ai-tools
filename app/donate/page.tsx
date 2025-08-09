export default function Donate(){
  const url=process.env.NEXT_PUBLIC_DONATION_URL||''
  return (<div className="container py-10"><h1 className="text-2xl font-semibold mb-2">Support the project</h1>
    <p className="text-sm text-gray-700">If FreeAIHub helps you, consider supporting ongoing development.</p>
    {url? <a className="btn-primary mt-4 inline-block" href={url} target="_blank">Open Payment Link</a> : <p className="text-sm text-gray-500 mt-4">Add <code>NEXT_PUBLIC_DONATION_URL</code> in Vercel env.</p>}
  </div>)
}

