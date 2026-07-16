import { Container } from "../../components/ui/Container";
import { Section } from "../../components/ui/Section";

export default function WorkPage() {
  return (
    <Section padding="lg">
      <Container size="md" className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Work</p>
        <h1 className="text-4xl font-semibold text-slate-950 sm:text-5xl">A portfolio of launches designed to be remembered.</h1>
        <p className="max-w-2xl text-lg text-slate-600">
          Each engagement pairs storytelling with product clarity to create fast-moving digital experiences.
        </p>
      </Container>
    </Section>
  );
}
