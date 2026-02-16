import Navigation from "@/components/jiva/Navigation";
import Hero from "@/components/jiva/Hero";
import Problem from "@/components/jiva/Problem";
import HowItWorks from "@/components/jiva/HowItWorks";
import ImpactMetrics from "@/components/jiva/ImpactMetrics";
import BioCapitalLadder from "@/components/jiva/BioCapitalLadder";
import Technology from "@/components/jiva/Technology";
import Vision from "@/components/jiva/Vision";
import Footer from "@/components/jiva/Footer";

const Index = () => {
  return (
    <main>
      <Navigation />
      <Hero />
      <Problem />
      <HowItWorks />
      <ImpactMetrics />
      <BioCapitalLadder />
      <Technology />
      <Vision />
      <Footer />
    </main>
  );
};

export default Index;
