import Hero from './components/Hero'
import Products from './components/Products'
import Vendors from './components/Vendors'
import CTA from './components/CTA'
import WhyChooseUs from './components/WhyChooseUs'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold">MarketHub</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#products" className="hover:text-white">Products</a>
            <a href="#vendors" className="hover:text-white">Vendors</a>
            <a href="#cta" className="hover:text-white">Become a vendor</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-sm">Sign in</button>
            <button className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-sm">Sign up</button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Products />
        <Vendors />
        <CTA />
        <WhyChooseUs />
        <Newsletter />
      </main>

      <Footer />
    </div>
  )
}

export default App
