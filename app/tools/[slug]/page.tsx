import { notFound } from 'next/navigation'
import { tools } from '../../../lib/registry'
import ToolShell from '../../../components/ToolShell'
export function generateStaticParams(){ return tools.map(t=>({slug:t.slug})) }
export function generateMetadata({ params }:{ params:{ slug:string }}){
  const t = tools.find(x=>x.slug===params.slug); if(!t) return {}; return { title: `${t.name} — FreeAIHub`, description: t.tagline }
}
export default function ToolPage({ params }:{ params:{ slug:string }}){
  const tool = tools.find(t=>t.slug===params.slug); if(!tool) return notFound()
  const Comp = tool.component as any
  return (<ToolShell slug={tool.slug} title={tool.name} tagline={tool.tagline}>
    <div className="grid gap-6 md:grid-cols-3">
      <div className="md:col-span-2 card p-4"><Comp/></div>
      <aside className="space-y-4">
        <div className="card p-4"><h3 className="font-semibold">About this tool</h3><p className="mt-2 text-sm text-gray-700">{tool.seo.longDescription}</p></div>
        {tool.seo.howTo && (<div className="card p-4"><h3 className="font-semibold">How to use</h3><ol className="mt-2 list-decimal pl-5 text-sm text-gray-700 space-y-1">{tool.seo.howTo.map((s,i)=>(<li key={i}>{s}</li>))}</ol></div>)}
        {tool.seo.useCases && (<div className="card p-4"><h3 className="font-semibold">Use cases</h3><ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">{tool.seo.useCases.map((s,i)=>(<li key={i}>{s}</li>))}</ul></div>)}
      </aside>
    </div></ToolShell>)
}
