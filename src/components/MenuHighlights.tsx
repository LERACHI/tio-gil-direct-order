import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    name: "X-Bacon Especial",
    description: "Hambúrguer artesanal 180g, bacon crocante, queijo cheddar, alface, tomate e molho especial",
    price: "R$ 28,90",
    tag: "Mais Pedido",
  },
  {
    name: "X-Tudo do Tio",
    description: "O maior da casa! Duplo hambúrguer, ovo, bacon, presunto, queijo, todos os acompanhamentos",
    price: "R$ 38,90",
    tag: "Campeão",
  },
  {
    name: "X-Salada Fit",
    description: "Hambúrguer grelhado, queijo light, muita salada fresca e molho de iogurte",
    price: "R$ 24,90",
    tag: "Saudável",
  },
  {
    name: "Combo Família",
    description: "4 X-Burgers + Batata Grande + 4 Refrigerantes. Perfeito para compartilhar!",
    price: "R$ 99,90",
    tag: "Economia",
  },
];

const MenuHighlights = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            DESTAQUES DO <span className="text-gradient">CARDÁPIO</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Conheça nossos lanches mais pedidos. Feitos com ingredientes selecionados e muito amor.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className="group relative bg-muted rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(38_100%_50%_/_0.15)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Tag */}
              <div className="absolute -top-3 left-6">
                <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full">
                  {item.tag}
                </span>
              </div>

              <div className="flex justify-between items-start gap-4 mt-2">
                <div>
                  <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="font-display text-2xl text-primary">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to full menu */}
        <div className="text-center">
          <Button variant="hero" size="xl" asChild>
            <a
              href="https://anota.ai/tiogillanches"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2" />
              Ver Cardápio Completo
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Acesse nosso cardápio digital completo com todas as opções
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
