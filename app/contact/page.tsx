'use client'
export default function Contact(){
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT
  const onSubmit = (e:any) => {
    if (!endpoint){
      e.preventDefault()
      window.location.href = 'mailto:hello@example.com?subject=FreeAIHub%20contact'
    }
  }
  return (
    <div className='container py-10'>
      <h1 className='text-2xl font-semibold'>Contact</h1>
      <p className='mt-1 text-sm text-muted-foreground'>Use the form below or email hello@example.com</p>
      <form method="POST" action={endpoint} onSubmit={onSubmit} className="mt-4 grid gap-3 max-w-lg">
        <input name="name" placeholder="Your name" required className="rounded border px-3 py-2" />
        <input name="email" type="email" placeholder="Your email" required className="rounded border px-3 py-2" />
        <textarea name="message" placeholder="How can we help?" rows={6} required className="rounded border px-3 py-2" />
        <button className="btn btn-primary w-full" type="submit">Send</button>
      </form>
      {!endpoint && <div className='mt-3 text-xs text-muted-foreground'>Tip: set <code>NEXT_PUBLIC_FORM_ENDPOINT</code> in Vercel → Project → Settings → Environment Variables to post to a service like Formspree/Web3Forms.</div>}
    </div>
  )
}
