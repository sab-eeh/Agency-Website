import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export function StoryFlow() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Story"
            title="From trust to proof to offer."
            description="Every section is designed to guide the visitor through a persuasive narrative."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { title: "Trust", text: "Show your credibility and positioning early." },
              { title: "Proof", text: "Back claims with results, testimonials, and metrics." },
              { title: "Offer", text: "Close with a clear, confident next step." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
