export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} AI Engineer. All rights reserved.</p>
          <div className="text-xs text-slate-500">
            Built with love for AI, systems, and great UX.
          </div>
        </div>
      </div>
    </footer>
  );
}
