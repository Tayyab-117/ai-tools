'use client'
import { useEffect, useState } from 'react'
import { getConsent, setConsent } from '../lib/storage'
export default function CookieBanner(){
  const [show,setShow]=useState(false)
  useEffect(()=>{ if (!getConsent()) setShow(true) },[])
  if (!show) return null
  return (<div className="cookie">
    <p className="text-sm text-gray-700">
      We use minimal cookies/local storage for preferences and optional analytics. By clicking Accept, you consent to this use.
      You can withdraw consent at any time by clearing your browser data.
    </p>
    <div className="mt-3 flex gap-2 justify-end">
      <button className="btn-secondary" onClick={()=>setShow(false)}>Reject</button>
      <button className="btn-primary" onClick={()=>{ setConsent(); setShow(false) }}>Accept</button>
    </div>
  </div>)
}
