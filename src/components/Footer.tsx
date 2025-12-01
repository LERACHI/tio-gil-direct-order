import { Instagram, MapPin, Clock, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_PRIMARY_DISPLAY } from "@/constants/contact";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍔</span>
              <span className="font-display text-2xl text-gradient">TIO GIL QUIOSQUE</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Os melhores hambúrgueres artesanais da região. Qualidade e sabor em cada mordida.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground mb-4">INFORMAÇÕES</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>
                  Avenida República Argentina, esquina com Santos Dumont, 1673<br />
                  Foz do Iguaçu - PR
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                Ter-Dom: 18h às 23h
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MessageCircle className="w-4 h-4 text-primary" />
                WhatsApp: {WHATSAPP_PRIMARY_DISPLAY}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground mb-4">REDES SOCIAIS</h4>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-lg text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tio Gil Quiosque. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
