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
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "border-b border-border/70 bg-background/85 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <span className="h-2 w-2 shrink-0 rounded-full bg-gold" />
          <span className="truncate text-lg font-extrabold tracking-tight text-primary md:text-xl">
            Dream Smile
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={CLINIC.phoneMainHref}
            className="hidden text-sm font-semibold text-primary md:block"
          >
            {CLINIC.phoneMain}
          </a>
          <a
            href="#booking"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 sm:inline-flex"
          >
            Записаться
          </a>
          <button
            type="button"
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border text-primary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-50 bg-background px-5 pt-6 lg:hidden">
          <nav className="flex flex-col divide-y divide-border">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-5 text-2xl font-semibold tracking-tight text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-8 space-y-3">
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="flex h-14 items-center justify-center rounded-full bg-primary text-base font-semibold text-primary-foreground"
            >
              Записаться на приём
            </a>
            <a
              href={CLINIC.phoneMainHref}
              className="flex h-14 items-center justify-center gap-2 rounded-full border border-primary/25 text-base font-semibold text-primary"
            >
              <Phone className="h-4 w-4" /> {CLINIC.phoneMain}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
