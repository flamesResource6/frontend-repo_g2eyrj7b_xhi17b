import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-600/20 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 lg:pt-28 lg:pb-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 mb-4">
            Multi‑vendor marketplace
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white">
            Discover unique products from trusted vendors
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-xl">
            Shop new arrivals, best sellers, and curated collections. Sellers join in minutes and reach customers worldwide.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#products" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition">
              Shop products
            </a>
            <a href="#cta" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition">
              Become a vendor
            </a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-600/20 border border-white/10 backdrop-blur-sm p-2">
            <div className="h-full w-full rounded-xl bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.25),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.25),transparent_40%)]" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
