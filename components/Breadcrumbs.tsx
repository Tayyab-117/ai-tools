import Link from 'next/link'
export default function Breadcrumbs({ parts }:{ parts:{label:string, href?:string}[] }){
  return (<nav className="text-sm text-gray-500 mb-3">
    <div className="flex items-center gap-2">
      {parts.map((p,i)=>(<div key={i} className="flex items-center gap-2">
        {p.href? <Link href={p.href} className="hover:underline">{p.label}</Link> : <span>{p.label}</span>}
        {i<parts.length-1 && <span>/</span>}
      </div>))}
    </div>
  </nav>)
}
