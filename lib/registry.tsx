import dynamic from 'next/dynamic'


{
  slug: 'audio-denoise',
  name: 'Audio Denoise (Local)',
  category: 'utilities',
  tagline: 'Reduce background noise using filters and a noise gate — 100% in your browser.',
  badge: 'Local',
  component: AudioDenoise,
  props: {},
  keywords: ['audio denoise','noise reduction','background noise','noise gate','voice cleanup'],
  pop: 75,
  seo: {
    longDescription: 'Audio Denoise removes background rumble and hiss using high/low‑pass filters and a downward noise gate. Everything runs locally in your browser; no uploads required. Ideal for podcasts, meetings, and voiceovers when you need quick cleanup without a paid app.',
    howTo: ['Select your audio file (MP3/WAV/MP4/WEBM)','Tune threshold/ratio and filter sliders','Preview and download the cleaned WAV'],
    useCases: ['Podcast cleanup','Meeting recordings','Voiceovers','YouTube shorts'],
    faq: [
      { q:'Does this upload audio?', a:'No. Processing happens in your browser for speed and privacy.' },
      { q:'Is quality equal to AI models?', a:'This is a lightweight approach that avoids large ML models. It’s fast and private; if you need stronger denoise later, we can integrate a compact WASM model.' }
    ],
    related: ['audio-transcriber','video-to-gif']
  }
},

