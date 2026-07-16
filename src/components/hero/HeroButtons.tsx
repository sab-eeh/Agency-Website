export function HeroButtons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href="/contact"
        className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        Book a Call
      </a>
      <a
        href="/work"
        className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
      >
        See Our Work
      </a>
    </div>
  );
}
