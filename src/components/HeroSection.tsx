import WhatsAppButton from "./WhatsAppButton";
import heroBurger from "@/assets/hero-burger.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBurger})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary mb-6 animate-slide-up">
            <span className="text-sm font-medium">🔥 Peça direto e economize nas taxas!</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-4 animate-slide-up animation-delay-100">
            <span className="text-gradient">TIO GIL</span>
            <br />
            LANCHES
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto animate-slide-up animation-delay-200">
            Os melhores hambúrgueres artesanais da região. 
            Ingredientes frescos, sabor incomparável.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-300">
            <WhatsAppButton
              phoneNumber="5500000000000"
              message="Olá! Gostaria de fazer um pedido no Tio Gil Lanches!"
              variant="whatsappGiant"
              size="giant"
            >
              FAZER PEDIDO AGORA
            </WhatsAppButton>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-muted-foreground animate-slide-up animation-delay-400">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="text-sm">4.9 no Google</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span className="text-sm">Entrega Rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💰</span>
              <span className="text-sm">Sem taxas de app</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