export const tools = [
{ slug: "background-remover", name: "Background Remover (People)", category: "images", tagline: "Remove background from photos of people \u2014 locally with BodyPix.", component: dynamic(()=>import('../tools/background-remover'),{ ssr:false }), seo: {"longDescription": "Automatically remove the background from portraits using a person segmentation model (BodyPix) that runs entirely in your browser. Great for product shots, profile images, and thumbnails without sending images to a server.", "howTo": ["Upload a photo with one or more people.", "Click \u201cRemove background\u201d.", "Download the transparent PNG."], "useCases": ["Profile headshots", "E\u2011commerce photos", "Social thumbnails"], "faq": [{"q": "Does it work on objects?", "a": "This model targets people. For objects, results vary."}]} },
{ slug: "image-upscaler", name: "Image Upscaler (2\u00d7\u20134\u00d7)", category: "images", tagline: "Enhance low\u2011res images with a super\u2011resolution model (client\u2011side).", component: dynamic(()=>import('../tools/image-upscaler'),{ ssr:false }), seo: {"longDescription": "Increase image resolution by 2\u20134\u00d7 using a super\u2011resolution model in your browser. Helpful for small logos, screenshots, or scans you need to sharpen before publishing.", "howTo": ["Upload an image.", "Choose 2\u00d7, 3\u00d7, or 4\u00d7.", "Upscale and download the PNG."], "useCases": ["Sharpen logos & icons", "Improve old scans", "Recover detail for web use"]} },
{ slug: "pdf-ocr", name: "OCR to Searchable PDF", category: "pdf", tagline: "Turn images into searchable PDFs with on\u2011device OCR (Tesseract.js).", component: dynamic(()=>import('../tools/pdf-ocr'),{ ssr:false }), seo: {"longDescription": "Convert scanned images to a searchable PDF by overlaying an invisible text layer. Runs locally with Tesseract.js for privacy \u2014 great for receipts, contracts, and printouts.", "howTo": ["Choose one or more images (PNG/JPG).", "Run OCR and download the resulting PDF."], "useCases": ["Archiving receipts", "Digitizing paperwork", "Making scans searchable"], "faq": [{"q": "PDF input support?", "a": "For now, export pages as images first; full PDF OCR is planned."}]} },
{ slug: "video-converter", name: "Video to GIF/MP4 Converter", category: "video", tagline: "Convert videos to GIF or compressed MP4 using FFmpeg.wasm.", component: dynamic(()=>import('../tools/video-converter'),{ ssr:false }), seo: {"longDescription": "Convert videos to GIF or compress to MP4 entirely in your browser with FFmpeg compiled to WebAssembly. Ideal for quick demos, social posts, and lightweight clips.", "howTo": ["Upload a video.", "Choose GIF or MP4.", "Convert and download."], "useCases": ["Share short loops", "Reduce file size", "Create web\u2011friendly clips"]} },
{ slug: "audio-transcriber", name: "Audio Transcriber (Whisper Tiny)", category: "audio", tagline: "Transcribe short English audio locally with Whisper\u2011tiny via Transformers.", component: dynamic(()=>import('../tools/audio-transcriber'),{ ssr:false }), seo: {"longDescription": "Transcribe short English audio without uploading your files. Uses a compact Whisper model via @xenova/transformers that runs in the browser (first load downloads the model).", "howTo": ["Upload a short audio file.", "Run transcription.", "Copy text output."], "useCases": ["Voice notes", "Quick captions", "Meeting snippets"], "faq": [{"q": "Languages?", "a": "This build targets English (tiny.en). Multi\u2011language models are much larger."}]} },
{ slug: "audio-denoise", name: "Audio Denoise (RNNoise)", category: "audio", tagline: "Reduce background noise on voice audio using RNNoise (WASM).", component: dynamic(()=>import('../tools/audio-denoise'),{ ssr:false }), seo: {"longDescription": "Clean up noisy voice recordings locally with the RNNoise algorithm running as WebAssembly. Useful for quick improvements before sharing or transcription.", "howTo": ["Upload a noisy WAV/PCM file.", "Run denoise.", "Download cleaned audio."], "useCases": ["Podcast cleanup", "Call recordings", "Field interviews"], "faq": [{"q": "Output format?", "a": "This demo returns raw PCM for simplicity. You can rewrap as WAV using an editor or future update."}]} },
{ slug: "face-blur", name: "Auto Face Blur (Images)", category: "images", tagline: "Detect and blur faces in photos for privacy \u2014 client\u2011side.", component: dynamic(()=>import('../tools/face-blur'),{ ssr:false }), seo: {"longDescription": "Automatically detect faces and blur them locally with a lightweight detector. Ideal for anonymizing photos before posting online to protect privacy.", "howTo": ["Upload a photo.", "Click Auto\u2011blur faces.", "Download the blurred image."], "useCases": ["Social media privacy", "Press & research", "Compliance needs"]} },
{ slug: "pdf-split-merge", name: "PDF Split & Merge", category: "pdf", tagline: "Split PDFs into pages or merge multiple PDFs \u2014 all in browser.", component: dynamic(()=>import('../tools/pdf-split-merge'),{ ssr:false }), seo: {"longDescription": "Split a PDF into individual pages, or merge multiple PDFs together without uploading. Uses pdf-lib to manipulate documents directly in your browser.", "howTo": ["Split: upload a PDF; pages will download individually.", "Merge: upload multiple PDFs; download merged.pdf."], "useCases": ["Assemble proposals", "Extract pages", "Reorder documents"]} },
{ slug: "exif-remover", name: "Image EXIF Remover", category: "images", tagline: "Strip location & camera metadata from photos via re\u2011encode.", component: dynamic(()=>import('../tools/exif-remover'),{ ssr:false }), seo: {"longDescription": "Remove EXIF metadata by redrawing the image to a canvas, producing a clean re\u2011encode. Keep your location and camera details private when sharing photos.", "howTo": ["Upload a photo.", "Click download to save a clean copy."], "useCases": ["Privacy for sharing", "Reduce metadata bloat", "Sanitize uploads"]} },
{ slug: "image-converter", name: "Image Converter (WEBP/PNG/JPG)", category: "images", tagline: "Convert images locally between WEBP, PNG, and JPG.", component: dynamic(()=>import('../tools/image-converter'),{ ssr:false }), seo: {"longDescription": "Quickly convert images between WEBP, PNG, and JPG in your browser. Handy for optimizing assets for the web without leaving your tab.", "howTo": ["Upload an image.", "Choose output format.", "Download converted file."], "useCases": ["Prepare assets", "Compress for web", "Compatibility fixes"]} }
] as const

const AudioDenoise = dynamic(()=>import('../tools/audio-denoise'), { ssr:false })


