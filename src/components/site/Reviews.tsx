import { Star, Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { CLINIC } from "./data";

export function Reviews() {
  return (
    <section id="reviews" className="border-y border-border/70 bg-card/60 py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Отзывы</p>
            <h2 className="mt-4 text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
              Пациенты говорят о нас
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex items-center gap-5 rounded-2xl border border-border/70 bg-background px-6 py-5">
              <p className="text-4xl font-extrabold text-primary">{CLINIC.rating}</p>
              <div>
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {CLINIC.reviewsCount} оценки пациентов
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Reveal as="article" key={i} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-2xl border border-border/70 bg-background p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft">
                <Quote className="h-6 w-6 text-gold" />
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-muted-foreground">
                  «Здесь будет отзыв пациента»
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4 text-sm">
                  <span className="block font-semibold text-primary">Имя пациента</span>
                  <span className="block text-xs text-muted-foreground">
                    Placeholder — заменить на реальный отзыв
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12" delay={80}>
          <a
            href={CLINIC.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-13 items-center rounded-full border border-primary/25 px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-accent"
          >
            Смотреть все отзывы
          </a>
        </Reveal>
      </div>
    </section>
  );
}
