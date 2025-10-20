import Link from "next/link";

export default function Curriculum() {
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
            <Link className="bg-[var(--accent)] text-black px-4 py-2 rounded-md font-medium hover:brightness-110" href="/contact">Apply Now</Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_-10%,rgba(118,185,0,0.25),transparent_60%),radial-gradient(600px_300px_at_90%_10%,rgba(118,185,0,0.15),transparent_60%)]" />
          <div className="max-w-6xl mx-auto px-6 py-24 sm:py-28 relative">
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
              Detailed
              <span className="accent"> Curriculum</span>
            </h1>
            <p className="mt-5 text-white/70 max-w-2xl">
              Comprehensive modules covering everything from Python basics to advanced AI deployment.
            </p>
          </div>
        </section>

        {/* Foundation Program Curriculum */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">AI Foundation Program (12 weeks)</h2>
          <div className="space-y-6">
            {[
              {
                week: "Weeks 1-3",
                title: "Python & Data Science",
                topics: ["Python fundamentals", "NumPy & Pandas", "Data visualization", "Statistics basics"],
                project: "Data analysis project"
              },
              {
                week: "Weeks 4-6",
                title: "Machine Learning Fundamentals",
                topics: ["Supervised learning", "Regression & Classification", "Model evaluation", "Feature engineering"],
                project: "ML prediction model"
              },
              {
                week: "Weeks 7-9",
                title: "Advanced ML & Deep Learning",
                topics: ["Ensemble methods", "Neural networks", "TensorFlow basics", "Computer vision intro"],
                project: "Image classification"
              },
              {
                week: "Weeks 10-12",
                title: "Capstone & Career Prep",
                topics: ["End-to-end project", "Model deployment", "Interview prep", "Portfolio building"],
                project: "Final capstone project"
              }
            ].map((module, index) => (
              <div key={index} className="rounded-lg border border-white/10 p-6 bg-white/[.03]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-1 bg-[var(--accent)]" />
                  <span className="text-sm font-medium text-[var(--accent)]">{module.week}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{module.title}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Topics covered:</h4>
                    <ul className="space-y-1 text-white/70 text-sm">
                      {module.topics.map((topic, i) => (
                        <li key={i}>• {topic}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Project:</h4>
                    <p className="text-white/70 text-sm">{module.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gen AI Program Curriculum */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">Gen AI Program (8 weeks)</h2>
          <div className="space-y-6">
            {[
              {
                week: "Weeks 1-2",
                title: "LLMs & Transformers Fundamentals",
                topics: ["Transformer architecture", "Attention mechanisms", "BERT, GPT models", "Tokenization & embeddings"],
                project: "Text generation model"
              },
              {
                week: "Weeks 3-4",
                title: "Prompt Engineering & Fine-tuning",
                topics: ["Prompt design patterns", "Few-shot learning", "Model fine-tuning", "Parameter-efficient methods"],
                project: "Custom prompt system"
              },
              {
                week: "Weeks 5-6",
                title: "RAG & Advanced Applications",
                topics: ["Retrieval-Augmented Generation", "Vector databases", "Document processing", "Multi-modal AI"],
                project: "RAG chatbot"
              },
              {
                week: "Weeks 7-8",
                title: "Production & Industry Applications",
                topics: ["Model deployment", "API integration", "Cost optimization", "Ethics & safety"],
                project: "End-to-end GenAI application"
              }
            ].map((module, index) => (
              <div key={index} className="rounded-lg border border-white/10 p-6 bg-white/[.03]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-1 bg-[var(--accent)]" />
                  <span className="text-sm font-medium text-[var(--accent)]">{module.week}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{module.title}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Topics covered:</h4>
                    <ul className="space-y-1 text-white/70 text-sm">
                      {module.topics.map((topic, i) => (
                        <li key={i}>• {topic}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Project:</h4>
                    <p className="text-white/70 text-sm">{module.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Advanced Program Curriculum */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">AI Advanced Program (16 weeks)</h2>
          <div className="space-y-6">
            {[
              {
                week: "Weeks 1-4",
                title: "Deep Learning & Neural Networks",
                topics: ["Advanced neural networks", "CNNs & RNNs", "Transfer learning", "PyTorch mastery"],
                project: "Deep learning model"
              },
              {
                week: "Weeks 5-8",
                title: "Large Language Models & NLP",
                topics: ["Transformers", "BERT & GPT", "Fine-tuning LLMs", "RAG systems"],
                project: "Custom LLM application"
              },
              {
                week: "Weeks 9-12",
                title: "MLOps & Production",
                topics: ["Model versioning", "Docker & Kubernetes", "CI/CD for ML", "Monitoring & logging"],
                project: "MLOps pipeline"
              },
              {
                week: "Weeks 13-16",
                title: "Specialization & Capstone",
                topics: ["Choose specialization", "Advanced projects", "Industry mentorship", "Job placement prep"],
                project: "Industry capstone project"
              }
            ].map((module, index) => (
              <div key={index} className="rounded-lg border border-white/10 p-6 bg-white/[.03]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-1 bg-[var(--accent)]" />
                  <span className="text-sm font-medium text-[var(--accent)]">{module.week}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{module.title}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Topics covered:</h4>
                    <ul className="space-y-1 text-white/70 text-sm">
                      {module.topics.map((topic, i) => (
                        <li key={i}>• {topic}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Project:</h4>
                    <p className="text-white/70 text-sm">{module.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">What You&apos;ll Master</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Python programming & data science",
              "Machine learning algorithms",
              "Deep learning & neural networks",
              "Large language models & NLP",
              "Generative AI & LLMs",
              "Prompt engineering & fine-tuning",
              "RAG & vector databases",
              "MLOps & model deployment",
              "Computer vision & image processing",
              "Natural language processing",
              "Model evaluation & optimization",
              "Production ML systems"
            ].map((skill, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg border border-white/10 bg-white/[.03]">
                <div className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                <span className="text-white/80">{skill}</span>
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
