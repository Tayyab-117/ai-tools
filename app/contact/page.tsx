'use client'
import { useState } from 'react'
export default function Contact(){
  const endpoint=process.env.NEXT_PUBLIC_FORM_ENDPOINT as string|undefined
  const [status,setStatus]=useState<string|null>(null)
  const onSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault(); const form=e.currentTarget; const data=new FormData(form)
    if(!endpoint){ const subject=encodeURIComponent('FreeAIHub contact'); const body=encodeURIComponent(`${data.get('name')}\n${data.get('email')}\n\n${data.get('message')}`); window.location.href=`mailto:hello@example.com?subject=${subject}&body=${body}`; return }
    setStatus('Sending...'); try{ const res=await fetch(endpoint,{method:'POST',body:data}); if(res.ok){ setStatus('Thanks!'); form.reset() } else setStatus('Failed to send') }catch{ setStatus('Network error') }
  }
  return (<div className="container py-10"><h1 className="text-2xl font-semibold mb-2">Contact</h1>
    <form onSubmit={onSubmit} className="card p-4 max-w-xl space-y-3"><input name="name" placeholder="Your name" className="input" required/>
    <input name="email" placeholder="Your email" type="email" className="input" required/><textarea name="message" className="textarea" placeholder="How can we help?" required/>
    <button className="btn-primary" type="submit">Send</button>{status && <div className="text-sm text-gray-600">{status}</div>}</form></div>)
}

