import { MapPin, Clock, Phone, MessageCircle, Instagram, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { CLINIC } from "./data";

export function Contacts() {
  return (
    <section id="contacts" className="bg-white py-20 md:py-28">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Контакты и Локация</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#0B192C] sm:text-4xl lg:text-5xl font-display">
            Мы всегда на связи в Жезказгане
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Удобное расположение в центре города, бесплатная парковка для пациентов.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <Reveal className="space-y-8">
            <div className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-slate-100 text-[#0066FF]">
                <MapPin className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Адрес клиники</p>
                <p className="mt-1 text-lg font-bold text-[#0B192C] font-display">{CLINIC.address}</p>
                <p className="mt-0.5 text-xs text-slate-500">Проспект Алашахана, 66 (ориентир — центр города)</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-slate-100 text-[#0066FF]">
                <Phone className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Телефоны для записи</p>
                <div className="mt-1.5 space-y-1">
                  {CLINIC.phones.map((p, i) => (
                    <a
                      key={p}
                      href={CLINIC.phoneHrefs[i]}
                      className="block text-base font-bold text-[#0B192C] transition-colors hover:text-[#0066FF]"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-slate-100 text-[#0066FF]">
                <Clock className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Режим работы</p>
                <p className="mt-1 text-base font-bold text-[#0B192C] font-display">Ежедневно, без перерывов</p>
                <p className="text-sm font-semibold text-[#0066FF]">09:00 — 19:00</p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={CLINIC.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-2xl bg-emerald-600 text-sm font-bold text-white shadow-md transition-transform hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </a>
              <a
                href={CLINIC.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white text-sm font-bold text-[#0B192C] shadow-sm transition-all hover:border-pink-500 hover:text-pink-600"
              >
                <Instagram className="h-5 w-5" /> Instagram
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
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
    <footer className="border-t border-slate-800 bg-[#0B192C] py-10 text-white">
      <div className="container-x flex flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-[#38BDF8]" />
          <span className="font-bold text-white font-display">Dream Smile · Стоматология в Жезказгане</span>
        </div>
        <p className="text-xs">© {new Date().getFullYear()} Dream Smile. Все права защищены.</p>
      </div>
    </footer>
  );
}
