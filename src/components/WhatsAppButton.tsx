import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  variant?: "whatsapp" | "whatsappGiant";
  size?: "default" | "lg" | "xl" | "giant";
  className?: string;
  children?: React.ReactNode;
}

const WhatsAppButton = ({
  phoneNumber,
  message = "Olá! Gostaria de fazer um pedido.",
  variant = "whatsapp",
  size = "lg",
  className,
  children,
}: WhatsAppButtonProps) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      asChild
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="mr-2" />
        {children || "Fazer Pedido"}
      </a>
    </Button>
  );
};

export default WhatsAppButton;
