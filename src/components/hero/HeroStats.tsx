const stats = [
  { label: "Projects launched", value: "120+" },
  { label: "Happy clients", value: "95%" },
  { label: "Avg. growth", value: "3x" },
];

export function HeroStats() {
  return (
    <div className="flex flex-wrap gap-6 pt-2">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
          <p className="text-sm text-slate-600">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
