import { Phone, MessageCircle, Calendar } from "lucide-react";
import { CLINIC } from "./data";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-800/80 bg-[#0B192C]/95 px-4 py-3 backdrop-blur-xl lg:hidden">
      <div className="flex items-center gap-2">
        <a
          href="#booking"
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#0284C7] text-sm font-bold text-white shadow-md"
        >
          <Calendar className="h-4 w-4" /> Записаться
        </a>
        <a
          href={CLINIC.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-slate-700 bg-slate-800 text-[#38BDF8]"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
        <a
          href={CLINIC.phoneMainHref}
          aria-label="Позвонить"
          className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-slate-700 bg-slate-800 text-white"
        >
          <Phone className="h-5 w-5 text-emerald-400" />
        </a>
      </div>
    </div>
  );
}
