import { useEffect, useState } from "react";
import { Menu, X, Phone, Sparkles } from "lucide-react";
import { CLINIC, NAV } from "./data";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-blue-900/30 bg-[#0B192C]/90 backdrop-blur-xl shadow-lg"
          : "bg-gradient-to-b from-[#0B192C]/90 to-transparent",
      )}
    >
      <div className="container-x flex h-20 items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#top" className="group flex items-center gap-3">
          <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#0066FF] to-[#0284C7] text-white shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-transform duration-300 group-hover:scale-105">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-white font-display">
              Dream <span className="text-[#38BDF8]">Smile</span>
            </span>
            <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
              Стоматология · {CLINIC.city}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-300 transition-colors hover:text-[#38BDF8]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-4">
          <a
            href={CLINIC.phoneMainHref}
            className="hidden items-center gap-2 text-sm font-bold text-white transition-opacity hover:opacity-90 xl:flex"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-blue-500/20 text-[#38BDF8]">
              <Phone className="h-3.5 w-3.5" />
            </span>
            {CLINIC.phoneMain}
          </a>

          <a
            href="#booking"
            className="hidden items-center justify-center rounded-full bg-gradient-to-r from-[#0066FF] to-[#0284C7] px-6 py-2.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(0,102,255,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,102,255,0.5)] sm:inline-flex"
          >
            Записаться
          </a>

          <button
            type="button"
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-slate-700 bg-slate-800/80 text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-x-0 top-20 bottom-0 z-50 flex flex-col justify-between bg-[#0B192C] px-6 py-8 backdrop-blur-2xl lg:hidden">
          <nav className="flex flex-col space-y-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-2xl font-bold tracking-tight text-white hover:text-[#38BDF8]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="space-y-4 border-t border-slate-800 pt-6">
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="flex h-14 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#0066FF] to-[#0284C7] text-base font-bold text-white shadow-lg"
            >
              Записаться на приём
            </a>
            <a
              href={CLINIC.phoneMainHref}
              className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-800/60 text-base font-bold text-white"
            >
              <Phone className="h-5 w-5 text-[#38BDF8]" /> {CLINIC.phoneMain}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
