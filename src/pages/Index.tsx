import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MenuHighlights from "@/components/MenuHighlights";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MenuHighlights />
        <WhatsAppCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
