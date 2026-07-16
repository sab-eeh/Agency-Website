import { Container } from "../../ui/Container";
import { Section } from "../../ui/Section";

const services = [
  { title: "Brand Strategy", description: "Clear positioning and messaging for high-conviction launches." },
  { title: "Web Experience", description: "Fast, polished digital products that turn attention into action." },
  { title: "Growth Systems", description: "Data-led campaigns and product storytelling that scale." },
];

export function Services() {
  return (
    <Section background="muted" padding="md">
      <Container size="xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Services</p>
            <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">Built for momentum, not noise.</h2>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
