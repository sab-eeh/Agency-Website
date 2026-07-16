import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { services } from "../../content/services";

export function Services() {
  return (
    <Section>
      <Container>
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Services"
            title="We help ambitious brands move from idea to growth."
            description="Built for founders, teams, and modern companies that need clarity and momentum."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
