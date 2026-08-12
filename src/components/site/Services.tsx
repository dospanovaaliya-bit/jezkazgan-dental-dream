import { useState } from "react";
import { ArrowUpRight, Clock, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { SERVICES, SERVICE_CATEGORIES } from "./data";
import { cn } from "@/lib/utils";

export function Services() {
  const [activeCategory, setActiveCategory] = useState("Все");

  const filteredServices =
    activeCategory === "Все"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="bg-slate-50/70 py-20 md:py-28">
      <div className="container-x">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Полный спектр услуг</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0B192C] sm:text-4xl lg:text-5xl font-display">
              Всё для здоровья и красоты вашей улыбки
            </h2>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-xl px-4 py-2 text-xs font-bold transition-all",
                  activeCategory === cat
                    ? "bg-[#0B192C] text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Services Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredServices.map((s, i) => (
            <Reveal as="article" key={s.title} delay={(i % 4) * 70}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/40 hover:shadow-xl">
                <div className="relative overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={900}
                    height={700}
                    className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {s.popular && (
                    <span className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-[#0066FF] px-3 py-1 text-[11px] font-bold text-white shadow-md">
                      <Sparkles className="h-3 w-3" /> Хит
                    </span>
                  )}
                  <span className="absolute bottom-3 left-3 rounded-lg bg-[#0B192C]/90 px-2.5 py-1 text-[11px] font-semibold text-[#38BDF8] backdrop-blur-md">
                    {s.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-[#0B192C] font-display">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {s.text}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                    <div>
                      <span className="block text-[11px] font-medium text-slate-400">Стоимость</span>
                      <span className="text-base font-extrabold text-[#0066FF]">{s.price}</span>
                    </div>

                    <a
                      href="#booking"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0B192C] transition-colors group-hover:text-[#0066FF]"
                    >
                      Записаться
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
