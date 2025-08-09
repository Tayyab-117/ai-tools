'use client'
import { useRef, useState } from 'react'
export default function AudioDenoise(){
  const fileRef = useRef<HTMLInputElement>(null); const [status,setStatus] = useState<string>('Select an audio/video file…'); const [outUrl,setOutUrl] = useState<string>('')
  const [threshold,setThreshold] = useState(-45); const [ratio,setRatio] = useState(6); const [hp,setHp] = useState(120); const [lp,setLp] = useState(8000); const [makeup,setMakeup] = useState(0)
  async function processFile(f: File){ setStatus('Decoding audio…'); setOutUrl(''); const arrayBuf = await f.arrayBuffer(); const AC = (window.AudioContext || (window as any).webkitAudioContext); const ctx = new AC({ sampleRate: 48000 }); const audio = await ctx.decodeAudioData(arrayBuf)
    const offline = new OfflineAudioContext(audio.numberOfChannels, audio.length, audio.sampleRate); const src = offline.createBufferSource(); src.buffer = audio
    const hpF = offline.createBiquadFilter(); hpF.type='highpass'; hpF.frequency.value=hp; const lpF = offline.createBiquadFilter(); lpF.type='lowpass'; lpF.frequency.value=lp
    const comp = offline.createDynamicsCompressor(); comp.threshold.value=threshold; comp.knee.value=0; comp.ratio.value=ratio; comp.attack.value=0.01; comp.release.value=0.2
    const gain=offline.createGain(); gain.gain.value=Math.pow(10,makeup/20); src.connect(hpF); hpF.connect(lpF); lpF.connect(comp); comp.connect(gain); gain.connect(offline.destination)
    setStatus('Rendering…'); src.start(); const rendered = await offline.startRendering(); setStatus('Encoding WAV…'); const wavBlob = encodeWav(rendered); const url = URL.createObjectURL(wavBlob); setOutUrl(url); setStatus('Done. Download below.') }
  function encodeWav(buffer: AudioBuffer){ const numCh=buffer.numberOfChannels, sampleRate=buffer.sampleRate; const length=buffer.length*numCh*2+44; const out=new ArrayBuffer(length); const view=new DataView(out)
    function wstr(o:number,s:string){ for(let i=0;i<s.length;i++) view.setUint8(o+i,s.charCodeAt(i)) } let o=0; wstr(o,'RIFF'); o+=4; view.setUint32(o,length-8,true); o+=4; wstr(o,'WAVE'); o+=4; wstr(o,'fmt '); o+=4
    view.setUint32(o,16,true); o+=4; view.setUint16(o,1,true); o+=2; view.setUint16(o,numCh,true); o+=2; view.setUint32(o,sampleRate,true); o+=4; view.setUint32(o,sampleRate*numCh*2,true); o+=4; view.setUint16(o,numCh*2,true); o+=2; view.setUint16(o,16,true); o+=2; wstr(o,'data'); o+=4; view.setUint32(o,length-44,true); o+=4
    const inter=interleave(buffer); for(let i=0;i<inter.length;i++,o+=2){ const s=Math.max(-1,Math.min(1,inter[i])); view.setInt16(o, s<0?s*0x8000:s*0x7FFF, true) } return new Blob([view],{type:'audio/wav'}) }
  function interleave(buffer: AudioBuffer){ const n=buffer.length, ch=buffer.numberOfChannels; const out=new Float32Array(n*ch); const arr:Float32Array[]=[]; for(let c=0;c<ch;c++) arr[c]=buffer.getChannelData(c); let i=0; for(let s=0;s<n;s++) for(let c=0;c<ch;c++) out[i++]=arr[c][s]; return out }
  return (<div className="space-y-4"><div className="card p-4 flex flex-wrap items-center gap-3">
      <input ref={fileRef} type="file" accept="audio/*,video/*" className="input" onChange={e=>{ const f=e.target.files?.[0]; if(f) processFile(f) }}/>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 w-full">
        <label className="text-xs text-gray-600">Threshold<input type="range" min="-80" max="-10" step="1" value={threshold} onChange={e=>setThreshold(parseInt(e.target.value))}/><div className="text-xs">{threshold} dB</div></label>
        <label className="text-xs text-gray-600">Ratio<input type="range" min="1" max="20" step="1" value={ratio} onChange={e=>setRatio(parseInt(e.target.value))}/><div className="text-xs">{ratio}:1</div></label>
        <label className="text-xs text-gray-600">High‑pass<input type="range" min="20" max="400" step="5" value={hp} onChange={e=>setHp(parseInt(e.target.value))}/><div className="text-xs">{hp} Hz</div></label>
        <label className="text-xs text-gray-600">Low‑pass<input type="range" min="4000" max="16000" step="250" value={lp} onChange={e=>setLp(parseInt(e.target.value))}/><div className="text-xs">{lp} Hz</div></label>
        <label className="text-xs text-gray-600">Makeup<input type="range" min="-6" max="12" step="1" value={makeup} onChange={e=>setMakeup(parseInt(e.target.value))}/><div className="text-xs">{makeup} dB</div></label>
      </div></div>
    <div className="text-sm text-gray-600">{status}</div>{outUrl && (<div className="card p-4"><audio controls src={outUrl} className="w-full" /><a className="btn-primary mt-3 inline-block" href={outUrl} download="denoised.wav">Download WAV</a></div>)}</div>)}

