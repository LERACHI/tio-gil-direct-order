import { MapPin, Clock, Phone, Instagram, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const scheduleData = [
  { day: "Segunda-feira", hours: "Fechado" },
  { day: "Terça-feira", hours: "18:00 - 23:00" },
  { day: "Quarta-feira", hours: "18:00 - 23:00" },
  { day: "Quinta-feira", hours: "18:00 - 23:00" },
  { day: "Sexta-feira", hours: "18:00 - 00:00" },
  { day: "Sábado", hours: "18:00 - 00:00" },
  { day: "Domingo", hours: "18:00 - 23:00" },
];

const Contato = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">
              <span className="text-gradient">CONTATO</span> & HORÁRIOS
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Entre em contato conosco ou visite nossa loja. Estamos prontos para atender você!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-display text-2xl text-foreground mb-6">FALE CONOSCO</h2>
              
              <div className="space-y-6">
                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-whatsapp/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-whatsapp" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">WhatsApp</h3>
                    <p className="text-muted-foreground text-sm mb-2">Faça seu pedido diretamente</p>
                    <WhatsAppButton
                      phoneNumber="5500000000000"
                      message="Olá! Gostaria de mais informações."
                      size="default"
                    >
                      (00) 00000-0000
                    </WhatsAppButton>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Endereço</h3>
                    <p className="text-muted-foreground text-sm">
                      Rua Principal, 123<br />
                      Centro - Cidade/UF<br />
                      CEP: 00000-000
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Instagram</h3>
                    <a
                      href="https://www.instagram.com/_tiogillanches/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm"
                    >
                      @_tiogillanches
                    </a>
                    <p className="text-muted-foreground text-sm mt-1">
                      Siga-nos para promoções exclusivas!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-primary" />
                <h2 className="font-display text-2xl text-foreground">HORÁRIO DE FUNCIONAMENTO</h2>
              </div>
              
              <div className="space-y-3">
                {scheduleData.map((item, index) => {
                  const isToday = new Date().getDay() === (index === 0 ? 1 : index === 6 ? 0 : index + 1);
                  const isClosed = item.hours === "Fechado";
                  
                  return (
                    <div
                      key={item.day}
                      className={`flex justify-between items-center py-3 px-4 rounded-lg transition-colors ${
                        isToday
                          ? "bg-primary/20 border border-primary/30"
                          : "bg-muted/50"
                      }`}
                    >
                      <span className={`font-medium ${isToday ? "text-primary" : "text-foreground"}`}>
                        {item.day}
                        {isToday && (
                          <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                            HOJE
                          </span>
                        )}
                      </span>
                      <span className={isClosed ? "text-destructive" : "text-muted-foreground"}>
                        {item.hours}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Note */}
              <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">📌 Observação:</strong> Horários podem variar em feriados. 
                  Confirme pelo WhatsApp antes de visitar.
                </p>
              </div>
            </div>
          </div>

          {/* Map placeholder / CTA */}
          <div className="mt-12 text-center">
            <div className="bg-card rounded-2xl p-8 border border-border max-w-2xl mx-auto">
              <h3 className="font-display text-2xl text-foreground mb-4">
                PRONTO PARA PEDIR?
              </h3>
              <p className="text-muted-foreground mb-6">
                Clique no botão abaixo e faça seu pedido diretamente pelo WhatsApp. 
                Sem taxas, sem complicação!
              </p>
              <WhatsAppButton
                phoneNumber="5500000000000"
                message="Olá! Gostaria de fazer um pedido no Tio Gil Lanches!"
                variant="whatsappGiant"
                size="giant"
              >
                FAZER PEDIDO AGORA
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contato;
