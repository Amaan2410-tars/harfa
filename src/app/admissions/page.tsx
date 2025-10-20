export default function Admissions() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-6 bg-[var(--accent)]" />
            <a href="/" className="text-xl font-semibold tracking-wide">Harfa <span className="accent">AI</span></a>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
            <a className="hover:text-white" href="/courses">Courses</a>
            <a className="hover:text-white" href="/curriculum">Curriculum</a>
            <a className="hover:text-white" href="/admissions">Admissions</a>
            <a className="hover:text-white" href="/contact">Contact</a>
            <a className="bg-[var(--accent)] text-black px-4 py-2 rounded-md font-medium hover:brightness-110" href="/contact">Apply Now</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_-10%,rgba(118,185,0,0.25),transparent_60%),radial-gradient(600px_300px_at_90%_10%,rgba(118,185,0,0.15),transparent_60%)]" />
          <div className="max-w-6xl mx-auto px-6 py-24 sm:py-28 relative">
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight">Admissions</h1>
            <p className="mt-5 text-white/70 max-w-2xl">Eligibility, application process, and key dates for Harfa AI Institute programs.</p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
          <div className="rounded-lg border border-white/10 p-6 bg-white/[.03]">
            <div className="w-8 h-1 bg-[var(--accent)] mb-3" />
            <h3 className="font-semibold mb-2">Eligibility</h3>
            <ul className="text-white/80 text-sm space-y-1">
              <li>• Foundation: Basic programming familiarity preferred</li>
              <li>• Advanced: ML basics and Python experience</li>
              <li>• Laptop with GPU preferred (optional)</li>
            </ul>
          </div>
          <div className="rounded-lg border border-white/10 p-6 bg-white/[.03]">
            <div className="w-8 h-1 bg-[var(--accent)] mb-3" />
            <h3 className="font-semibold mb-2">Process</h3>
            <ol className="text-white/80 text-sm space-y-1 list-decimal list-inside">
              <li>Apply via the contact form</li>
              <li>Short screening (15 mins)</li>
              <li>Offer & scholarship decision</li>
              <li>Enroll and start learning</li>
            </ol>
          </div>
          <div className="rounded-lg border border-white/10 p-6 bg-white/[.03]">
            <div className="w-8 h-1 bg-[var(--accent)] mb-3" />
            <h3 className="font-semibold mb-2">Key Dates</h3>
            <ul className="text-white/80 text-sm space-y-1">
              <li>• Applications open: Always on</li>
              <li>• Next cohort: 1st of every month</li>
              <li>• Orientation: Friday before start</li>
            </ul>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="rounded-2xl border border-white/10 p-8 sm:p-10 bg-gradient-to-br from-white/[.04] to-white/[.02] flex items-center justify-between gap-6 flex-col sm:flex-row">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">Ready to apply?</h2>
              <p className="text-white/70 mt-2">Submit your application and we’ll reach out within 24 hours.</p>
            </div>
            <a className="bg-[var(--accent)] text-black px-6 py-3 rounded-md font-semibold hover:brightness-110" href="/contact">
              Apply now
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-white/60 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Harfa AI Institute</span>
          <span className="accent">Empowering AI Careers</span>
        </div>
      </footer>
    </div>
  );
}

