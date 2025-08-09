'use client'
import { notFound, useParams } from 'next/navigation'
import { tools } from '../../../lib/registry'
import ToolShell from '../../components/ToolShell'
import { saveRecent } from '../../../lib/storage'
import { useEffect } from 'react'

export default function ToolPage(){
  const params = useParams() as { slug: string }
  const tool = tools.find(t=>t.slug===params.slug)
  useEffect(()=>{ if (tool) saveRecent(tool.slug) },[tool])
  if (!tool) return notFound()
  const Comp = tool.component as any
  return (
    <ToolShell slug={tool.slug} title={tool.name} tagline={tool.tagline}>
      <Comp />
    </ToolShell>
  )
}
