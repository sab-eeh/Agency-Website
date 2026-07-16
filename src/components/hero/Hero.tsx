import { HeroHeading } from "./HeroHeading";
import { HeroButtons } from "./HeroButtons";
import { HeroStats } from "./HeroStats";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section className="w-full px-6 py-20 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-8">
          <HeroHeading />
          <HeroButtons />
          <HeroStats />
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
