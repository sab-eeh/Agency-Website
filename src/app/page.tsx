import { Hero } from "../components/sections/hero/Hero";
import { Services } from "../components/sections/services/Services";
import { FeaturedWork } from "../components/sections/FeaturedWork/FeaturedWork";
import { Navbar } from "../components/layout/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero />
      <Services />
      <FeaturedWork />
    </main>
  );
}
