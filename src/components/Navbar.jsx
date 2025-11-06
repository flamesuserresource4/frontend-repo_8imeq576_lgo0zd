import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-slate-900 text-lg">AI Engineer Portfolio</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#about" className="hover:text-slate-900 transition">About</a>
          <a href="#projects" className="hover:text-slate-900 transition">Projects</a>
          <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-slate-100 text-slate-700"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-slate-100 text-slate-700"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:hello@ai.engineer"
            className="p-2 rounded-md hover:bg-slate-100 text-slate-700"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-2 bg-slate-900 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-800"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
        </div>
      </div>
    </header>
  );
}
