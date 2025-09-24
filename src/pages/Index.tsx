import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TechnologyFeatures } from "@/components/TechnologyFeatures";
import { MonasteryShowcase } from "@/components/MonasteryShowcase";
import { HomestaysGuides } from "@/components/HomestaysGuides";
import { FestivalCalendar } from "@/components/FestivalCalendar";
import { CommunitySection } from "@/components/CommunitySection";
import { CallToAction } from "@/components/CallToAction";
import { FAQ } from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <TechnologyFeatures />
      <MonasteryShowcase />
      <HomestaysGuides />
      <FestivalCalendar />
      <CommunitySection />
      <CallToAction />
      <FAQ />
    </div>
  );
};

export default Index;