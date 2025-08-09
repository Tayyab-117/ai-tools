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
    keywords: ['compress','resize','webp','jpg','png'],
    seo: {
      longDescription: 'Fast in-browser compression using Canvas. Convert to WEBP or JPG and tune quality without uploading your files. Great for web performance and social media.',
      howTo: [
        'Drop a PNG/JPG or click to browse.',
        'Pick output format (WEBP recommended).',
        'Adjust quality slider to balance size and clarity.',
        'Click Download to save the compressed image.'
      ],
      useCases: ['Speed up websites', 'Shrink email attachments', 'Optimize product photos', 'Save storage on your phone'],
      faq: [
        { q: 'Is there a watermark?', a: 'No. Your images are processed locally and never watermarked.' },
        { q: 'Do my files upload to a server?', a: 'No — everything runs in your browser via Canvas.' }
      ],
      related: ['background-remover']
    }
  },
  {
    slug: 'background-remover',
    name: 'Background Remover (Brush)',
    category: 'images',
    tagline: 'Erase background manually, export PNG',
    badge: 'No watermark',
    component: BackgroundRemoverBrush,
    keywords: ['remove background','cutout','transparent','png'],
    seo: {
      longDescription: 'Simple brush-based background removal. Paint to erase, toggle to restore, then export a transparent PNG.',
      howTo: [
        'Drop your photo.',
        'Adjust brush size.',
        'Erase background around the subject. Toggle to paint it back if needed.',
        'Download as transparent PNG.'
      ],
      useCases: ['Ecommerce cutouts', 'Thumbnails', 'Product catalogs', 'Stickers'],
      faq: [
        { q: 'Automatic AI cutout?', a: 'This tool is manual. It is faster for simple edges and avoids server uploads.' }
      ],
      related: ['image-compressor']
    }
  },
  {
    slug: 'csv-cleaner',
    name: 'CSV Cleaner',
    category: 'productivity',
    tagline: 'Dedupe & normalize spreadsheets',
    badge: 'No upload',
    component: CSVCleaner,
    keywords: ['csv','dedupe','clean','normalize'],
    seo: {
      longDescription: 'Clean messy CSV files: trim spaces, remove duplicate rows by a chosen column, and export a tidy CSV.',
      howTo: [
        'Drop a CSV file.',
        'Choose a column to deduplicate on.',
        'Optionally trim spaces.',
        'Download the cleaned CSV.'
      ],
      useCases: ['Mailing lists', 'CRM imports', 'Product catalogs', 'Lead cleaning'],
      faq: [
        { q: 'How many rows can it handle?', a: 'Thousands of rows are fine in modern browsers.' }
      ],
      related: ['image-compressor','background-remover']
    }
  }
]

export const categories = [
  { slug: 'documents', name: 'Documents & Text' },
  { slug: 'images', name: 'Images & Design' },
  { slug: 'audio', name: 'Audio & Video' },
  { slug: 'productivity', name: 'Productivity' },
]
