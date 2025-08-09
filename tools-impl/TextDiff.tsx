'use client'
import { useMemo, useState } from 'react'

function diff(a: string, b: string){
  const as = a.split(/\s+/), bs = b.split(/\s+/)
  const m = as.length, n = bs.length
  const dp = Array.from({length:m+1},()=>Array(n+1).fill(0))
  for (let i=1;i<=m;i++) for (let j=1;j<=n;j++) dp[i][j] = as[i-1]===bs[j-1] ? dp[i-1][j-1]+1 : Math.max(dp[i-1][j], dp[i][j-1])
  const out: {type:'same'|'del'|'add', text:string}[] = []
  let i=m, j=n
  while (i>0 && j>0){
    if (as[i-1]===bs[j-1]){ out.push({type:'same', text:as[i-1]}); i--; j--; }
    else if (dp[i-1][j] >= dp[i][j-1]){ out.push({type:'del', text:as[i-1]}); i--; }
    else { out.push({type:'add', text:bs[j-1]}); j--; }
  }
  while (i>0){ out.push({type:'del', text:as[i-1]}); i--; }
  while (j>0){ out.push({type:'add', text:bs[j-1]}); j--; }
  return out.reverse()
}

export default function TextDiff(){
  const [a, setA] = useState('Hello world, this is version one.')
  const [b, setB] = useState('Hello brave new world! This is v2.')
  const res = useMemo(()=>diff(a,b),[a,b])
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <textarea value={a} onChange={e=>setA(e.target.value)} className="h-48 w-full rounded-lg border p-3" placeholder="Original"/>
      <textarea value={b} onChange={e=>setB(e.target.value)} className="h-48 w-full rounded-lg border p-3" placeholder="Changed"/>
      <div className="md:col-span-2 card p-3 text-sm leading-7">
        {res.map((t,i)=> t.type==='same'
          ? <span key={i}>{t.text} </span>
          : t.type==='add'
            ? <span key={i} className="bg-green-200/60 px-1 rounded">{t.text} </span>
            : <span key={i} className="bg-red-200/60 line-through px-1 rounded">{t.text} </span>
        )}
      </div>
    </div>
  )
}
