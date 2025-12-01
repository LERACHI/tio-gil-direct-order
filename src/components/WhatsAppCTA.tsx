import { MessageCircle, Clock, Percent, ThumbsUp } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import { WHATSAPP_PRIMARY } from "@/constants/contact";

const benefits = [
  {
    icon: Percent,
    title: "Sem Taxas",
    description: "Economize nas taxas dos apps de delivery",
  },
  {
    icon: Clock,
    title: "Atendimento Rápido",
    description: "Resposta imediata no WhatsApp",
  },
  {
    icon: ThumbsUp,
    title: "Pedido Personalizado",
    description: "Monte seu lanche do seu jeito",
  },
];

const WhatsAppCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-whatsapp/10 via-background to-primary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8">
            <span className="inline-block text-6xl mb-4 animate-float">💬</span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              PEÇA PELO <span className="text-whatsapp">WHATSAPP</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sem complicação, sem taxas absurdas. Fale diretamente conosco e receba 
              seu pedido mais rápido e mais barato!
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border"
              >
                <benefit.icon className="w-10 h-10 text-whatsapp mx-auto mb-3" />
                <h3 className="font-bold text-foreground text-lg mb-1 drop-shadow-sm">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Giant WhatsApp Button */}
          <div className="space-y-4">
            <WhatsAppButton
              phoneNumber={WHATSAPP_PRIMARY}
              message="Olá! Gostaria de fazer um pedido no Tio Gil Quiosque!"
              variant="whatsappGiant"
              size="giant"
              className="w-full max-w-md mx-auto"
            >
              PEDIR AGORA NO WHATSAPP
            </WhatsAppButton>
            
            <p className="text-sm text-muted-foreground">
              Clique e seja redirecionado para nosso WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppCTA;
