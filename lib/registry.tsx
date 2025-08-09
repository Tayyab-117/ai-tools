import { ToolDefinition } from './types'
import dynamic from 'next/dynamic'

const ImageCompressor = dynamic(()=>import('../tools-impl/ImageCompressor'), { ssr: false })
const BackgroundRemoverBrush = dynamic(()=>import('../tools-impl/BackgroundRemoverBrush'), { ssr: false })
const CSVCleaner = dynamic(()=>import('../tools-impl/CSVCleaner'), { ssr: false })
const TextDiff = dynamic(()=>import('../tools-impl/TextDiff'), { ssr: false })
const WordCounter = dynamic(()=>import('../tools-impl/WordCounter'), { ssr: false })
const CaseConverter = dynamic(()=>import('../tools-impl/CaseConverter'), { ssr: false })
const JSONFormatter = dynamic(()=>import('../tools-impl/JSONFormatter'), { ssr: false })
const Base64Tool = dynamic(()=>import('../tools-impl/Base64Tool'), { ssr: false })
const ExifRemover = dynamic(()=>import('../tools-impl/ExifRemover'), { ssr: false })
const QRCodeGen = dynamic(()=>import('../tools-impl/QRCodeGen'), { ssr: false })
const RegexTester = dynamic(()=>import('../tools-impl/RegexTester'), { ssr: false })
const UUIDGen = dynamic(()=>import('../tools-impl/UUIDGen'), { ssr: false })
const LoremIpsum = dynamic(()=>import('../tools-impl/LoremIpsum'), { ssr: false })

export const tools: ToolDefinition[] = [
  {
    slug: 'image-compressor',
    name: 'Image Compressor',
    category: 'images',
    tagline: 'Compress PNG/JPG/WEBP in your browser',
    badge: 'Local',
    component: ImageCompressor,
    keywords: ['compress','resize','webp','jpg','png'],
    seo: { longDescription: 'Reduce image size without uploading using client-side canvas encoding. Great for blogs, Shopify, and email.' },
    howTo: ['Drop an image', 'Pick WEBP/JPG', 'Adjust quality', 'Download'],
    useCases: ['Speed up websites','Share smaller images','Free up storage'],
    faq: [{q:'Is quality lost?', a:'Yes, lossy formats reduce quality. Use WEBP for best size-quality balance.'}],
    related: ['exif-remover','image-background-remover']
  },
  {
    slug: 'image-background-remover',
    name: 'Background Remover (Brush)',
    category: 'images',
    tagline: 'Erase backgrounds manually; export transparent PNG',
    badge: 'No watermark',
    component: BackgroundRemoverBrush,
    keywords: ['remove background','cutout','transparent','png'],
    seo: { longDescription: 'Quick manual cutouts with an eraser/restore brush. No upload; perfect for product photos.' },
    howTo: ['Drop an image','Adjust brush size','Erase or paint back','Download PNG'],
    useCases: ['E‑commerce product shots','Thumbnails','Memes'],
    faq: [{q:'Does it auto-detect?', a:'This tool is manual and privacy-first; no server ML used.'}],
    related: ['image-compressor','exif-remover']
  },
  {
    slug: 'csv-cleaner',
    name: 'CSV Cleaner',
    category: 'productivity',
    tagline: 'Dedupe & normalize CSV rows',
    badge: 'No upload',
    component: CSVCleaner,
    keywords: ['csv','dedupe','clean','normalize'],
    seo: { longDescription: 'Clean spreadsheets locally: trim spaces and remove duplicates by a chosen column.' },
    howTo: ['Drop CSV','Choose dedupe column','Optionally trim spaces','Download cleaned CSV'],
    useCases: ['Email lists','CRM exports','Marketing contacts'],
    faq: [{q:'Is there a row limit?', a:'Runs in your browser—big files depend on your device memory.'}],
    related: ['json-formatter']
  },
  { slug:'text-diff', name:'Text Diff', category:'documents', tagline:'Compare two texts and highlight changes', component: TextDiff,
    keywords:['diff','compare','changes'], seo:{longDescription:'Spot additions and deletions between two versions using a simple LCS algorithm in-browser.'},
    howTo:['Paste original and changed text','Scroll the highlighted diff'], useCases:['Contracts','Blog edits','Changelogs'], related:['word-counter','case-converter']
  },
  { slug:'word-counter', name:'Word Counter & Readability', category:'documents', tagline:'Count words, characters, sentences & read time', component: WordCounter,
    keywords:['word count','characters','readability'], seo:{longDescription:'Instant stats for your content. Estimate read time at ~200 wpm.'},
    howTo:['Paste text','See live stats'], useCases:['Social captions','SEO content','Essays'], related:['case-converter','lorem-ipsum']
  },
  { slug:'case-converter', name:'Case Converter', category:'documents', tagline:'Lowercase, UPPERCASE, Title & Sentence case', component: CaseConverter,
    keywords:['text','case','title','sentence'], seo:{longDescription:'Normalize casing for headlines, captions, and bulk text.'},
    howTo:['Paste text','Click desired casing','Copy result'], useCases:['Headlines','Filename normalization'], related:['word-counter']
  },
  { slug:'json-formatter', name:'JSON Formatter & Validator', category:'productivity', tagline:'Prettify JSON and catch syntax errors', component: JSONFormatter,
    keywords:['json','formatter','pretty','validate'], seo:{longDescription:'Format and validate JSON locally; no data leaves your device.'},
    howTo:['Paste JSON','Click Format'], useCases:['APIs','Config files'], faq:[{q:'Why error?', a:'You likely have a stray comma or invalid quotes.'}], related:['csv-cleaner']
  },
  { slug:'base64', name:'Base64 Encoder/Decoder', category:'productivity', tagline:'Encode or decode Base64 safely', component: Base64Tool,
    keywords:['base64','encode','decode'], seo:{longDescription:'Convert text to/from Base64 right in the browser.'}, related:['qrcode-generator']
  },
  { slug:'exif-remover', name:'Image EXIF Remover', category:'images', tagline:'Strip EXIF metadata for privacy', component: ExifRemover,
    keywords:['exif','privacy','jpg'], seo:{longDescription:'Re-encodes images to remove EXIF metadata such as GPS or camera details.'}, related:['image-compressor']
  },
  { slug:'qrcode-generator', name:'QR Code Generator', category:'productivity', tagline:'Create QR codes for links & text', component: QRCodeGen,
    keywords:['qr','qrcode'], seo:{longDescription:'Generate QR codes client‑side and download as PNG.'}, useCases:['Links','Wi‑Fi labels','Business cards']
  },
  { slug:'regex-tester', name:'Regex Tester', category:'documents', tagline:'Test JavaScript regular expressions', component: RegexTester,
    keywords:['regex','regexp','test'], seo:{longDescription:'Validate patterns and preview matches instantly.'}
  },
  { slug:'uuid-generator', name:'UUID Generator', category:'productivity', tagline:'Generate v4 UUIDs in bulk', component: UUIDGen,
    keywords:['uuid','id','guid'], seo:{longDescription:'Create random IDs locally and copy.'}
  },
  { slug:'lorem-ipsum', name:'Lorem Ipsum Generator', category:'documents', tagline:'Generate placeholder paragraphs', component: LoremIpsum,
    keywords:['lorem','ipsum','placeholder'], seo:{longDescription:'Quick filler text for mockups and designs.'}
  }
]

export const categories = [
  { slug: 'documents', name: 'Documents & Text' },
  { slug: 'images', name: 'Images & Design' },
  { slug: 'audio', name: 'Audio & Video' },
  { slug: 'productivity', name: 'Productivity' },
]
