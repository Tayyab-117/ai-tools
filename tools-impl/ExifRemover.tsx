'use client'
import { useState } from 'react'
import DropZone from '../app/components/DropZone'

export default function ExifRemover(){
  const [url, setUrl] = useState<string>('')
  const handleFiles = (files: File[]) => {
    const f = files[0]
    const reader = new FileReader()
    reader.onload = () => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.width = img.naturalWidth
        canvas.height = img.naturalHeight
        const ctx = canvas.getContext('2d')!
        ctx.drawImage(img,0,0)
        setUrl(canvas.toDataURL('image/jpeg', 0.92)) // strip EXIF by re-encoding
      }
      img.src = reader.result as string
    }
    reader.readAsDataURL(f)
  }
  const download = () => {
    const a = document.createElement('a')
    a.href = url
    a.download = 'no-exif.jpg'
    a.click()
  }
  return (
    <div className="space-y-3">
      {!url && <DropZone onFiles={handleFiles} accept="image/*" />}
      {url && (
        <div className="space-y-3">
          <img src={url} className="max-w-full rounded border" />
          <button className="btn btn-primary" onClick={download}>Download JPG (EXIF removed)</button>
        </div>
      )}
    </div>
  )
}
