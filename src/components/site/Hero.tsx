import { ArrowRight, Play, Star, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { CLINIC } from "./data";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#0B132B] pt-32 pb-16 text-white md:pt-40 md:pb-24">
      {/* Soft Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-10 h-[38rem] w-[38rem] rounded-full bg-blue-600/15 blur-[130px]"
      />

      <div className="container-x relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        {/* Left Column Text */}
        <Reveal className="space-y-6">
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-semibold text-slate-300">
              Стоматология «{CLINIC.name}» · {CLINIC.branches}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.2rem] font-display">
            Здоровая
            <br />
            улыбка,
            <br />
            которой <span className="text-[#38BDF8]">хочется</span>
            <br />
            <span className="text-[#38BDF8]">гордиться</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
            Современные технологии, опытные врачи и круглосуточная забота о каждом пациенте в Жезказгане. Мы создаем улыбки, которые меняют жизнь.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
            <a
              href="#booking"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#2563EB] px-8 text-base font-bold text-white shadow-lg transition-all hover:bg-blue-600 hover:scale-[1.02]"
            >
              Записаться на прием
              <ArrowRight className="h-5 w-5" />
            </a>

            <a
              href="#services"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/50 px-7 text-base font-bold text-white backdrop-blur-md transition-all hover:bg-slate-800"
            >
              Смотреть услуги
              <span className="grid h-7 w-7 place-items-center rounded-full border border-slate-600 bg-slate-800">
                <Play className="h-3 w-3 fill-current ml-0.5" />
              </span>
            </a>
          </div>

          {/* Bottom Social Proof & Verified Rating Widgets */}
          <div className="flex flex-wrap items-center gap-6 border-t border-slate-800/80 pt-8">
            {/* Avatar Stack + Text */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="Пациент"
                  className="h-9 w-9 rounded-full border-2 border-[#0B132B] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                  alt="Пациент"
                  className="h-9 w-9 rounded-full border-2 border-[#0B132B] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
                  alt="Пациент"
                  className="h-9 w-9 rounded-full border-2 border-[#0B132B] object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-extrabold text-white">{CLINIC.happyPatients}</p>
                <p className="text-xs text-slate-400">счастливых пациентов</p>
              </div>
            </div>

            {/* Divider line */}
            <div className="hidden h-10 w-px bg-slate-800 sm:block" />

            {/* Verified Rating Box (From 2GIS screenshot) */}
            <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-2.5 backdrop-blur-md">
              <span className="text-2xl font-black text-white font-display">{CLINIC.rating}</span>
              <div>
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400">
                    <CheckCircle2 className="h-3 w-3" /> Подтверждён
                  </span>
                </div>
                <p className="mt-0.5 text-[11px] text-slate-400">
                  {CLINIC.reviewsCount} оценки · {CLINIC.reviewsTextCount} отзывов в 2ГИС
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right Column Image */}
        <Reveal delay={100} className="relative">
          <div className="overflow-hidden rounded-[2.5rem] border border-slate-800/80 bg-slate-900 shadow-2xl">
            <img
              src={heroImg}
              alt="Врач Али дент консультирует пациента в современном кабинете"
              width={1200}
              height={1440}
              className="h-[26rem] w-full object-cover sm:h-[32rem] lg:h-[36rem]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
