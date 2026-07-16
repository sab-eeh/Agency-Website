export function HeroVisual() {
  return (
    <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-linear-to-br from-blue-600 via-indigo-600 to-violet-600 p-8 text-white shadow-xl">
      <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
        <div className="mb-6 h-40 rounded-2xl bg-white/20" />
        <div className="space-y-3">
          <div className="h-3 w-3/4 rounded-full bg-white/80" />
          <div className="h-3 w-2/3 rounded-full bg-white/60" />
          <div className="h-3 w-1/2 rounded-full bg-white/40" />
        </div>
      </div>
    </div>
  );
}
