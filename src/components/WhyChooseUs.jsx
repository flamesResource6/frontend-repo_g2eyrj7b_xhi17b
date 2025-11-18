export default function WhyChooseUs() {
  const features = [
    { title: 'Buyer protection', desc: 'Secure checkout and 7‑day returns' },
    { title: 'Verified sellers', desc: 'Every vendor is screened and rated' },
    { title: 'Fast shipping', desc: 'Reliable delivery partners worldwide' },
    { title: '24/7 support', desc: 'We’re here whenever you need us' },
  ]
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-8">Why choose us</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-white font-medium">{f.title}</div>
            <div className="text-white/60 text-sm mt-1">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
