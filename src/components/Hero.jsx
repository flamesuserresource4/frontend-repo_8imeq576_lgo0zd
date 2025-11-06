import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl py-20">
          <span className="inline-flex items-center rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200">AI Engineer • ML Systems • Generative UX</span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">Building intelligent products that feel like magic</h1>
          <p className="mt-4 text-lg text-slate-700">I design, train, and ship AI features end‑to‑end — from research and data pipelines to real‑time inference and delightful user experiences.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow hover:bg-slate-800">View projects</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white/80 backdrop-blur px-5 py-3 text-sm font-medium text-slate-900 ring-1 ring-inset ring-slate-200 hover:bg-white">Get in touch</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white"></div>
    </section>
  );
}
