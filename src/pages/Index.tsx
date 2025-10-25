import { Hero } from "@/components/Hero";
import { MarketFinder } from "@/components/MarketFinder";
import { FeaturedProduce } from "@/components/FeaturedProduce";
import { TrustSection } from "@/components/TrustSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <MarketFinder />
      <FeaturedProduce />
      <TrustSection />
    </main>
  );
};

export default Index;
