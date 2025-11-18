import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function CTA() {
  const [form, setForm] = useState({ name: '', email: '', store_name: '', message: '' })
  const [status, setStatus] = useState('idle')

  async function submit(e) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${API_BASE}/api/vendor/apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setForm({ name: '', email: '', store_name: '', message: '' })
    } catch (e) {
      console.error(e)
      setStatus('error')
    }
  }

  return (
    <section id="cta" className="max-w-7xl mx-auto px-6 py-16">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 p-8 md:p-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white">Become a vendor</h3>
            <p className="text-white/70 mt-2">Launch your store, manage inventory, and reach new customers. No setup fees.</p>
            <ul className="mt-4 space-y-2 text-white/70 text-sm list-disc list-inside">
              <li>Fast onboarding</li>
              <li>Dashboard & analytics</li>
              <li>Secure payouts</li>
            </ul>
          </div>
          <form onSubmit={submit} className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input required value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-white/40" placeholder="Your name" />
              <input required type="email" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-white/40" placeholder="Email" />
            </div>
            <input required value={form.store_name} onChange={e=>setForm(f=>({...f,store_name:e.target.value}))} className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-white/40" placeholder="Store name" />
            <textarea value={form.message} onChange={e=>setForm(f=>({...f,message:e.target.value}))} rows={3} className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-white/40" placeholder="Tell us about your store (optional)" />
            <button disabled={status==='loading'} className="w-full md:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-60">
              {status==='loading' ? 'Submitting...' : 'Apply now'}
            </button>
            {status==='success' && <p className="text-green-400 text-sm">Thanks! We’ll reach out soon.</p>}
            {status==='error' && <p className="text-red-400 text-sm">Something went wrong. Try again.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
