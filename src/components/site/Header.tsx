import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { CLINIC, NAV } from "./data";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
          ? "border-b border-slate-800/60 bg-[#0B132B]/95 backdrop-blur-xl shadow-lg"
          : "bg-[#0B132B]/90 backdrop-blur-md",
      )}
    >
      <div className="container-x flex h-20 items-center justify-between gap-4">
        {/* Brand Logo: Али дент */}
        <a href="#top" className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center text-blue-500">
            <svg
              className="h-8 w-8 fill-current text-[#2563EB]"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 6 2.5 9 .8 2.4 1.5 4.5 2.5 4.5.8 0 1.2-1 1.5-2.5.5-2.5.5-2.5 1-2.5s.5 0 1 2.5c.3 1.5.7 2.5 1.5 2.5 1 0 1.7-2.1 2.5-4.5 1-3 2.5-6 2.5-9 0-3.5-2.5-6-6-6z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white font-display">
              {CLINIC.name}
            </span>
            <span className="text-[11px] font-medium tracking-wide text-slate-400">
              Стоматология
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Info & Action */}
        <div className="flex items-center gap-5">
          {/* Live Open Status: Круглосуточно */}
          <div className="hidden items-center gap-2 text-xs font-medium text-slate-300 xl:flex">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <div>
              <span className="block font-semibold text-white">{CLINIC.hours}</span>
              <span className="block text-[10px] text-slate-400">{CLINIC.hoursSub}</span>
            </div>
          </div>

          {/* Phone */}
          <a
            href={CLINIC.phoneMainHref}
            className="hidden text-sm font-bold text-white transition-opacity hover:opacity-90 md:block"
          >
            {CLINIC.phoneMain}
          </a>

          {/* Booking Button */}
          <a
            href="#booking"
            className="hidden rounded-full bg-[#2563EB] px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-blue-600 sm:inline-flex"
          >
            Записаться
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-slate-700 bg-slate-800 text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-x-0 top-20 bottom-0 z-50 flex flex-col justify-between bg-[#0B132B] px-6 py-8 backdrop-blur-2xl lg:hidden">
          <nav className="flex flex-col space-y-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-2xl font-bold tracking-tight text-white hover:text-blue-400"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="space-y-4 border-t border-slate-800 pt-6">
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="flex h-14 w-full items-center justify-center rounded-2xl bg-[#2563EB] text-base font-bold text-white shadow-lg"
            >
              Записаться
            </a>
            <a
              href={CLINIC.phoneMainHref}
              className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-800/80 text-base font-bold text-white"
            >
              <Phone className="h-5 w-5 text-blue-400" /> {CLINIC.phoneMain}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
