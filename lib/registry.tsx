import dynamic from 'next/dynamic'
import type { ToolDefinition } from './types'
const json_formatter = dynamic(()=>import('../tools/json-formatter'), { ssr:false })
const qr_code = dynamic(()=>import('../tools/qr-code'), { ssr:false })
const text_diff = dynamic(()=>import('../tools/text-diff'), { ssr:false })
const word_counter = dynamic(()=>import('../tools/word-counter'), { ssr:false })
const case_converter = dynamic(()=>import('../tools/case-converter'), { ssr:false })
const base64 = dynamic(()=>import('../tools/base64'), { ssr:false })
const exif_remover = dynamic(()=>import('../tools/exif-remover'), { ssr:false })
const regex_tester = dynamic(()=>import('../tools/regex-tester'), { ssr:false })
const uuid = dynamic(()=>import('../tools/uuid'), { ssr:false })
const lorem_ipsum = dynamic(()=>import('../tools/lorem-ipsum'), { ssr:false })
const image_compressor = dynamic(()=>import('../tools/image-compressor'), { ssr:false })
export const tools: ToolDefinition[] = [
{
  slug: 'json-formatter', name: 'JSON Formatter & Validator', category: 'data', tagline: 'Prettify JSON and catch syntax errors', badge: 'Local', component: json_formatter,
  keywords: ['json','data','prettify'], seo: {"longDescription": "Format, minify, and validate JSON safely in your browser.", "howTo": ["Paste JSON", "Click Format", "Copy output"], "useCases": ["Debug API responses", "Clean config files", "Validate JSON before deploy"], "related": ["text-diff", "base64"]}
},{
  slug: 'qr-code', name: 'QR Code Generator', category: 'utilities', tagline: 'Create QR codes for URLs or text', badge: 'Local', component: qr_code,
  keywords: ['qr','utilities','create'], seo: {"longDescription": "Generate crisp QR codes instantly, offline.", "howTo": ["Enter text", "Adjust size", "Download PNG"], "useCases": ["Event posters", "Packaging", "Presentations"], "related": ["uuid", "lorem-ipsum"]}
},{
  slug: 'text-diff', name: 'Text Diff Checker', category: 'text', tagline: 'Compare two blocks of text line-by-line', badge: 'Local', component: text_diff,
  keywords: ['text','text','compare'], seo: {"longDescription": "See differences between texts.", "howTo": ["Paste both texts", "Review highlighted lines"], "useCases": ["Compare drafts", "Review copied code"], "related": ["word-counter", "case-converter"]}
},{
  slug: 'word-counter', name: 'Word Counter & Readability', category: 'text', tagline: 'Count words, characters, and estimate reading time', badge: 'Local', component: word_counter,
  keywords: ['word','text','count'], seo: {"longDescription": "Get counts and readability to improve writing.", "useCases": ["Optimize posts", "Character limits", "UX microcopy"], "related": ["case-converter", "lorem-ipsum"]}
},{
  slug: 'case-converter', name: 'Case Converter', category: 'text', tagline: 'Convert text to lower/UPPER/Title/Snake/Kebab', badge: 'Local', component: case_converter,
  keywords: ['case','text','convert'], seo: {"longDescription": "Convert text between common casing styles.", "related": ["word-counter", "text-diff"]}
},{
  slug: 'base64', name: 'Base64 Encode/Decode', category: 'utilities', tagline: 'Convert text to/from Base64', badge: 'Local', component: base64,
  keywords: ['base64','utilities','convert'], seo: {"longDescription": "Encode and decode Base64 in the browser\u2014no data leaves your device.", "related": ["json-formatter", "regex-tester"]}
},{
  slug: 'exif-remover', name: 'Image EXIF Remover', category: 'images', tagline: 'Strip metadata for privacy', badge: 'Local', component: exif_remover,
  keywords: ['exif','images','strip'], seo: {"longDescription": "Remove EXIF metadata from photos to protect privacy.", "howTo": ["Upload image", "We re-render without EXIF", "Download clean JPG"], "useCases": ["Share images safely", "Reduce size slightly"], "related": ["image-compressor", "qr-code"]}
},{
  slug: 'regex-tester', name: 'Regex Tester', category: 'text', tagline: 'Test regular expressions on sample text', badge: 'Local', component: regex_tester,
  keywords: ['regex','text','test'], seo: {"longDescription": "Experiment with regex and see live matches.", "related": ["text-diff"]}
},{
  slug: 'uuid', name: 'UUID Generator', category: 'utilities', tagline: 'Create RFC4122-like random IDs', badge: 'Local', component: uuid,
  keywords: ['uuid','utilities','create'], seo: {"longDescription": "Generate random identifiers for testing and filenames.", "related": ["qr-code", "lorem-ipsum"]}
},{
  slug: 'lorem-ipsum', name: 'Lorem Ipsum Generator', category: 'text', tagline: 'Generate filler paragraphs', badge: 'Local', component: lorem_ipsum,
  keywords: ['lorem','text','generate'], seo: {"longDescription": "Create placeholder text for designs and drafts.", "related": ["word-counter", "case-converter"]}
},{
  slug: 'image-compressor', name: 'Image Compressor', category: 'images', tagline: 'Compress JPG/WEBP in-browser', badge: 'Local', component: image_compressor,
  keywords: ['image','images','compress'], seo: {"longDescription": "Compress images in your browser\u2014no uploads.", "howTo": ["Upload image", "Pick format/quality", "Download"], "useCases": ["Share smaller images", "Web performance"], "related": ["exif-remover"]}
}
]
