import { useState } from "react";
import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

export function Booking() {
  const [sent, setSent] = useState(false);

  return (
    <section id="booking" className="bg-secondary/70 py-20 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">Запись</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
            Готовы позаботиться о своей улыбке?
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Запишитесь на консультацию в Dream Smile
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-soft sm:p-9">
            {sent ? (
              <div className="flex min-h-72 flex-col items-center justify-center text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-accent text-primary">
                  <Check className="h-6 w-6" />
                </span>
                <p className="mt-6 max-w-sm text-lg leading-relaxed font-semibold text-primary">
                  Спасибо! Мы получили вашу заявку и свяжемся с вами в ближайшее время.
                </p>
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
                    <span className="text-xs font-semibold tracking-wide text-primary">Имя</span>
                    <input
                      required
                      name="name"
                      autoComplete="name"
                      placeholder="Ваше имя"
                      className="mt-2 h-13 w-full rounded-xl border border-input bg-background px-4 py-3.5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold tracking-wide text-primary">
                      Телефон
                    </span>
                    <input
                      required
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+7 ___ ___ __ __"
                      className="mt-2 h-13 w-full rounded-xl border border-input bg-background px-4 py-3.5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-xs font-semibold tracking-wide text-primary">
                    Удобная дата
                  </span>
                  <input
                    name="date"
                    type="date"
                    className="mt-2 h-13 w-full rounded-xl border border-input bg-background px-4 py-3.5 text-base text-foreground outline-none transition-colors focus:border-primary"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold tracking-wide text-primary">
                    Комментарий
                  </span>
                  <textarea
                    name="comment"
                    rows={4}
                    placeholder="Что вас беспокоит или какая услуга интересует"
                    className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3.5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-2 h-14 w-full rounded-full bg-primary text-base font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Записаться на приём
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
