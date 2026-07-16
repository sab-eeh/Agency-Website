import { Container } from "../../primitives/Container";
import { Section } from "../../primitives/Section";

const projects = [
  { name: "Northstar Labs", summary: "A complete rebrand and launch platform for a global fintech team." },
  { name: "Lumen Commerce", summary: "A conversion-focused site experience that doubled qualified demos." },
];

export function FeaturedWork() {
  return (
    <Section background="default" spacing="md">
      <Container size="wide">
        <div className="space-y-6">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Featured work</p>
            <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">Selected stories with measurable lift.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.name} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8 shadow-soft">
                <div className="h-40 rounded-[1.25rem] bg-linear-to-br from-slate-900 via-slate-700 to-blue-600" />
                <h3 className="mt-6 text-2xl font-semibold text-slate-950">{project.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{project.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
