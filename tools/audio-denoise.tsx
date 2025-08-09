'use client'
import { useRef, useState } from 'react'

/**
 * Dependency‑free denoise using WebAudio:
 * - High‑pass @ 120 Hz (rumble)
 * - Low‑pass @ 8 kHz (hiss)
 * - Downward noise gate via DynamicsCompressor (threshold/ratio)
 * - Optional makeup gain
 * Exports a 16‑bit PCM WAV (no external libs, works on Vercel).
 */

export default function AudioDenoise(){
  const fileRef = useRef<HTMLInputElement>(null)
  const [status,setStatus] = useState<string>('Select an audio/video file…')
  const [outUrl,setOutUrl] = useState<string>('')

  const [threshold,setThreshold] = useState(-45)  // dB
  const [ratio,setRatio] = useState(6)            // 1:n
  const [hp,setHp] = useState(120)                // Hz
  const [lp,setLp] = useState(8000)               // Hz
  const [makeup,setMakeup] = useState(0)          // dB

  async function processFile(f: File){
    setStatus('Decoding audio…')
    setOutUrl('')

    const arrayBuf = await f.arrayBuffer()
    const AC = (window.AudioContext || (window as any).webkitAudioContext)
    const ctx = new AC({ sampleRate: 48000 })
    const audio = await ctx.decodeAudioData(arrayBuf)

    const offline = new OfflineAudioContext(audio.numberOfChannels, audio.length, audio.sampleRate)
    const src = offline.createBufferSource()
    src.buffer = audio

    const hpF = offline.createBiquadFilter(); hpF.type = 'highpass'; hpF.frequency.value = hp
    const lpF = offline.createBiquadFilter(); lpF.type = 'lowpass';  lpF.frequency.value = lp

    const comp = offline.createDynamicsCompressor()
    comp.threshold.value = threshold
    comp.knee.value = 0
    comp.ratio.value = ratio
    comp.attack.value = 0.01
    comp.release.value = 0.2

    const gain = offline.createGain()
    gain.gain.value = Math.pow(10, makeup / 20)

    src.connect(hpF)
    hpF.connect(lpF)
    lpF.connect(comp)
    comp.connect(gain)
    gain.connect(offline.destination)

    setStatus('Rendering offline…')
    src.start()
    const rendered = await offline.startRendering()

    setStatus('Encoding WAV…')
    const wavBlob = encodeWav(rendered)
    const url = URL.createObjectURL(wavBlob)
    setOutUrl(url)
    setStatus('Done. Click download.')
  }

  function encodeWav(buffer: AudioBuffer){
    const numCh = buffer.numberOfChannels
    const sampleRate = buffer.sampleRate
    const length = buffer.length * numCh * 2 + 44
    const out = new ArrayBuffer(length)
    const view = new DataView(out)

    function writeStr(off: number, str: string){
      for (let i=0;i<str.length;i++) view.setUint8(off+i, str.charCodeAt(i))
    }

    let off = 0
    writeStr(off, 'RIFF'); off += 4
    view.setUint32(off, length - 8, true); off += 4
    writeStr(off, 'WAVE'); off += 4
    writeStr(off, 'fmt '); off += 4
    view.setUint32(off, 16, true); off += 4
    view.setUint16(off, 1, true); off += 2
    view.setUint16(off, numCh, true); off += 2
    view.setUint32(off, sampleRate, true); off += 4
    view.setUint32(off, sampleRate * numCh * 2, true); off += 4
    view.setUint16(off, numCh * 2, true); off += 2
    view.setUint16(off, 16, true); off += 2
    writeStr(off, 'data'); off += 4
    view.setUint32(off, length - 44, true); off += 4

    const interleaved = interleave(buffer)
    for (let i=0; i<interleaved.length; i++, off+=2){
      const s = Math.max(-1, Math.min(1, interleaved[i]))
      view.setInt16(off, s < 0 ? s * 0x8000 : s * 0x7FFF, true)
    }
    return new Blob([view], { type: 'audio/wav' })
  }

  function interleave(buffer: AudioBuffer){
    const n = buffer.length
    const numCh = buffer.numberOfChannels
    const out = new Float32Array(n * numCh)
    const chs: Float32Array[] = []
    for (let c=0;c<numCh;c++) chs[c] = buffer.getChannelData(c)
    let i=0
    for (let s=0; s<n; s++){
      for (let c=0; c<numCh; c++){
        out[i++] = chs[c][s]
      }
    }
    return out
  }

  return (
    <div className="space-y-4">
      <div className="card p-4 flex flex-wrap items-center gap-3">
        <input ref={fileRef} type="file" accept="audio/*,video/*" className="input" onChange={e=>{
          const f = e.target.files?.[0]; if(f) processFile(f)
        }}/>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 w-full">
          <label className="text-xs text-gray-600">
            Threshold (dB)
            <input type="range" min="-80" max="-10" step="1" value={threshold} onChange={e=>setThreshold(parseInt(e.target.value))}/>
            <div className="text-xs">{threshold} dB</div>
          </label>
          <label className="text-xs text-gray-600">
            Ratio
            <input type="range" min="1" max="20" step="1" value={ratio} onChange={e=>setRatio(parseInt(e.target.value))}/>
            <div className="text-xs">{ratio}:1</div>
          </label>
          <label className="text-xs text-gray-600">
            High‑pass
            <input type="range" min="20" max="400" step="5" value={hp} onChange={e=>setHp(parseInt(e.target.value))}/>
            <div className="text-xs">{hp} Hz</div>
          </label>
          <label className="text-xs text-gray-600">
            Low‑pass
            <input type="range" min="4000" max="16000" step="250" value={lp} onChange={e=>setLp(parseInt(e.target.value))}/>
            <div className="text-xs">{lp} Hz</div>
          </label>
          <label className="text-xs text-gray-600">
            Makeup (dB)
            <input type="range" min="-6" max="12" step="1" value={makeup} onChange={e=>setMakeup(parseInt(e.target.value))}/>
            <div className="text-xs">{makeup} dB</div>
          </label>
        </div>
      </div>

      <div className="text-sm text-gray-600">{status}</div>
      {outUrl && (
        <div className="card p-4">
          <audio controls src={outUrl} className="w-full" />
          <a className="btn-primary mt-3 inline-block" href={outUrl} download="denoised.wav">Download WAV</a>
        </div>
      )}
    </div>
  )
}
