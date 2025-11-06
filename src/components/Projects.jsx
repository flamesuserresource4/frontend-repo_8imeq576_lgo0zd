import { Cpu, Sparkles, Server, Shield } from "lucide-react";

const items = [
  {
    icon: Cpu,
    title: "LLM Product Assistant",
    desc:
      "Retrieval-augmented generation with semantic search, function calling, and evaluation harness.",
    tags: ["RAG", "OpenAI", "Pinecone", "LangChain"],
  },
  {
    icon: Server,
    title: "Real-time Inference Stack",
    desc:
      "GPU-optimized microservices with streaming, queuing, autoscaling, and observability.",
    tags: ["FastAPI", "Kafka", "Kubernetes", "Prometheus"],
  },
  {
    icon: Shield,
    title: "Safety & Guardrails",
    desc:
      "Prompt injection defenses, PII redaction, content filters, and evaluation datasets.",
    tags: ["OWASP", "Policies", "Red Teaming"],
  },
  {
    icon: Sparkles,
    title: "Generative UX",
    desc:
      "Interactive AI features with streaming UI, tool use, and multi-step agents.",
    tags: ["React", "WebSockets", "Agents"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Selected work</h2>
          <p className="mt-3 text-slate-600">A few highlights across applied research, platform engineering, and product UX.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <article key={item.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
