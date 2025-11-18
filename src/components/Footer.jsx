export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="text-white font-semibold mb-2">MarketHub</div>
          <p className="text-white/60">A modern multi‑vendor marketplace for unique finds.</p>
        </div>
        <div>
          <div className="text-white font-semibold mb-2">Company</div>
          <ul className="space-y-1 text-white/70">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Press</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-2">Support</div>
          <ul className="space-y-1 text-white/70">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Returns</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-2">Legal</div>
          <ul className="space-y-1 text-white/70">
            <li><a href="#" className="hover:text-white">Privacy</a></li>
            <li><a href="#" className="hover:text-white">Terms</a></li>
            <li><a href="#" className="hover:text-white">Cookies</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-white/50 text-xs pb-6">© {new Date().getFullYear()} MarketHub. All rights reserved.</div>
    </footer>
  )
}
