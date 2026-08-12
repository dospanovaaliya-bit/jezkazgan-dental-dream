import { Sparkles, HeartHandshake, Leaf, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    icon: Sparkles,
    title: "Современное оборудование",
    text: "Используем современные технологии для точной диагностики и лечения.",
  },
  {
    icon: HeartHandshake,
    title: "Опытные специалисты",
    text: "Внимательное отношение и индивидуальный подход к каждому пациенту.",
  },
  {
    icon: Leaf,
    title: "Комфортная атмосфера",
    text: "Создаем спокойную и комфортную обстановку без лишнего стресса.",
  },
  {
    icon: ShieldCheck,
    title: "Честный подход",
    text: "Подробно объясняем план лечения и его стоимость до начала процедуры.",
  },
];

export function Trust() {
  return (
    <section className="border-y border-border/70 bg-card/60 py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Доверие</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
            Почему пациенты выбирают Dream Smile
          </h2>
        </Reveal>
        <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 90}>
              <span className="grid h-12 w-12 place-items-center rounded-full border border-border bg-background text-primary">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-lg font-bold text-primary">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
