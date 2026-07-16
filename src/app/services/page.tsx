import { Container } from "../../components/ui/Container";
import { Section } from "../../components/ui/Section";

export default function ServicesPage() {
  return (
    <Section padding="lg">
      <Container size="md" className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Services</p>
        <h1 className="text-4xl font-semibold text-slate-950 sm:text-5xl">From positioning to launch, everything is built to move with purpose.</h1>
        <p className="max-w-2xl text-lg text-slate-600">
          We shape brands, websites, and growth systems that feel refined and perform with clarity.
        </p>
      </Container>
    </Section>
  );
}
