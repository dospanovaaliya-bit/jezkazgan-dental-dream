import { Star, Quote, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { CLINIC, REVIEWS } from "./data";

export function Reviews() {
  return (
    <section id="reviews" className="bg-white py-20 md:py-28 border-y border-slate-200">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Отзывы пациентов</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0B192C] sm:text-4xl lg:text-5xl font-display">
              Истории счастливых улыбок
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Честные отзывы пациентов, которые доверили лечение клинике Dream Smile.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="text-4xl font-black text-[#0B192C] font-display">{CLINIC.rating}</div>
              <div>
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
                <p className="mt-1 text-xs font-semibold text-slate-600">
                  {CLINIC.reviewsCount} проверенных отзывов
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((rev, i) => (
            <Reveal as="article" key={rev.name} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50/50 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/40 hover:bg-white hover:shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: rev.rating }).map((_, r) => (
                      <Star key={r} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-blue-500/20" />
                </div>

                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-slate-700">
                  «{rev.text}»
                </blockquote>

                <div className="mt-6 border-t border-slate-200/80 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="flex items-center gap-1.5 text-base font-bold text-[#0B192C] font-display">
                        {rev.name}
                        {rev.verified && (
                          <CheckCircle2 className="h-4 w-4 text-[#0066FF]" />
                        )}
                      </span>
                      <span className="block text-xs font-semibold text-[#0066FF]">
                        {rev.procedure}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400">{rev.date}</span>
                  </div>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center" delay={80}>
          <a
            href={CLINIC.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-13 items-center justify-center rounded-full border border-slate-300 bg-white px-8 text-sm font-bold text-[#0B192C] shadow-sm transition-all hover:border-[#0066FF] hover:text-[#0066FF]"
          >
            Читать все отзывы в Instagram
          </a>
        </Reveal>
      </div>
    </section>
  );
}
