import { Container } from "../../ui/Container";
import { Section } from "../../ui/Section";

export function Hero() {
  return (
    <Section background="default" padding="lg">
      <Container size="xl">
        <div className="grid gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Agency Studio</p>
            <h1 className="text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              We build stories people remember and trust.
            </h1>
            <p className="max-w-xl text-lg text-slate-600">
              Strategic brand and web experiences for modern companies who want clarity, momentum, and growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                Book a Call
              </a>
              <a href="/work" className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                View Work
              </a>
            </div>
          </div>

          <div className="rounded-[1.5rem] bg-linear-to-br from-slate-950 via-slate-800 to-blue-700 p-8 text-white shadow-card">
            <div className="h-48 rounded-[1.25rem] border border-white/20 bg-white/10" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
