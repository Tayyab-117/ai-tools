import { ToolDefinition } from './types'
import dynamic from 'next/dynamic'

const ImageCompressor = dynamic(()=>import('../tools-impl/ImageCompressor'), { ssr: false })
const BackgroundRemoverBrush = dynamic(()=>import('../tools-impl/BackgroundRemoverBrush'), { ssr: false })
const CSVCleaner = dynamic(()=>import('../tools-impl/CSVCleaner'), { ssr: false })

export const tools: ToolDefinition[] = [
  {
    slug: 'image-compressor',
    name: 'Image Compressor',
    category: 'images',
    tagline: 'Shrink PNG/JPG/WEBP size',
    badge: 'Local',
    component: ImageCompressor,
    keywords: ['compress','resize','webp','jpg','png']
  },
  {
    slug: 'background-remover',
    name: 'Background Remover (Brush)',
    category: 'images',
    tagline: 'Erase background manually, export PNG',
    badge: 'No watermark',
    component: BackgroundRemoverBrush,
    keywords: ['remove background','cutout','transparent','png']
  },
  {
    slug: 'csv-cleaner',
    name: 'CSV Cleaner',
    category: 'productivity',
    tagline: 'Dedupe & normalize spreadsheets',
    badge: 'No upload',
    component: CSVCleaner,
    keywords: ['csv','dedupe','clean','normalize']
  }
]

export const categories = [
  { slug: 'documents', name: 'Documents & Text' },
  { slug: 'images', name: 'Images & Design' },
  { slug: 'audio', name: 'Audio & Video' },
  { slug: 'productivity', name: 'Productivity' },
]
