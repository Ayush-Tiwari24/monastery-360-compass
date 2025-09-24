import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { MonasteryShowcase } from "@/components/MonasteryShowcase";
import { FestivalCalendar } from "@/components/FestivalCalendar";
import { CommunitySection } from "@/components/CommunitySection";
import { CallToAction } from "@/components/CallToAction";
import { FAQ } from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <MonasteryShowcase />
      <FestivalCalendar />
      <CommunitySection />
      <CallToAction />
      <FAQ />
    </div>
  );
};

export default Index;