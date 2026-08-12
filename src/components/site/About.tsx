import interior from "@/assets/interior.jpg";
import chair from "@/assets/chair.jpg";
import equipment from "@/assets/equipment.jpg";
import hero from "@/assets/hero.jpg";
import { Reveal } from "./Reveal";
import { CLINIC } from "./data";
import { CheckCircle2, Sparkles, MapPin, Clock } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#0B132B] py-20 text-white md:py-28">
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-[35rem] w-[35rem] rounded-full bg-blue-600/15 blur-[120px]"
      />

      <div className="container-x relative z-10 grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 items-center">
        <Reveal className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-1.5 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-[#38BDF8]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
              О клинике {CLINIC.name}
            </span>
          </div>

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl font-display">
            Современная стоматология в Жезказгане
          </h2>

          <p className="text-base leading-relaxed text-slate-300">
            Стоматология «{CLINIC.name}» — это 2 филиала в Жезказгане, передовые технологии диагностики, квалифицированные доктора и забота о каждом пациенте.
          </p>

          <div className="grid gap-3 pt-2">
            {[
              "2 удобных филиала в Жезказгане (городская администрация, 1 этаж)",
              "Круглосуточный приём по предварительной записи",
              "Многоуровневая стерилизация и современное 3D-оборудование",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#38BDF8]" />
                <span className="text-sm font-semibold text-slate-200">{feature}</span>
              </div>
            ))}
          </div>

          <div className="grid max-w-md grid-cols-2 gap-6 border-t border-slate-800 pt-8">
            <div>
              <p className="text-3xl font-black text-[#38BDF8] font-display">{CLINIC.rating} ★</p>
              <p className="mt-1 text-xs text-slate-400">
                {CLINIC.reviewsCount} оценки · {CLINIC.reviewsTextCount} отзывов
              </p>
            </div>
            <div>
              <p className="text-3xl font-black text-white font-display">24 / 7</p>
              <p className="mt-1 text-xs text-slate-400">Круглосуточно по записи</p>
            </div>
          </div>

          <div className="pt-4">
            <a
              href="#booking"
              className="inline-flex h-13 items-center justify-center rounded-full bg-[#2563EB] px-8 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105"
            >
              Записаться на консультацию
            </a>
          </div>
        </Reveal>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          <Reveal className="col-span-2">
            <div className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
              <img
                src={interior}
                alt="Интерьер клиники Али дент"
                loading="lazy"
                width={1024}
                height={1280}
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-80"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">
              <img
                src={chair}
                alt="Стоматологическое кресло"
                loading="lazy"
                width={1024}
                height={1024}
                className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-56"
              />
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">
              <img
                src={equipment}
                alt="Современное стоматологическое оборудование"
                loading="lazy"
                width={1024}
                height={768}
                className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-56"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
