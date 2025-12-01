import { MapPin, Clock, Instagram, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_PRIMARY, WHATSAPP_PRIMARY_DISPLAY } from "@/constants/contact";

const scheduleData = [
  { day: "Segunda-feira", hours: "Fechado" },
  { day: "Terça-feira", hours: "18:00 - 23:00" },
  { day: "Quarta-feira", hours: "18:00 - 23:00" },
  { day: "Quinta-feira", hours: "18:00 - 23:00" },
  { day: "Sexta-feira", hours: "18:00 - 00:00" },
  { day: "Sábado", hours: "18:00 - 00:00" },
  { day: "Domingo", hours: "18:00 - 23:00" },
];

const location = {
  title: "Tio Gil Quiosque",
  street: "Avenida República Argentina, esquina com Santos Dumont, 1673",
  city: "Foz do Iguaçu/PR, Brasil",
  mapsUrl:
    "https://www.google.com/maps?q=Avenida+Rep%C3%BAblica+Argentina+esquina+com+Santos+Dumont+1673,+Foz+do+Igua%C3%A7u,+PR,+Brazil",
};

const Contato = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">
              <span className="text-gradient">CONTATO</span> E HORÁRIOS
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Entre em contato conosco ou visite nossa loja. Estamos prontos para atender você!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-display text-2xl text-foreground mb-6">FALE CONOSCO</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-whatsapp/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-whatsapp" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">WhatsApp</h3>
                    <p className="text-muted-foreground text-sm mb-3">Faça seu pedido diretamente</p>
                    <div className="space-y-2 text-sm mb-3">
                      <a
                        href={`https://wa.me/${WHATSAPP_PRIMARY}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-foreground hover:text-primary"
                      >
                        <MessageCircle className="w-4 h-4 text-whatsapp" />
                        {WHATSAPP_PRIMARY_DISPLAY}
                      </a>
                    </div>
                    <WhatsAppButton
                      phoneNumber={WHATSAPP_PRIMARY}
                      message="Olá! Gostaria de mais informações."
                      size="default"
                    >
                      Pedir pelo WhatsApp
                    </WhatsAppButton>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="w-full">
                    <h3 className="font-semibold text-foreground mb-3">Endereço</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl border border-border bg-muted/40 shadow-sm transition-colors hover:border-primary/50 hover:bg-primary/5">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <MapPin className="w-4 h-4" />
                          </span>
                          <p className="font-semibold text-foreground">{location.title}</p>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {location.street}
                          <br />
                          {location.city}
                        </p>
                        <a
                          href={location.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-3 px-3 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold shadow-sm hover:shadow-md transition"
                        >
                          <MapPin className="w-4 h-4" />
                          Abrir no Google Maps
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Instagram</h3>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm"
                    >
                      {INSTAGRAM_HANDLE}
                    </a>
                    <p className="text-muted-foreground text-sm mt-1">Siga-nos para promoções exclusivas!</p>
                  </div>
                </div>
              </div>
            </div>

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
                        isToday ? "bg-primary/20 border border-primary/30" : "bg-muted/50"
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
                      <span className={isClosed ? "text-destructive" : "text-muted-foreground"}>{item.hours}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Observação:</strong> Horários podem variar em feriados. Confirme
                  pelo WhatsApp antes de visitar.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-card rounded-2xl p-8 border border-border max-w-2xl mx-auto">
              <h3 className="font-display text-2xl text-foreground mb-4">PRONTO PARA PEDIR?</h3>
              <p className="text-muted-foreground mb-6">
                Clique no botão abaixo e faça seu pedido diretamente pelo WhatsApp. Sem taxas, sem complicação!
              </p>
              <WhatsAppButton
                phoneNumber={WHATSAPP_PRIMARY}
                message="Olá! Gostaria de fazer um pedido no Tio Gil Quiosque!"
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
