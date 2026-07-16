import { Container } from "../../components/ui/Container";
import { Section } from "../../components/ui/Section";

export default function ContactPage() {
  return (
    <Section padding="lg">
      <Container size="md" className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Contact</p>
        <h1 className="text-4xl font-semibold text-slate-950 sm:text-5xl">Let’s build something worth showing off.</h1>
        <p className="max-w-2xl text-lg text-slate-600">
          Share your goals and we’ll shape a launch plan around your momentum.
        </p>
      </Container>
    </Section>
  );
}
