import { Phone, Star, Clock } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { CLINIC } from "./data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-28">
      <div
        aria-hidden
        className="absolute -top-40 -right-32 -z-10 h-[34rem] w-[34rem] rounded-full bg-secondary/60 blur-3xl"
      />
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="reveal is-visible">
          <p className="eyebrow">Стоматология · {CLINIC.city}</p>
          <h1 className="mt-5 text-[2.6rem] leading-[1.03] font-extrabold text-primary sm:text-6xl lg:text-[4.25rem]">
            Улыбка, которой
            <br />
            хочется <span className="italic font-medium">гордиться</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Современная стоматология в Жезказгане. Заботимся о здоровье зубов и создаем уверенную
            улыбку.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#booking"
              className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Записаться на приём
            </a>
            <a
              href={CLINIC.phoneMainHref}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-primary/25 px-8 text-base font-semibold text-primary transition-colors hover:bg-accent"
            >
              <Phone className="h-4 w-4" /> Позвонить
            </a>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <dt className="text-2xl font-extrabold text-primary">5.0</dt>
              <dd className="mt-1 text-xs text-muted-foreground">рейтинг клиники</dd>
            </div>
            <div>
              <dt className="text-2xl font-extrabold text-primary">42</dt>
              <dd className="mt-1 text-xs text-muted-foreground">оценки пациентов</dd>
            </div>
            <div>
              <dt className="text-2xl font-extrabold text-primary">09—19</dt>
              <dd className="mt-1 text-xs text-muted-foreground">работаем ежедневно</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] bg-secondary shadow-float">
            <img
              src={heroImg}
              alt="Врач Dream Smile консультирует пациента в современном кабинете"
              width={1200}
              height={1440}
              className="h-[26rem] w-full object-cover sm:h-[34rem] lg:h-[38rem]"
            />
          </div>

          <div className="absolute -bottom-6 left-3 w-[15rem] rounded-2xl border border-border/70 bg-card/95 p-4 shadow-float backdrop-blur sm:left-auto sm:-left-8">
            <p className="text-sm font-bold text-primary">Dream Smile</p>
            <div className="mt-1 flex items-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <p className="mt-1.5 text-xs text-muted-foreground">
              {CLINIC.rating} · {CLINIC.reviewsCount} оценки
            </p>
          </div>

          <div className="absolute -top-4 right-3 flex items-center gap-3 rounded-2xl border border-border/70 bg-card/95 px-4 py-3 shadow-float backdrop-blur sm:-right-6">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent text-primary">
              <Clock className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-xs font-semibold text-primary">Сегодня открыто</span>
              <span className="block text-xs text-muted-foreground">09:00 — 19:00</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
