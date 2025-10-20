import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-6 bg-[var(--accent)]" />
            <Link href="/" className="text-xl font-semibold tracking-wide">Harfa <span className="accent">AI</span></Link>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
            <Link className="hover:text-white" href="/courses">Courses</Link>
            <Link className="hover:text-white" href="/curriculum">Curriculum</Link>
            <Link className="hover:text-white" href="/admissions">Admissions</Link>
            <Link className="hover:text-white" href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_-10%,rgba(118,185,0,0.25),transparent_60%),radial-gradient(600px_300px_at_90%_10%,rgba(118,185,0,0.15),transparent_60%)]" />
          <div className="max-w-6xl mx-auto px-6 py-24 sm:py-28 relative">
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight">Contact & Apply</h1>
            <p className="mt-5 text-white/70 max-w-2xl">Fill the form and we’ll get back within 24 hours.</p>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-6 pb-24">
          <form name="harfa-contact" method="POST" action="/contact" className="space-y-4 rounded-2xl border border-white/10 p-6 bg-white/[.03]">
            <input type="hidden" name="form-name" value="harfa-contact" />
            <div>
              <label className="block text-sm mb-1">Full name</label>
              <input name="name" required className="w-full bg-transparent border border-white/15 rounded-md px-3 py-2 outline-none focus:border-[var(--accent)]" />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input type="email" name="email" required className="w-full bg-transparent border border-white/15 rounded-md px-3 py-2 outline-none focus:border-[var(--accent)]" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Program</label>
                <select name="program" className="w-full bg-transparent border border-white/15 rounded-md px-3 py-2 outline-none focus:border-[var(--accent)]">
                  <option className="bg-black" value="Foundation">AI Foundation</option>
                  <option className="bg-black" value="Advanced">AI Advanced</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Phone</label>
                <input name="phone" className="w-full bg-transparent border border-white/15 rounded-md px-3 py-2 outline-none focus:border-[var(--accent)]" />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea name="message" rows={4} className="w-full bg-transparent border border-white/15 rounded-md px-3 py-2 outline-none focus:border-[var(--accent)]" />
            </div>
            <button type="submit" className="bg-[var(--accent)] text-black px-5 py-3 rounded-md font-semibold hover:brightness-110">Submit</button>
          </form>
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

