import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl space-y-3">
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {description ? <p className="text-lg text-slate-600">{description}</p> : null}
    </div>
  );
}

export default SectionHeading;
