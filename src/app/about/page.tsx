import { Container } from "../../components/ui/Container";
import { Section } from "../../components/ui/Section";

export default function AboutPage() {
  return (
    <Section padding="lg">
      <Container size="md" className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">About</p>
        <h1 className="text-4xl font-semibold text-slate-950 sm:text-5xl">We help ambitious teams shape stories that convert.</h1>
        <p className="max-w-2xl text-lg text-slate-600">
          Our process blends strategy, design, and product thinking to create launches that feel clear and confident.
        </p>
      </Container>
    </Section>
  );
}
