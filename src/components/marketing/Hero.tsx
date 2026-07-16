import { Container } from "../ui/Container";
import { Section } from "../ui/Section";

export function Hero() {
  return (
    <Section className="bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl space-y-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Agency Studio</p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              We turn bold ideas into unforgettable digital experiences.
            </h1>
            <p className="max-w-xl text-lg text-slate-300">
              Strategy, design, and growth systems for founders who want to stand out and scale with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                Book a Call
              </a>
              <a href="/work" className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                See Our Work
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur">
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
              <div className="h-40 rounded-2xl bg-linear-to-br from-blue-500 to-violet-500" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
