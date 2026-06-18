import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-[#2a2a2a]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-bold text-sm">C</div>
          <span className="font-semibold text-lg">ChurnRadar</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">Pricing</Link>
          <Link href="/login" className="text-sm text-zinc-400 hover:text-white transition-colors">Login</Link>
          <Link href="/signup" className="text-sm bg-indigo-500 hover:bg-indigo-600 transition-colors px-4 py-2 rounded-lg font-medium">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-8 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 text-sm text-indigo-400 mb-8">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
          Real-time competitor intelligence
        </div>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Your competitor just got a<br />
          <span className="gradient-text">1-star review.</span><br />
          We tell you who left it.
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
          ChurnRadar monitors G2, Capterra, and Trustpilot 24/7. The moment a competitor's customer is unhappy, your sales team gets an AI-drafted outreach email — ready to send.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/signup" className="bg-indigo-500 hover:bg-indigo-600 transition-colors px-8 py-3.5 rounded-lg font-semibold text-lg">
            Start Free Trial
          </Link>
          <Link href="#how-it-works" className="text-zinc-400 hover:text-white transition-colors px-8 py-3.5 rounded-lg border border-[#2a2a2a] font-medium">
            See How It Works
          </Link>
        </div>
        <p className="text-sm text-zinc-600 mt-4">No credit card required · 14-day free trial</p>
      </section>

      {/* Stats */}
      <section className="border-y border-[#2a2a2a] py-12">
        <div className="max-w-4xl mx-auto px-8 grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-white mb-1">2.4M+</div>
            <div className="text-zinc-500 text-sm">Reviews monitored daily</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-1">94%</div>
            <div className="text-zinc-500 text-sm">Outreach open rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-1">11x</div>
            <div className="text-zinc-500 text-sm">Average ROI vs subscription cost</div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-5xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">From angry review to closed deal</h2>
          <p className="text-zinc-400">Three steps. Fully automated.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: '01',
              title: 'We monitor your competitors',
              desc: 'Add any competitor by name or URL. ChurnRadar watches G2, Capterra, Trustpilot, and Reddit around the clock.'
            },
            {
              step: '02',
              title: 'AI scores switch readiness',
              desc: 'Every negative review gets a 1–10 Switch Readiness Score. Only high-intent leads reach your team.'
            },
            {
              step: '03',
              title: 'Your team gets a warm lead',
              desc: 'An AI-drafted personalized email lands in your CRM — HubSpot or Salesforce — ready to send in one click.'
            }
          ].map((item) => (
            <div key={item.step} className="glass rounded-xl p-8">
              <div className="text-5xl font-bold text-indigo-500/20 mb-4">{item.step}</div>
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
