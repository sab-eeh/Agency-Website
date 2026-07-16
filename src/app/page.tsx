import { Hero } from "../components/sections/Hero/Hero";
import { Services } from "../components/sections/Services/Services";
import { FeaturedWork } from "../components/sections/FeaturedWork/FeaturedWork";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <FeaturedWork />
    </main>
  );
}
