'use client'
import React from 'react'
type Props = { onFiles: (files: File[]) => void, accept?: string }
export default function DropZone({ onFiles, accept }: Props){
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files)
    if (files.length) onFiles(files)
  }
  return (
    <div onDrop={onDrop} onDragOver={(e)=>e.preventDefault()} className="card grid place-items-center p-8 text-center hover:bg-muted/50">
      <div>
        <div className="text-sm font-medium">Drag & drop files here</div>
        <div className="text-xs text-muted-foreground">or click to choose</div>
        <input type="file" accept={accept} multiple className="mt-3" onChange={(e)=>{
          const files = e.currentTarget.files ? Array.from(e.currentTarget.files) : []
          if (files.length) onFiles(files)
        }} />
      </div>
    </div>
  )
}
