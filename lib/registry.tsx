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
const css_minifier = dynamic(()=>import('../tools/css-minifier'), { ssr:false })
const html_minifier = dynamic(()=>import('../tools/html-minifier'), { ssr:false })
const csv_to_json = dynamic(()=>import('../tools/csv-to-json'), { ssr:false })
const markdown_previewer = dynamic(()=>import('../tools/markdown-previewer'), { ssr:false })
const url_encoder = dynamic(()=>import('../tools/url-encoder'), { ssr:false })
const slugify = dynamic(()=>import('../tools/slugify'), { ssr:false })
const timestamp_converter = dynamic(()=>import('../tools/timestamp-converter'), { ssr:false })
const image_resizer = dynamic(()=>import('../tools/image-resizer'), { ssr:false })
const png_jpg = dynamic(()=>import('../tools/png-jpg'), { ssr:false })
const color_picker = dynamic(()=>import('../tools/color-picker'), { ssr:false })
export const tools: ToolDefinition[] = [
{
  slug: 'json-formatter', name: 'JSON Formatter & Validator', category: 'data', tagline: 'Prettify JSON and catch syntax errors', badge: 'Local', component: json_formatter,
  keywords: ['json','data','free','tool'],
  seo: {"longDescription": "Format, minify, and validate JSON safely in your browser\u2014great for APIs, config files, and debugging.", "howTo": ["Paste JSON into the left box.", "Click Format or Minify.", "Copy the output."], "useCases": ["Debug API responses", "Clean config files", "Validate JSON before deploy"], "faq": [{"q": "Do you upload my JSON?", "a": "No\u2014parsing runs locally in your browser."}], "related": ["text-diff", "base64", "csv-to-json"]}
},{
  slug: 'qr-code', name: 'QR Code Generator', category: 'utilities', tagline: 'Create QR codes for URLs or text', badge: 'Local', component: qr_code,
  keywords: ['qr','utilities','free','tool'],
  seo: {"longDescription": "Generate crisp QR codes instantly, offline. Perfect for links, Wi\u2011Fi, or text snippets.", "howTo": ["Enter text or URL.", "Adjust size.", "Click Download."], "useCases": ["Event posters", "Product packaging", "Presentations"], "related": ["uuid", "slugify"]}
},{
  slug: 'text-diff', name: 'Text Diff Checker', category: 'text', tagline: 'Compare two blocks of text line-by-line', badge: 'Local', component: text_diff,
  keywords: ['text','text','free','tool'],
  seo: {"longDescription": "Quickly see differences between two texts. Perfect for checking edits, comparing versions, or reviewing snippets.", "howTo": ["Paste text into both editors.", "Changed lines are highlighted."], "useCases": ["Compare drafts", "Review copied code", "Check proofreading edits"], "related": ["word-counter", "case-converter"]}
},{
  slug: 'word-counter', name: 'Word Counter & Readability', category: 'text', tagline: 'Count words, characters, and estimate reading time', badge: 'Local', component: word_counter,
  keywords: ['word','text','free','tool'],
  seo: {"longDescription": "Get word and character counts, reading time, and a readability score to improve your writing.", "useCases": ["Optimize blog posts", "Social media limits", "UX microcopy checks"], "related": ["case-converter", "lorem-ipsum"]}
},{
  slug: 'case-converter', name: 'Case Converter', category: 'text', tagline: 'Convert text to lower/UPPER/Title/Snake/Kebab', badge: 'Local', component: case_converter,
  keywords: ['case','text','free','tool'],
  seo: {"longDescription": "Quickly convert text between common casing styles for writing, code, and filenames.", "related": ["word-counter", "slugify"]}
},{
  slug: 'base64', name: 'Base64 Encode/Decode', category: 'utilities', tagline: 'Convert text to/from Base64', badge: 'Local', component: base64,
  keywords: ['base64','utilities','free','tool'],
  seo: {"longDescription": "Encode and decode Base64 safely in the browser\u2014no data leaves your device.", "related": ["json-formatter", "url-encoder", "slugify"]}
},{
  slug: 'exif-remover', name: 'Image EXIF Remover', category: 'images', tagline: 'Strip metadata for privacy', badge: 'Local', component: exif_remover,
  keywords: ['exif','images','free','tool'],
  seo: {"longDescription": "Remove EXIF metadata from photos (like location, camera, time) to protect privacy before sharing.", "useCases": ["Share images safely", "Reduce sensitive metadata"], "related": ["image-compressor", "image-resizer"]}
},{
  slug: 'regex-tester', name: 'Regex Tester', category: 'text', tagline: 'Test regular expressions on sample text', badge: 'Local', component: regex_tester,
  keywords: ['regex','text','free','tool'],
  seo: {"longDescription": "Experiment with JavaScript regular expressions and see live matches.", "related": ["text-diff", "slugify"]}
},{
  slug: 'uuid', name: 'UUID Generator', category: 'utilities', tagline: 'Create RFC4122-like random IDs', badge: 'Local', component: uuid,
  keywords: ['uuid','utilities','free','tool'],
  seo: {"longDescription": "Generate random identifiers for testing, filenames, or mock data.", "related": ["qr-code", "timestamp-converter"]}
},{
  slug: 'lorem-ipsum', name: 'Lorem Ipsum Generator', category: 'text', tagline: 'Generate filler paragraphs', badge: 'Local', component: lorem_ipsum,
  keywords: ['lorem','text','free','tool'],
  seo: {"longDescription": "Create placeholder text for designs, wireframes, and content drafts.", "related": ["word-counter", "case-converter"]}
},{
  slug: 'image-compressor', name: 'Image Compressor', category: 'images', tagline: 'Compress JPG/WEBP in-browser', badge: 'Local', component: image_compressor,
  keywords: ['image','images','free','tool'],
  seo: {"longDescription": "Compress images in your browser\u2014no uploads. Choose format and quality for smaller files.", "related": ["exif-remover", "image-resizer"]}
},{
  slug: 'css-minifier', name: 'CSS Minifier', category: 'text', tagline: 'Minify CSS by removing whitespace/comments', badge: 'Local', component: css_minifier,
  keywords: ['css','text','free','tool'],
  seo: {"longDescription": "Minify CSS instantly in your browser for faster page loads.", "related": ["html-minifier", "slugify"]}
},{
  slug: 'html-minifier', name: 'HTML Minifier', category: 'text', tagline: 'Minify HTML markup safely', badge: 'Local', component: html_minifier,
  keywords: ['html','text','free','tool'],
  seo: {"longDescription": "Minify HTML by collapsing whitespace between tags\u2014no servers required.", "related": ["css-minifier"]}
},{
  slug: 'csv-to-json', name: 'CSV → JSON Converter', category: 'data', tagline: 'Convert CSV text to JSON array', badge: 'Local', component: csv_to_json,
  keywords: ['csv','data','free','tool'],
  seo: {"longDescription": "Turn CSV text into a JSON array for quick imports and API mock data.", "related": ["json-formatter", "timestamp-converter"]}
},{
  slug: 'markdown-previewer', name: 'Markdown Previewer', category: 'text', tagline: 'Preview Markdown to HTML', badge: 'Local', component: markdown_previewer,
  keywords: ['markdown','text','free','tool'],
  seo: {"longDescription": "Live\u2011preview Markdown to HTML using a fast in\u2011browser renderer.", "related": ["html-minifier", "slugify"]}
},{
  slug: 'url-encoder', name: 'URL Encoder/Decoder', category: 'utilities', tagline: 'Encode or decode URL strings', badge: 'Local', component: url_encoder,
  keywords: ['url','utilities','free','tool'],
  seo: {"longDescription": "Safely encode or decode URL strings to avoid broken links.", "related": ["slugify", "base64"]}
},{
  slug: 'slugify', name: 'Text → Slug', category: 'text', tagline: 'Convert text to URL‑friendly slugs', badge: 'Local', component: slugify,
  keywords: ['slugify','text','free','tool'],
  seo: {"longDescription": "Create clean, URL\u2011friendly slugs from titles and headlines.", "related": ["url-encoder", "case-converter"]}
},{
  slug: 'timestamp-converter', name: 'Timestamp Converter', category: 'utilities', tagline: 'Convert Unix timestamps ⇄ date', badge: 'Local', component: timestamp_converter,
  keywords: ['timestamp','utilities','free','tool'],
  seo: {"longDescription": "Convert Unix timestamps to ISO dates and back for logs and APIs.", "related": ["uuid"]}
},{
  slug: 'image-resizer', name: 'Image Resizer', category: 'images', tagline: 'Resize images to exact dimensions', badge: 'Local', component: image_resizer,
  keywords: ['image','images','free','tool'],
  seo: {"longDescription": "Resize images to exact pixel sizes for banners, avatars, and thumbnails.", "related": ["image-compressor", "png-jpg"]}
},{
  slug: 'png-jpg', name: 'PNG ↔ JPG Converter', category: 'images', tagline: 'Convert images between PNG and JPG', badge: 'Local', component: png_jpg,
  keywords: ['png','images','free','tool'],
  seo: {"longDescription": "Convert images between PNG and JPG without uploading to a server.", "related": ["image-resizer", "image-compressor"]}
},{
  slug: 'color-picker', name: 'Color Picker & Palette', category: 'images', tagline: 'Pick colors and copy hex codes', badge: 'Local', component: color_picker,
  keywords: ['color','images','free','tool'],
  seo: {"longDescription": "Pick colors, copy hex values, and build quick palettes for UI work.", "related": ["image-resizer"]}
}
]
