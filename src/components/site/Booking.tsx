import { useState } from "react";
import { Check, Sparkles, Calendar, Clock, User, Phone as PhoneIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { CLINIC, SERVICES, DOCTORS } from "./data";

export function Booking() {
  const [sent, setSent] = useState(false);
  const [selectedService, setSelectedService] = useState(SERVICES[0].title);
  const [selectedDoctor, setSelectedDoctor] = useState(DOCTORS[0].name);

  return (
    <section id="booking" className="relative overflow-hidden bg-[#0B192C] py-20 text-white md:py-28">
      {/* Background Lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 h-[35rem] w-[35rem] rounded-full bg-blue-600/15 blur-[120px]"
      />

      <div className="container-x relative z-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 items-center">
        <Reveal className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-900/40 px-4 py-1.5 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-[#38BDF8]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
              Онлайн запись
            </span>
          </div>

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl font-display">
            Готовы позаботиться о своей улыбке?
          </h2>

          <p className="max-w-md text-base leading-relaxed text-slate-300">
            Запишитесь на консультацию в Dream Smile. Мы подберем удобное время и ответим на все вопросы.
          </p>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Нужна срочная консультация?</p>
            <a
              href={CLINIC.phoneMainHref}
              className="mt-2 inline-flex items-center gap-3 text-xl font-black text-white hover:text-[#38BDF8]"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-600 text-white">
                <PhoneIcon className="h-5 w-5" />
              </span>
              {CLINIC.phoneMain}
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-3xl border border-blue-500/20 bg-slate-900/90 p-8 shadow-2xl backdrop-blur-xl">
            {sent ? (
              <div className="flex min-h-80 flex-col items-center justify-center text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-[#0066FF] to-[#0284C7] text-white shadow-lg animate-bounce">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white font-display">Заявка успешно отправлена!</h3>
                <p className="mt-3 max-w-sm text-sm text-slate-300">
                  Спасибо! Администратор Dream Smile свяжется с вами в течение 10 минут для подтверждения времени.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 rounded-full border border-slate-700 bg-slate-800 px-6 py-2 text-xs font-bold text-white hover:bg-slate-700"
                >
                  Записаться ещё раз
                </button>
              </div>
            ) : (
              <form
                className="grid gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Имя и Фамилия</span>
                    <input
                      required
                      name="name"
                      autoComplete="name"
                      placeholder="Ваше имя"
                      className="mt-2 h-12 w-full rounded-xl border border-slate-700 bg-slate-800/80 px-4 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-[#0066FF]"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Номер телефона</span>
                    <input
                      required
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+7 (___) ___-__-__"
                      className="mt-2 h-12 w-full rounded-xl border border-slate-700 bg-slate-800/80 px-4 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-[#0066FF]"
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Выберите услугу</span>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="mt-2 h-12 w-full rounded-xl border border-slate-700 bg-slate-800/80 px-4 text-sm text-white outline-none transition-colors focus:border-[#0066FF]"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.title} value={s.title} className="bg-slate-900 text-white">
                          {s.title} ({s.price})
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Желаемый врач</span>
                    <select
                      value={selectedDoctor}
                      onChange={(e) => setSelectedDoctor(e.target.value)}
                      className="mt-2 h-12 w-full rounded-xl border border-slate-700 bg-slate-800/80 px-4 text-sm text-white outline-none transition-colors focus:border-[#0066FF]"
                    >
                      {DOCTORS.map((d) => (
                        <option key={d.name} value={d.name} className="bg-slate-900 text-white">
                          {d.name}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Удобная дата</span>
                  <input
                    name="date"
                    type="date"
                    className="mt-2 h-12 w-full rounded-xl border border-slate-700 bg-slate-800/80 px-4 text-sm text-white outline-none transition-colors focus:border-[#0066FF]"
                  />
                </label>

                <button
                  type="submit"
                  className="animate-shimmer mt-2 h-14 w-full rounded-2xl bg-gradient-to-r from-[#0066FF] to-[#0284C7] text-base font-bold text-white shadow-lg transition-transform hover:scale-[1.02]"
                >
                  Подтвердить запись
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
