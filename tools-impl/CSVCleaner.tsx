'use client'
import Papa from 'papaparse'
import { useMemo, useState } from 'react'
import DropZone from '../app/components/DropZone'

export default function CSVCleaner(){
  const [rows, setRows] = useState<string[][]>([])
  const [header, setHeader] = useState<string[]>([])
  const [col, setCol] = useState(0)
  const [trimSpaces, setTrimSpaces] = useState(true)

  const handleFiles = (files: File[]) => {
    Papa.parse(files[0], {
      complete: (res:any) => {
        const data = res.data as string[][]
        const [h, ...r] = data
        setHeader(h)
        setRows(r)
      }
    })
  }

  const cleaned = useMemo(()=>{
    let r = rows.map(row => row.map(c => trimSpaces ? (c||'').trim() : (c||'')))
    const seen = new Set<string>()
    r = r.filter(row => {
      const key = (row[col]||'').toLowerCase()
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })
    return r
  }, [rows, col, trimSpaces])

  const download = () => {
    const csv = Papa.unparse([header, ...cleaned])
    const blob = new Blob([csv], { type: 'text/csv' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = 'cleaned.csv'
    a.click()
  }

  return (
    <div className="space-y-4">
      {rows.length===0 ? (
        <DropZone onFiles={handleFiles} accept=".csv"/>
      ) : (
        <div className="space-y-4">
          <div className="card p-4 flex flex-wrap items-center gap-3">
            <label className="text-sm">Dedupe by</label>
            <select className="rounded border px-2 py-1" value={col} onChange={e=>setCol(parseInt(e.target.value))}>
              {header.map((h,i)=>(<option key={i} value={i}>{h || `Column ${i+1}`}</option>))}
            </select>
            <label className="text-sm ml-3 inline-flex items-center gap-2"><input type="checkbox" checked={trimSpaces} onChange={e=>setTrimSpaces(e.target.checked)} /> Trim spaces</label>
            <button className="btn btn-primary ml-auto" onClick={download}>Download cleaned CSV</button>
          </div>
          <div className="card p-0 overflow-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  {header.map((h,i)=>(<th key={i} className="px-3 py-2 text-left font-semibold">{h || `Column ${i+1}`}</th>))}
                </tr>
              </thead>
              <tbody>
                {cleaned.slice(0,200).map((row,i)=>(
                  <tr key={i} className="border-t">
                    {row.map((c,j)=>(<td key={j} className="px-3 py-2">{c}</td>))}
                  </tr>
                ))}
              </tbody>
            </table>
            {cleaned.length>200 && <div className="p-3 text-xs text-muted-foreground">Showing first 200 rows</div>}
          </div>
        </div>
      )}
    </div>
  )
}
