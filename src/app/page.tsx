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
            <a className="hover:text-white" href="/courses">Courses</a>
            <a className="hover:text-white" href="/curriculum">Curriculum</a>
            <a className="hover:text-white" href="/admissions">Admissions</a>
            <a className="hover:text-white" href="/contact">Contact</a>
            <a className="bg-[var(--accent)] text-black px-4 py-2 rounded-md font-medium hover:brightness-110" href="/contact">Apply Now</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_-10%,rgba(118,185,0,0.25),transparent_60%),radial-gradient(600px_300px_at_90%_10%,rgba(118,185,0,0.15),transparent_60%)]" />
          <div className="max-w-6xl mx-auto px-6 py-24 sm:py-28 relative">
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
              Learn AI. Land jobs. With
              <span className="accent"> Harfa AI Institute</span>
            </h1>
            <p className="mt-5 text-white/70 max-w-2xl">
              Industry-focused AI courses taught by expert mentors. Hands‑on projects, interview prep,
              and career support to get you job‑ready.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#curriculum" className="bg-[var(--accent)] text-black px-5 py-3 rounded-md font-semibold hover:brightness-110">
                View curriculum
              </a>
              <a href="#enroll" className="px-5 py-3 rounded-md border border-white/15 hover:bg-white/5">
                Enroll now
              </a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-6">
          {[
            { title: "Practical curriculum", desc: "ML, LLMs, MLOps, and GenAI with real datasets." },
            { title: "Mentor guidance", desc: "Live sessions, code reviews, and 1:1 doubt clearing." },
            { title: "Career outcomes", desc: "Interview prep, projects, and referral network." },
          ].map((f) => (
            <div key={f.title} className="rounded-lg border border-white/10 p-5 bg-white/[.03]">
              <div className="w-8 h-1 bg-[var(--accent)] mb-3" />
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-white/70 mt-1 text-sm">{f.desc}</p>
            </div>
          ))}
        </section>

        {/* Curriculum teaser */}
        <section id="curriculum" className="max-w-6xl mx-auto px-6 pb-10">
          <div className="rounded-2xl border border-white/10 p-8 sm:p-10 bg-white/[.03]">
            <h2 className="text-2xl sm:text-3xl font-bold">Curriculum overview</h2>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-white/80">
              <li>Python for Data Science, NumPy, Pandas</li>
              <li>Machine Learning: Sklearn, Experimentation</li>
              <li>Deep Learning: PyTorch, CNNs, RNNs</li>
              <li>LLMs & RAG: Transformers, Prompting, Evaluation</li>
              <li>MLOps: DVC, Docker, CI/CD</li>
              <li>Capstone projects and portfolio</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section id="enroll" className="max-w-6xl mx-auto px-6 pb-24">
          <div className="rounded-2xl border border-white/10 p-8 sm:p-10 bg-gradient-to-br from-white/[.04] to-white/[.02]">
            <h2 className="text-2xl sm:text-3xl font-bold">Enroll in the next cohort</h2>
            <p className="text-white/70 mt-2">Limited seats. Scholarships available.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="bg-[var(--accent)] text-black px-5 py-3 rounded-md font-semibold hover:brightness-110" href="#">
                Apply now
              </a>
              <a className="px-5 py-3 rounded-md border border-white/15 hover:bg-white/5" href="#">
                Download brochure
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
