import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Vendors() {
  const [vendors, setVendors] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API_BASE}/api/vendors?limit=6`)
        const data = await res.json()
        setVendors(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="vendors" className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl lg:text-3xl font-semibold text-white">Top vendors</h2>
          <p className="text-white/60">Shop from verified sellers</p>
        </div>
        <a href="#" className="text-blue-400 hover:text-blue-300">View all vendors</a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {(loading ? Array.from({ length: 6 }) : vendors).map((v, i) => (
          <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            <div className={`mx-auto mb-3 h-16 w-16 rounded-full ${loading ? 'bg-white/10 animate-pulse' : 'bg-white/10'} flex items-center justify-center overflow-hidden`}>
              {!loading && v.logo_url ? (
                <img src={v.logo_url} alt={v.name} className="h-full w-full object-cover" />
              ) : null}
            </div>
            <div className="text-white font-medium truncate">{loading ? ' ' : v.name}</div>
            <div className="text-white/60 text-xs mt-1">{loading ? ' ' : v.categories?.slice(0,2).join(', ')}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
