import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SERVICES } from "./data";

export function Services() {
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="container-x">
        {/* Section Header */}
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold text-[#0F172A] sm:text-4xl lg:text-5xl font-display">
              Наши услуги
            </h2>
            <p className="mt-2 text-base text-slate-500">
              Всё для вашей идеальной улыбки
            </p>
          </div>

          <a
            href="#booking"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2563EB] transition-colors hover:text-blue-700"
          >
            Смотреть все услуги
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>

        {/* Services Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal as="article" key={s.title} delay={i * 80}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-xl bg-slate-100">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={900}
                    height={700}
                    className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {s.hit && (
                    <span className="absolute top-2.5 left-2.5 rounded-lg bg-[#2563EB] px-2.5 py-0.5 text-[11px] font-bold text-white shadow-sm">
                      Хит
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col pt-4">
                  <h3 className="text-base font-bold text-[#0F172A] font-display">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400">
                    {s.duration}
                  </p>

                  <div className="mt-6 flex items-baseline gap-1.5">
                    <span className="text-xs text-slate-400">от</span>
                    <span className="text-base font-extrabold text-[#2563EB] font-display">
                      {s.price}
                    </span>
                  </div>

                  <a
                    href="#booking"
                    className="mt-4 flex h-10 w-full items-center justify-center rounded-xl border border-slate-200 bg-white text-xs font-bold text-[#2563EB] transition-all hover:border-[#2563EB] hover:bg-blue-50"
                  >
                    Записаться
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
