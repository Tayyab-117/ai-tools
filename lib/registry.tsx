import dynamic from 'next/dynamic'
const JSONFormatter = dynamic(()=>import('../tools/json-formatter'), { ssr:false })
const TextDiff = dynamic(()=>import('../tools/text-diff'), { ssr:false })
const Base64Tool = dynamic(()=>import('../tools/base64'), { ssr:false })
const QRTool = dynamic(()=>import('../tools/qr-code'), { ssr:false })
const UUIDTool = dynamic(()=>import('../tools/uuid'), { ssr:false })
const ImgCompress = dynamic(()=>import('../tools/image-compressor'), { ssr:false })
const EXIF = dynamic(()=>import('../tools/exif-remover'), { ssr:false })
const ImgConv = dynamic(()=>import('../tools/image-converter'), { ssr:false })
const AudioDenoise = dynamic(()=>import('../tools/audio-denoise'), { ssr:false })
const PDFTools = dynamic(()=>import('../tools/pdf-tools'), { ssr:false })

export const tools = [
  { slug:'image-compressor', name:'AI Image Compressor', category:'images', tagline:'Shrink JPG/WEBP smartly in your browser.', badge:'Local', component:ImgCompress, props:{}, keywords:['compress','image','webp','jpg'], pop:95,
    seo:{ longDescription:'Compress images directly in your browser to reduce file size while keeping quality. Choose WEBP or JPG, adjust quality, and download the result — no uploads required. Ideal for creators and marketers who need fast assets.', howTo:['Select an image','Choose format & quality','Download'], useCases:['Web optimization','Email attachments','Social uploads'], faq:[{q:'Is it private?',a:'Yes. All processing is local.'}], related:['image-converter','exif-remover'] } },
  { slug:'image-converter', name:'AI Image Converter', category:'images', tagline:'Convert PNG/JPG/WEBP locally.', badge:'Local', component:ImgConv, props:{}, keywords:['convert','png','jpg','webp'], pop:82,
    seo:{ longDescription:'Convert images between PNG, JPG, and WEBP formats instantly — no servers, no tracking. Useful for platform requirements and performance.', howTo:['Select image','Choose output format','Download'], useCases:['Platform compatibility','Performance tuning'], faq:[], related:['image-compressor','exif-remover'] } },
  { slug:'exif-remover', name:'AI EXIF Remover', category:'images', tagline:'Strip camera & GPS metadata for privacy.', badge:'Local', component:EXIF, props:{}, keywords:['exif','metadata','privacy'], pop:70,
    seo:{ longDescription:'Remove EXIF metadata (camera model, GPS) from images to protect privacy. Processing happens fully on-device; export a clean file.', howTo:['Open image','Preview','Download clean JPG'], useCases:['Privacy‑safe sharing','Publishing','Client handoffs'], faq:[{q:'GPS removed?',a:'Yes, metadata is not preserved.'}], related:['image-compressor','image-converter'] } },
  { slug:'audio-denoise', name:'AI Audio Denoise', category:'audio', tagline:'Reduce rumble/hiss with filters & a noise gate — local.', badge:'Local', component:AudioDenoise, props:{}, keywords:['audio','noise reduction','voice'], pop:88,
    seo:{ longDescription:'Clean up background noise on voice recordings using high/low‑pass filters and a noise gate. Everything runs in your browser for speed and privacy.', howTo:['Select audio/video','Adjust sliders','Preview & download WAV'], useCases:['Podcasts','Meetings','Voiceovers'], faq:[{q:'AI model?',a:'This version uses efficient signal processing for robustness.'}], related:['image-compressor'] } },
  { slug:'pdf-tools', name:'AI PDF Split & Merge', category:'utilities', tagline:'Split pages or merge PDFs in your browser.', badge:'Local', component:PDFTools, props:{}, keywords:['pdf','split','merge'], pop:86,
    seo:{ longDescription:'Split a PDF by page ranges or merge multiple PDFs into one — all on-device via pdf-lib. Great for quick edits without uploading documents.', howTo:['Choose split or merge','Select file(s)','Download new PDF'], useCases:['Client docs','Coursework','Reports'], faq:[{q:'Private?',a:'Yes, processing stays on your device.'}], related:['json-formatter'] } },
  { slug:'json-formatter', name:'AI JSON Formatter', category:'data', tagline:'Prettify and validate JSON instantly.', badge:'Local', component:JSONFormatter, props:{}, keywords:['json','format','validate'], pop:75,
    seo:{ longDescription:'Format, minify, and validate JSON right in your browser — no servers. Perfect for API debugging and config files.', howTo:['Paste JSON','Click Format or Minify','Copy output'], useCases:['API responses','Config files'], faq:[], related:['text-diff'] } },
  { slug:'text-diff', name:'AI Text Diff', category:'text', tagline:'Compare two blocks line‑by‑line.', badge:'Local', component:TextDiff, props:{}, keywords:['diff','compare'], pop:74,
    seo:{ longDescription:'Visually compare two text blocks line-by-line to spot changes quickly. Stays private in your browser.', howTo:['Paste left/right','Review highlights'], useCases:['Copy reviews','Code snippets','Docs'], faq:[], related:['json-formatter'] } },
  { slug:'base64', name:'AI Base64 Encoder/Decoder', category:'utilities', tagline:'Convert strings to/from Base64.', badge:'Local', component:Base64Tool, props:{}, keywords:['base64','encode','decode'], pop:60,
    seo:{ longDescription:'Encode or decode Base64 strings without leaving the browser. Handy for data URIs and quick debugging.', howTo:['Paste text','Encode or Decode','Copy result'], useCases:['Data URIs','Tokens'], faq:[], related:['qr-code'] } },
  { slug:'qr-code', name:'AI QR Code Studio', category:'utilities', tagline:'Generate crisp QR codes for URLs/text.', badge:'Local', component:QRTool, props:{}, keywords:['qr','qrcode'], pop:78,
    seo:{ longDescription:'Generate PNG QR codes for links or text. No tracking, no uploads — just fast, local generation.', howTo:['Enter text/URL','Adjust size & level','Download PNG'], useCases:['Events','Wi‑Fi cards','Links'], faq:[], related:['base64','uuid'] } },
  { slug:'uuid', name:'AI UUID Generator', category:'utilities', tagline:'Create RFC4122 IDs using secure randomness.', badge:'Local', component:UUIDTool, props:{}, keywords:['uuid','id','random'], pop:58,
    seo:{ longDescription:'Generate RFC4122 UUIDs with crypto‑grade randomness in your browser. Great for prototypes and unique links.', howTo:['Click Generate','Copy ID'], useCases:['DB keys','Links'], faq:[{q:'Secure?',a:'Uses crypto.getRandomValues.'}], related:['qr-code'] } }
] as const

