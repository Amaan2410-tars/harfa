export default function Courses() {
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
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_-10%,rgba(118,185,0,0.25),transparent_60%),radial-gradient(600px_300px_at_90%_10%,rgba(118,185,0,0.15),transparent_60%)]" />
          <div className="max-w-6xl mx-auto px-6 py-24 sm:py-28 relative">
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
              AI Programs at
              <span className="accent"> Harfa AI Institute</span>
            </h1>
            <p className="mt-5 text-white/70 max-w-2xl">
              Choose from our comprehensive AI programs designed for different career stages and goals.
            </p>
          </div>
        </section>

        {/* Programs */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Foundation Program */}
            <div className="rounded-2xl border border-white/10 p-8 bg-white/[.03]">
              <div className="w-12 h-1 bg-[var(--accent)] mb-4" />
              <h2 className="text-2xl font-bold mb-3">AI Foundation Program</h2>
              <p className="text-white/70 mb-6">Perfect for beginners. Learn Python, data science, and machine learning fundamentals.</p>
              <ul className="space-y-2 text-white/80 mb-6">
                <li>• 12 weeks intensive</li>
                <li>• Python & Data Science</li>
                <li>• Machine Learning basics</li>
                <li>• 3 hands-on projects</li>
                <li>• Career guidance</li>
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">₹45,000</span>
                <a href="/contact" className="bg-[var(--accent)] text-black px-6 py-3 rounded-md font-semibold hover:brightness-110">
                  Apply Now
                </a>
              </div>
            </div>

            {/* Advanced Program */}
            <div className="rounded-2xl border border-white/10 p-8 bg-white/[.03]">
              <div className="w-12 h-1 bg-[var(--accent)] mb-4" />
              <h2 className="text-2xl font-bold mb-3">AI Advanced Program</h2>
              <p className="text-white/70 mb-6">For professionals. Deep learning, LLMs, MLOps, and production deployment.</p>
              <ul className="space-y-2 text-white/80 mb-6">
                <li>• 16 weeks intensive</li>
                <li>• Deep Learning & LLMs</li>
                <li>• MLOps & Deployment</li>
                <li>• 5 capstone projects</li>
                <li>• Industry mentorship</li>
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">₹75,000</span>
                <a href="/contact" className="bg-[var(--accent)] text-black px-6 py-3 rounded-md font-semibold hover:brightness-110">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Harfa AI?</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Industry Mentors", desc: "Learn from AI professionals at top companies" },
              { title: "Live Projects", desc: "Build real-world AI applications and solutions" },
              { title: "Job Placement", desc: "90% placement rate with our partner companies" },
              { title: "Flexible Learning", desc: "Evening and weekend batches available" },
              { title: "Lifetime Access", desc: "Keep access to materials and community forever" },
              { title: "Scholarships", desc: "Need-based and merit scholarships available" },
            ].map((f) => (
              <div key={f.title} className="rounded-lg border border-white/10 p-6 bg-white/[.03]">
                <div className="w-8 h-1 bg-[var(--accent)] mb-3" />
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-white/70 text-sm">{f.desc}</p>
              </div>
            ))}
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
