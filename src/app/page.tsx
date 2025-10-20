export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-6 bg-[var(--accent)]" />
            <span className="text-xl font-semibold tracking-wide">Harfa <span className="accent">AI</span></span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
            <a className="hover:text-white" href="#features">Features</a>
            <a className="hover:text-white" href="#contact">Contact</a>
            <a className="bg-[var(--accent)] text-black px-4 py-2 rounded-md font-medium hover:brightness-110" href="#cta">Get Started</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_-10%,rgba(118,185,0,0.25),transparent_60%),radial-gradient(600px_300px_at_90%_10%,rgba(118,185,0,0.15),transparent_60%)]" />
          <div className="max-w-6xl mx-auto px-6 py-24 sm:py-28 relative">
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
              Build AI experiences with
              <span className="accent"> Harfa AI</span>
            </h1>
            <p className="mt-5 text-white/70 max-w-2xl">
              Production-ready Next.js starter styled like Nvidia: high contrast, neon green accents,
              and a sleek developer-first layout.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#cta" className="bg-[var(--accent)] text-black px-5 py-3 rounded-md font-semibold hover:brightness-110">
                Get started
              </a>
              <a href="#features" className="px-5 py-3 rounded-md border border-white/15 hover:bg-white/5">
                Learn more
              </a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-6">
          {[
            { title: "Fast by default", desc: "Next.js 15 + Turbopack for instant dev DX." },
            { title: "Modern UI", desc: "Tailwind v4 with Nvidia-like neon accent." },
            { title: "Type-safe", desc: "TypeScript configured and ready to extend." },
          ].map((f) => (
            <div key={f.title} className="rounded-lg border border-white/10 p-5 bg-white/[.03]">
              <div className="w-8 h-1 bg-[var(--accent)] mb-3" />
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-white/70 mt-1 text-sm">{f.desc}</p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section id="cta" className="max-w-6xl mx-auto px-6 pb-24">
          <div className="rounded-2xl border border-white/10 p-8 sm:p-10 bg-gradient-to-br from-white/[.04] to-white/[.02]">
            <h2 className="text-2xl sm:text-3xl font-bold">Start building with Harfa AI</h2>
            <p className="text-white/70 mt-2">Clone, customize, and deploy.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="bg-[var(--accent)] text-black px-5 py-3 rounded-md font-semibold hover:brightness-110" href="#">
                Contact us
              </a>
              <a className="px-5 py-3 rounded-md border border-white/15 hover:bg-white/5" href="https://github.com/" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-white/60 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Harfa AI</span>
          <span className="accent">Built on Next.js</span>
        </div>
      </footer>
    </div>
  );
}
