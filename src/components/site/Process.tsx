import { Reveal } from "./Reveal";

const STEPS = [
  { n: "01", title: "Запись", text: "Вы выбираете удобное время." },
  { n: "02", title: "Консультация", text: "Врач проводит осмотр и отвечает на вопросы." },
  { n: "03", title: "План лечения", text: "Получаете понятный план и рекомендации." },
  { n: "04", title: "Результат", text: "Получаете здоровую и красивую улыбку." },
];

export function Process() {
  return (
    <section className="border-t border-border/70 py-20 md:py-28">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Как проходит лечение</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
            Четыре простых шага
          </h2>
        </Reveal>
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 90}>
              <div className="border-t border-primary/20 pt-6">
                <p className="text-sm font-semibold tracking-[0.2em] text-gold">{s.n}</p>
                <h3 className="mt-4 text-xl font-bold text-primary">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
