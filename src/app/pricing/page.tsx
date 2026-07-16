import { Container } from "../../components/ui/Container";
import { Section } from "../../components/ui/Section";

export default function PricingPage() {
  return (
    <Section padding="lg">
      <Container size="md" className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Pricing</p>
        <h1 className="text-4xl font-semibold text-slate-950 sm:text-5xl">Flexible support for launch phases and growth moments.</h1>
        <p className="max-w-2xl text-lg text-slate-600">
          Choose a focused engagement or a long-term partnership depending on your timeline and ambition.
        </p>
      </Container>
    </Section>
  );
}
