import { Phone, Star, ShieldCheck, Sparkles, Award } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { CLINIC } from "./data";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#0B192C] text-white pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Glow Backdrops */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 -z-0 h-[40rem] w-[40rem] rounded-full bg-blue-600/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -left-40 -z-0 h-[30rem] w-[30rem] rounded-full bg-cyan-500/15 blur-[100px]"
      />

      <div className="container-x relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-900/40 px-4 py-1.5 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-[#38BDF8]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
              Премиум стоматология · {CLINIC.city}
            </span>
          </div>

          <h1 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl font-display">
            Здоровая улыбка,
            <br />
            которой хочется <span className="bg-gradient-to-r from-[#38BDF8] to-[#0066FF] bg-clip-text text-transparent">гордиться</span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Передовые европейские технологии, безболезненное лечение и индивидуальный подход к каждому пациенту в Жезказгане.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col gap-4 pt-2 sm:flex-row">
            <a
              href="#booking"
              className="animate-shimmer inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0066FF] to-[#0284C7] px-8 text-base font-bold text-white shadow-[0_0_30px_rgba(0,102,255,0.4)] transition-all hover:scale-[1.02]"
            >
              <Sparkles className="h-5 w-5" />
              Записаться на приём
            </a>
            <a
              href={CLINIC.phoneMainHref}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-8 text-base font-bold text-white backdrop-blur-md transition-all hover:border-slate-500 hover:bg-slate-800"
            >
              <Phone className="h-4 w-4 text-[#38BDF8]" />
              Позвонить нам
            </a>
          </div>

          {/* Quick Metrics */}
          <dl className="grid max-w-lg grid-cols-3 gap-6 border-t border-slate-800/80 pt-8">
            <div>
              <dt className="text-3xl font-black text-white font-display">5.0</dt>
              <dd className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                Рейтинг 2GIS & Google
              </dd>
            </div>
            <div>
              <dt className="text-3xl font-black text-[#38BDF8] font-display">3 500+</dt>
              <dd className="mt-1 text-xs text-slate-400">Довольных пациентов</dd>
            </div>
            <div>
              <dt className="text-3xl font-black text-white font-display">10 лет</dt>
              <dd className="mt-1 text-xs text-slate-400">Безупречной работы</dd>
            </div>
          </dl>
        </Reveal>

        {/* Hero Image Showcase */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-blue-500/20 bg-slate-900 p-2 shadow-2xl">
            <img
              src={heroImg}
              alt="Врач Dream Smile консультирует пациента в современном кабинете"
              width={1200}
              height={1440}
              className="h-[28rem] w-full rounded-[2rem] object-cover sm:h-[34rem] lg:h-[38rem]"
            />
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-[#0B192C]/80 via-transparent to-transparent" />
          </div>

          {/* Floating Rating Badge */}
          <div className="animate-float absolute -bottom-6 -left-4 w-[16rem] rounded-2xl border border-blue-500/30 bg-[#0B192C]/90 p-4 shadow-2xl backdrop-blur-xl sm:-left-8">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-amber-400" />
              <p className="text-sm font-bold text-white">Высший стандарт качества</p>
            </div>
            <div className="mt-2 flex items-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400" />
              ))}
            </div>
            <p className="mt-1.5 text-xs text-slate-400">
              {CLINIC.rating} из 5.0 · {CLINIC.reviewsCount} отзывов
            </p>
          </div>

          {/* Floating Open Status */}
          <div className="absolute -top-4 right-4 flex items-center gap-3 rounded-2xl border border-blue-500/30 bg-[#0B192C]/90 px-4 py-3 shadow-xl backdrop-blur-xl">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
            </span>
            <div>
              <span className="block text-xs font-bold text-white">Открыто сегодня</span>
              <span className="block text-[11px] text-slate-400">{CLINIC.hours}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
