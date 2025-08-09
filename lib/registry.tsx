import dynamic from 'next/dynamic'

// Dynamic, client-only tool components
const JSONFormatter   = dynamic(() => import('../tools/json-formatter'),   { ssr: false })
const TextDiff        = dynamic(() => import('../tools/text-diff'),        { ssr: false })
const Base64Tool      = dynamic(() => import('../tools/base64'),           { ssr: false })
const QRTool          = dynamic(() => import('../tools/qr-code'),          { ssr: false })
const UUIDTool        = dynamic(() => import('../tools/uuid'),             { ssr: false })
const Lipsum          = dynamic(() => import('../tools/lorem-ipsum'),      { ssr: false })
const ImgCompress     = dynamic(() => import('../tools/image-compressor'), { ssr: false })
const EXIF            = dynamic(() => import('../tools/exif-remover'),     { ssr: false })
const ImgConv         = dynamic(() => import('../tools/image-converter'),  { ssr: false })
const AudioDenoise    = dynamic(() => import('../tools/audio-denoise'),    { ssr: false })

// Export the directory used by / and /tools
export const tools = [
  {
    slug: 'json-formatter',
    name: 'JSON Formatter & Validator',
    category: 'data',
    tagline: 'Prettify JSON and catch syntax errors.',
    badge: 'Local',
    component: JSONFormatter,
    props: {},
    keywords: ['json', 'format', 'prettify', 'minify', 'validate'],
    pop: 95,
    seo: {
      longDescription:
        'JSON Formatter & Validator — Prettify, minify, and validate JSON entirely in your browser. No uploads, no servers. Perfect for debugging APIs and cleaning payloads.',
      howTo: ['Paste your JSON', 'Click Format or Minify', 'Copy the result'],
      useCases: ['Debug API responses', 'Clean config files', 'Validate payloads'],
      faq: [
        { q: 'Do you upload data?', a: 'No, all processing is local.' },
        { q: 'Large files supported?', a: 'Modern browsers handle large JSON well; memory limits still apply.' }
      ],
      related: ['text-diff', 'base64']
    }
  },
  {
    slug: 'text-diff',
    name: 'Text Diff Checker',
    category: 'text',
    tagline: 'Compare two text blocks line‑by‑line.',
    badge: 'Local',
    component: TextDiff,
    props: {},
    keywords: ['diff', 'compare', 'text'],
    pop: 90,
    seo: {
      longDescription:
        'Text Diff Checker compares two text snippets line-by-line in your browser. Quickly spot changes without uploading your content.',
      howTo: ['Paste left and right text', 'Review highlights', 'Copy changed lines if needed'],
      useCases: ['Changelogs', 'Code/Copy reviews', 'Document revisions'],
      faq: [
        { q: 'Any uploads?', a: 'No, runs locally.' },
        { q: 'Supports big text?', a: 'Yes, within your browser memory limits.' }
      ],
      related: ['json-formatter', 'slugify']
    }
  },
  {
    slug: 'base64',
    name: 'Base64 Encode/Decode',
    category: 'utilities',
    tagline: 'Convert text to/from Base64.',
    badge: 'Local',
    component: Base64Tool,
    props: {},
    keywords: ['base64', 'encode', 'decode'],
    pop: 80,
    seo: {
      longDescription:
        'Base64 Encode/Decode converts strings to and from Base64 entirely in your browser. Handy for data URIs, tokens, and quick debugging.',
      howTo: ['Paste text', 'Click Encode or Decode', 'Copy the output'],
      useCases: ['Data URIs', 'Tokens', 'Quick transforms'],
      faq: [
        { q: 'Any size limits?', a: 'Only what your browser can handle comfortably.' }
      ],
      related: ['url-encoder', 'uuid']
    }
  },
  {
    slug: 'qr-code',
    name: 'QR Code Generator',
    category: 'utilities',
    tagline: 'Create QR codes for URLs or text.',
    badge: 'Local',
    component: QRTool,
    props: {},
    keywords: ['qr', 'qrcode', 'barcode'],
    pop: 88,
    seo: {
      longDescription:
        'QR Code Generator creates crisp PNG QR codes for text or URLs—no server, no tracking. Adjust size and error correction in‑browser.',
      howTo: ['Enter text/URL', 'Adjust options', 'Download PNG'],
      useCases: ['Links', 'Wi‑Fi guest access', 'Event tickets'],
      faq: [
        { q: 'Tracked?', a: 'No. Static code generated locally.' }
      ],
      related: ['url-encoder', 'uuid']
    }
  },
  {
    slug: 'uuid',
    name: 'UUID Generator',
    category: 'utilities',
    tagline: 'Create random RFC4122 IDs.',
    badge: 'Local',
    component: UUIDTool,
    props: {},
    keywords: ['uuid', 'id', 'random'],
    pop: 70,
    seo: {
      longDescription:
        'UUID Generator creates RFC4122-compliant IDs using secure randomness available in the browser.',
      howTo: ['Click Generate', 'Copy the UUID'],
      useCases: ['Database keys', 'Mock data', 'Unique links'],
      faq: [
        { q: 'Secure?', a: 'Uses crypto.getRandomValues for randomness.' }
      ],
      related: ['base64', 'qr-code']
    }
  },
  {
    slug: 'lorem-ipsum',
    name: 'Lorem Ipsum Generator',
    category: 'text',
    tagline: 'Generate placeholder paragraphs.',
    badge: 'Local',
    component: Lipsum,
    props: {},
    keywords: ['lorem ipsum', 'placeholder', 'dummy text'],
    pop: 60,
    seo: {
      longDescription:
        'Generate clean Lorem Ipsum placeholder paragraphs for mockups and wireframes. Everything runs locally in your browser.',
      howTo: ['Choose number of paragraphs', 'Copy output'],
      useCases: ['Mockups', 'Wireframes', 'Design systems'],
      faq: [],
      related: ['text-diff', 'slugify']
    }
  },
  {
    slug: 'image-compressor',
    name: 'Image Compressor',
    category: 'images',
    tagline: 'Compress JPG/WEBP in‑browser.',
    badge: 'Local',
    component: ImgCompress,
    props: {},
    keywords: ['compress', 'image', 'jpg', 'webp'],
    pop: 92,
    seo: {
      longDescription:
        'Compress images directly in your browser to shrink file size without round‑trips. Choose WEBP/JPG and quality settings, then download.',
      howTo: ['Select image', 'Pick format & quality', 'Download'],
      useCases: ['Faster sites', 'Email attachments', 'Social uploads'],
      faq: [
        { q: 'Privacy?', a: 'Processing stays on your device.' }
      ],
      related: ['image-converter', 'exif-remover']
    }
  },
  {
    slug: 'exif-remover',
    name: 'Image EXIF Remover',
    category: 'images',
    tagline: 'Strip metadata for privacy.',
    badge: 'Local',
    component: EXIF,
    props: {},
    keywords: ['exif', 'metadata', 'privacy'],
    pop: 75,
    seo: {
      longDescription:
        'Remove EXIF metadata (camera model, GPS, timestamps) from images in your browser and export a clean file.',
      howTo: ['Open image', 'Preview', 'Download clean JPG'],
      useCases: ['Privacy‑safe sharing', 'Publishing', 'Client handoffs'],
      faq: [
        { q: 'GPS removed?', a: 'Yes, metadata is not preserved in the new file.' }
      ],
      related: ['image-compressor', 'image-converter']
    }
  },
  {
    slug: 'image-converter',
    name: 'Image Converter',
    category: 'images',
    tagline: 'Convert PNG/JPG/WEBP locally.',
    badge: 'Local',
    component: ImgConv,
    props: {},
    keywords: ['convert', 'png', 'jpg', 'webp'],
    pop: 77,
    seo: {
      longDescription:
        'Convert images between PNG, JPG, and WEBP formats without uploading. Fast and private.',
      howTo: ['Select image', 'Choose output format', 'Download'],
      useCases: ['Web optimization', 'Platform requirements', 'Batch tasks (manual)'],
      faq: [],
      related: ['image-compressor', 'exif-remover']
    }
  },
  {
    slug: 'audio-denoise',
    name: 'Audio Denoise (Local)',
    category: 'utilities',
    tagline: 'Reduce background noise using filters and a noise gate — 100% in your browser.',
    badge: 'Local',
    component: AudioDenoise,
    props: {},
    keywords: ['audio denoise', 'noise reduction', 'noise gate', 'voice cleanup'],
    pop: 75,
    seo: {
      longDescription:
        'Audio Denoise removes background rumble and hiss using high/low‑pass filters plus a downward noise gate. Everything runs locally; no uploads or third‑party processing.',
      howTo: ['Select an audio/video file', 'Adjust threshold/ratio and filters', 'Preview & download WAV'],
      useCases: ['Podcast cleanup', 'Meeting recordings', 'Voiceovers', 'Short‑form video'],
      faq: [
        { q: 'Is this using AI?', a: 'This version uses efficient signal processing for speed and privacy. We can add a compact ML model later if you want stronger denoise.' },
        { q: 'Any uploads?', a: 'No. Processing stays in your browser.' }
      ],
      related: ['image-compressor', 'json-formatter']
    }
  }
] as const
