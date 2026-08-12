import { MapPin, Phone, MessageCircle, Instagram, Clock, CheckCircle2, Navigation } from "lucide-react";
import { Reveal } from "./Reveal";
import { CLINIC } from "./data";

export function Contacts() {
  return (
    <section id="contacts" className="bg-slate-50 py-20 md:py-28">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Контакты и Филиалы</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#0F172A] sm:text-4xl lg:text-5xl font-display">
            Контакты «{CLINIC.name}»
          </h2>
          <p className="mt-2 text-base text-slate-500">
            Ждем вас на приём круглосуточно по предварительной записи в Жезказгане.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <Reveal className="space-y-6">
            {/* Address Card */}
            <div className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-100 text-[#2563EB]">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Филиал</p>
                <p className="mt-1 text-base font-bold text-[#0F172A]">{CLINIC.address}</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs font-bold text-slate-700 shadow-sm">
                    Показать вход
                  </span>
                  <span className="inline-flex items-center rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-bold text-[#2563EB]">
                    Рассмотреть
                  </span>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-emerald-100 text-emerald-600">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">График работы</p>
                <p className="mt-1 text-base font-bold text-emerald-600">{CLINIC.hours}</p>
                <p className="text-xs font-medium text-slate-500">{CLINIC.hoursSub}</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-100 text-[#2563EB]">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Телефон для записи</p>
                <a
                  href={CLINIC.phoneMainHref}
                  className="mt-1 block text-lg font-extrabold text-[#0F172A] hover:text-[#2563EB]"
                >
                  {CLINIC.phoneMain}
                </a>
              </div>
            </div>

            {/* Social Buttons (Match 2GIS screenshot) */}
            <div className="flex gap-3 pt-2">
              <a
                href={CLINIC.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-5 text-sm font-bold text-white shadow-md transition-transform hover:scale-[1.02]"
              >
                <Instagram className="h-5 w-5" /> Instagram
              </a>
              <a
                href={CLINIC.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 text-sm font-bold text-white shadow-md transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </a>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={100}>
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
              <iframe
                title="Али дент на карте"
                src="https://www.openstreetmap.org/export/embed.html?bbox=67.68%2C47.77%2C67.75%2C47.81&layer=mapnik&marker=47.7891%2C67.7139"
                loading="lazy"
                className="h-[22rem] w-full border-0 sm:h-[26rem]"
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
    <footer className="border-t border-slate-800/80 bg-[#091122] pt-16 pb-12 text-white">
      <div className="container-x grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: Brand */}
        <div className="space-y-4">
          <a href="#top" className="flex items-center gap-2.5">
            <div className="grid h-8 w-8 place-items-center text-[#2563EB]">
              <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 6 2.5 9 .8 2.4 1.5 4.5 2.5 4.5.8 0 1.2-1 1.5-2.5.5-2.5.5-2.5 1-2.5s.5 0 1 2.5c.3 1.5.7 2.5 1.5 2.5 1 0 1.7-2.1 2.5-4.5 1-3 2.5-6 2.5-9 0-3.5-2.5-6-6-6z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white font-display">
                {CLINIC.name}
              </span>
              <span className="text-[10px] font-medium text-slate-400">
                стоматология
              </span>
            </div>
          </a>

          <p className="text-xs leading-relaxed text-slate-400">
            Современная стоматология «{CLINIC.name}» в Жезказгане. Мы создаем улыбки, которыми вы будете гордиться.
          </p>

          <p className="pt-2 text-[11px] text-slate-500">
            © {new Date().getFullYear()} {CLINIC.name}. Все права защищены.
          </p>
        </div>

        {/* Column 2: Services Links */}
        <div>
          <h4 className="text-sm font-bold text-white font-display">Услуги</h4>
          <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
            <li><a href="#services" className="hover:text-white transition-colors">Терапия</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Эстетика (Виниры)</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Ортопедия</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Хирургия</a></li>
          </ul>
        </div>

        {/* Column 3: Clinic Links */}
        <div>
          <h4 className="text-sm font-bold text-white font-display">Клиника</h4>
          <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
            <li><a href="#about" className="hover:text-white transition-colors">О клинике</a></li>
            <li><a href="#doctors" className="hover:text-white transition-colors">Врачи</a></li>
            <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
            <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
          </ul>
        </div>

        {/* Column 4: Contacts & Socials */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-white font-display">Контакты</h4>

          <div className="space-y-2 text-xs text-slate-400">
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-slate-400 mt-0.5" />
              <span>{CLINIC.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-slate-400" />
              <a href={CLINIC.phoneMainHref} className="hover:text-white">{CLINIC.phoneMain}</a>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <a
              href={CLINIC.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full bg-slate-800 text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={CLINIC.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid h-9 w-9 place-items-center rounded-full bg-slate-800 text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
