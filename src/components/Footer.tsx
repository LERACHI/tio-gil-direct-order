import { Instagram, MapPin, Clock, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍔</span>
              <span className="font-display text-2xl text-gradient">
                TIO GIL LANCHES
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Os melhores hambúrgueres artesanais da região.
              Qualidade e sabor em cada mordida.
            </p>
          </div>

          {/* Quick Info */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">INFORMAÇÕES</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Rua Principal, 123 - Centro
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                Ter-Dom: 18h às 23h
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                (00) 00000-0000
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">REDES SOCIAIS</h4>
            <a
              href="https://www.instagram.com/_tiogillanches/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-lg text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @_tiogillanches
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tio Gil Lanches. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
