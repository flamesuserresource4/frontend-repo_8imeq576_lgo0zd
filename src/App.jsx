import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter text-slate-900 bg-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl sm:text-4xl font-bold">Hi, I’m an AI Engineer.</h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                I specialize in turning state-of-the-art research into reliable, scalable products. My focus areas include
                large language models, multimodal systems, data engineering, evaluation, and safety. I care about
                correctness, latency, cost, and the craft of creating intuitive, playful interfaces.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 p-5 bg-white">
                  <h3 className="font-semibold">What I do</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
                    <li>Design RAG + agent architectures</li>
                    <li>Ship real-time AI features end-to-end</li>
                    <li>Optimize inference for throughput & cost</li>
                    <li>Set up evaluation loops and guardrails</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-200 p-5 bg-white">
                  <h3 className="font-semibold">Stack</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
                    <li>Python, FastAPI, PyTorch</li>
                    <li>OpenAI/Anthropic, LangChain, LlamaIndex</li>
                    <li>Postgres, Redis, Kafka</li>
                    <li>React, WebSockets, Tailwind</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="rounded-2xl border border-slate-200 p-6 bg-gradient-to-br from-slate-50 to-white">
                <h3 className="font-semibold">Highlights</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>• 5+ years building ML platforms</li>
                  <li>• Led LLM feature from prototype to GA</li>
                  <li>• Cut inference cost by 40%</li>
                  <li>• Wrote internal prompt & eval playbook</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
