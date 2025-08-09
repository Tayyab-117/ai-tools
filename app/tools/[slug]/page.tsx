import { notFound } from 'next/navigation'
import { tools } from '../../../lib/registry'
import ToolShell from '../../../components/ToolShell'
export function generateStaticParams(){ return tools.map(t=>({slug:t.slug})) }
export function generateMetadata({ params }:{ params:{ slug:string }}){ const t = tools.find(x=>x.slug===params.slug); if(!t) return {}; return { title: `${t.name} — FreeAIHub`, description: t.tagline } }
export default function ToolPage({ params }:{ params:{ slug:string }}){
  const tool = tools.find(t=>t.slug===params.slug); if(!tool) return notFound()
  const Comp:any = tool.component
  return (<ToolShell slug={tool.slug} title={tool.name} tagline={tool.tagline}>
    <div className="grid gap-6 md:grid-cols-3"><div className="md:col-span-2 card p-4"><Comp {...(tool.props||{})}/></div>
      <aside className="space-y-4">
        <div className="card p-4"><h2 className="font-semibold">About this tool</h2><p className="mt-2 text-sm text-gray-700">{tool.seo.longDescription}</p></div>
        {tool.seo.howTo?.length? <div className="card p-4"><h2 className="font-semibold">How to use</h2><ol className="mt-2 list-decimal pl-5 text-sm text-gray-700 space-y-1">{tool.seo.howTo.map((s:any,i:number)=>(<li key={i}>{s}</li>))}</ol></div>:null}
        {tool.seo.useCases?.length? <div className="card p-4"><h2 className="font-semibold">Use cases</h2><ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">{tool.seo.useCases.map((s:any,i:number)=>(<li key={i}>{s}</li>))}</ul></div>:null}
        {tool.seo.faq?.length? <div className="card p-4"><h2 className="font-semibold">FAQs</h2><div className="mt-2 space-y-2">{tool.seo.faq.map((f:any,i:number)=>(<details key={i} className="rounded border bg-white p-3"><summary className="cursor-pointer font-medium">{f.q}</summary><p className="mt-1 text-sm text-gray-700">{f.a}</p></details>))}</div></div>:null}
      </aside></div></ToolShell>)}

