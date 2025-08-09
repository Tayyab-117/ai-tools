'use client'
import { useState } from 'react'

function splitCSVLine(line: string): string[] {
  // Split by commas but respect quoted segments (e.g., "a,b",c)
  const out: string[] = []
  let cur = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (ch === '"') {
      // Toggle quotes or escape double quotes ("")
      if (inQuotes && line[i + 1] === '"') {
        cur += '"'
        i++ // skip the escaped quote
      } else {
        inQuotes = !inQuotes
      }
    } else if (ch === ',' && !inQuotes) {
      out.push(cur)
      cur = ''
    } else {
      cur += ch
    }
  }
  out.push(cur)
  return out.map(s => s.trim())
}

function parseCSV(input: string): Record<string, string>[] {
  const lines = input
    .split(/\r?\n/)
    .map(l => l.trim())
    .filter(Boolean)
  if (lines.length === 0) return []

  const headers = splitCSVLine(lines[0]).map(h => h.replace(/^"|"$/g, ''))
  const rows = lines.slice(1)

  return rows.map(line => {
    const cells = splitCSVLine(line).map(v => v.replace(/^"|"$/g, ''))
    const row: Record<string, string> = {}
    headers.forEach((h, i) => {
      row[h] = cells[i] ?? ''
    })
    return row
  })
}

export default function CSV2JSON() {
  const [csv, setCsv] = useState<string>('name,age\nAli,22\n"Bilal, Khan",30')
  const [out, setOut] = useState<string>('')

  const run = () => {
    const data = parseCSV(csv)
    setOut(JSON.stringify(data, null, 2))
  }

  const download = () => {
    const blob = new Blob([out || '[]'], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'data.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-3">
      <div className="grid gap-4 md:grid-cols-2">
        <textarea
          className="textarea"
          value={csv}
          onChange={(e) => setCsv(e.target.value)}
          placeholder='CSV here (headers on first line)'
        />
        <textarea className="textarea" value={out} readOnly />
      </div>
      <div className="flex gap-3">
        <button className="btn-primary" onClick={run}>
          Convert
        </button>
        <button className="btn-secondary" onClick={download}>
          Download JSON
        </button>
      </div>
      <p className="text-xs text-gray-600">
        Tip: quoted values and commas inside quotes are supported. Double quotes can be escaped as <code>""</code>.
      </p>
    </div>
  )
}
