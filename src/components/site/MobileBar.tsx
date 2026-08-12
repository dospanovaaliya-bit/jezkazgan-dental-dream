import { Phone, MessageCircle } from "lucide-react";
import { CLINIC } from "./data";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/70 bg-background/95 px-4 py-3 backdrop-blur-xl lg:hidden">
      <div className="flex items-center gap-2">
        <a
          href="#booking"
          className="flex h-13 flex-1 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
        >
          Записаться
        </a>
        <a
          href={CLINIC.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="grid h-13 w-13 shrink-0 place-items-center rounded-full border border-primary/25 text-primary"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
        <a
          href={CLINIC.phoneMainHref}
          aria-label="Позвонить"
          className="grid h-13 w-13 shrink-0 place-items-center rounded-full border border-primary/25 text-primary"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
