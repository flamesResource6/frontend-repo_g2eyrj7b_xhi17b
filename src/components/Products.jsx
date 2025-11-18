import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Products() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API_BASE}/api/products?limit=8`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="products" className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl lg:text-3xl font-semibold text-white">Featured products</h2>
          <p className="text-white/60">Handpicked items from top vendors</p>
        </div>
        <a href="#" className="text-blue-400 hover:text-blue-300">Browse all</a>
      </div>

      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-64 rounded-xl bg-white/5 border border-white/10 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((p, i) => (
            <div key={i} className="group rounded-xl bg-white/5 border border-white/10 overflow-hidden hover:translate-y-[-2px] transition">
              <div className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800" style={{backgroundImage: p.image_url ? `url(${p.image_url})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center'}} />
              <div className="p-4">
                <div className="text-white font-medium truncate">{p.title}</div>
                <div className="text-white/60 text-sm mt-1 truncate">{p.category}</div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-white font-semibold">${'{'}p.price.toFixed(2){'}'}</span>
                  <button className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-500">Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
