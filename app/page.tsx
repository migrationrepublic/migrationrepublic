import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { EligibilitySection } from "@/components/EligibilitySection";
import { TrainingTypesSection } from "@/components/TrainingTypesSection";
import { CostFeesSection } from "@/components/CostFeesSection";
import { HowToApplySection } from "@/components/HowToApplySection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-white selection:bg-[#E40229]/20 selection:text-[#012269]">
      <Navbar />
      <main>
        <HeroSection />
        <EligibilitySection />
        <TrainingTypesSection />
        <CostFeesSection />
        <HowToApplySection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
