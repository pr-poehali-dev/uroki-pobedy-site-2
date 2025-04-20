
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import MilitaryTechSection from "@/components/sections/MilitaryTechSection";
import DocumentsSection from "@/components/sections/DocumentsSection";
import CrimeaSection from "@/components/sections/CrimeaSection";
import HeroesSection from "@/components/sections/HeroesSection";
import DonbassSection from "@/components/sections/DonbassSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f1f0fb]">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <MilitaryTechSection />
      <DocumentsSection />
      <CrimeaSection />
      <HeroesSection />
      <DonbassSection />
      <Footer />
    </div>
  );
};

export default Index;
