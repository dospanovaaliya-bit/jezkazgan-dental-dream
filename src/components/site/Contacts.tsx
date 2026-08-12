import { MapPin, Clock, Phone, MessageCircle, Instagram } from "lucide-react";
import { Reveal } from "./Reveal";
import { CLINIC } from "./data";

export function Contacts() {
  return (
    <section id="contacts" className="py-20 md:py-28">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Контакты</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
            Мы рядом
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <Reveal className="space-y-8">
            <div className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border text-primary">
                <MapPin className="h-4.5 w-4.5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">Адрес</p>
                <p className="mt-1.5 text-base font-semibold text-primary">{CLINIC.address}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border text-primary">
                <Phone className="h-4.5 w-4.5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">Телефоны</p>
                <div className="mt-1.5 space-y-1">
                  {CLINIC.phones.map((p, i) => (
                    <a
                      key={p}
                      href={CLINIC.phoneHrefs[i]}
                      className="block text-base font-semibold text-primary transition-opacity hover:opacity-70"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border text-primary">
                <Clock className="h-4.5 w-4.5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">График</p>
                <p className="mt-1.5 text-base font-semibold text-primary">Ежедневно</p>
                <p className="text-sm text-muted-foreground">09:00 — 19:00</p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <a
                href={CLINIC.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={CLINIC.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-primary/25 text-sm font-semibold text-primary transition-colors hover:bg-accent"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <a
                href={CLINIC.phoneMainHref}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-primary/25 text-sm font-semibold text-primary transition-colors hover:bg-accent"
              >
                <Phone className="h-4 w-4" /> Позвонить
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-hidden rounded-3xl border border-border/70 bg-card shadow-soft">
              <iframe
                title="Dream Smile на карте — Проспект Алашахана, 66, Жезказган"
                src="https://www.openstreetmap.org/export/embed.html?bbox=67.68%2C47.77%2C67.75%2C47.81&layer=mapnik&marker=47.7891%2C67.7139"
                loading="lazy"
                className="h-[24rem] w-full border-0 sm:h-[30rem]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-card/60 py-10">
      <div className="container-x flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p className="font-bold text-primary">Dream Smile · Жезказган</p>
        <p>{CLINIC.hours}</p>
      </div>
    </footer>
  );
}
