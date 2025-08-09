'use client'
export default function UUIDGen(){
  const make = () => crypto.randomUUID()
  const copy = async (id: string) => { await navigator.clipboard.writeText(id); alert('Copied!') }
  const ids = Array.from({length:10}, ()=>make())
  return (
    <div className="space-y-2">
      <button className="btn btn-primary" onClick={()=>location.reload()}>Generate 10 UUIDs</button>
      <ul className="card p-3 space-y-1 text-sm">
        {ids.map((x,i)=>(<li key={i} className="flex items-center justify-between"><span className="font-mono">{x}</span><button className="btn btn-secondary" onClick={()=>copy(x)}>Copy</button></li>))}
      </ul>
    </div>
  )
}
