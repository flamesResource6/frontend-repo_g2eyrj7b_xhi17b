import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  async function subscribe(e) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${API_BASE}/api/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setEmail('')
    } catch (e) {
      console.error(e)
      setStatus('error')
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-white">Get product drops and deals</h3>
          <p className="text-white/70 text-sm mt-1">Join our newsletter. No spam, unsubscribe anytime.</p>
        </div>
        <form onSubmit={subscribe} className="flex w-full md:w-auto gap-2">
          <input required type="email" value={email} onChange={e=>setEmail(e.target.value)} className="flex-1 md:w-80 rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-white/40" placeholder="Enter your email" />
          <button disabled={status==='loading'} className="px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-60">Subscribe</button>
        </form>
        {status==='success' && <p className="text-green-400 text-sm">Subscribed! 🎉</p>}
        {status==='error' && <p className="text-red-400 text-sm">Try again later.</p>}
      </div>
    </section>
  )
}
