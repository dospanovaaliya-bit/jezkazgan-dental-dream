import { Reveal } from "./Reveal";
import { CalendarCheck, Stethoscope, FileText, Smile } from "lucide-react";

const STEPS = [
  { n: "01", icon: CalendarCheck, title: "Запись на приём", text: "Вы выбираете удобную дату и время онлайн или по телефону." },
  { n: "02", icon: Stethoscope, title: "Консультация и 3D-осмотр", text: "Врач проводит осмотр, снимки и детальную диагностику." },
  { n: "03", icon: FileText, title: "План и стоимость", text: "Согласовываем пошаговый план лечения с фиксированной ценой." },
  { n: "04", icon: Smile, title: "Здоровая улыбка", text: "Проходим безболезненное лечение с гарантией результата." },
];

export function Process() {
  return (
    <section className="bg-white py-20 md:py-28 border-t border-slate-200">
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Как проходит лечение</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#0B192C] sm:text-4xl lg:text-5xl font-display">
            Четыре простых шага к вашей идеальной улыбке
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 90}>
              <div className="relative h-full rounded-3xl border border-slate-200 bg-slate-50/60 p-8 transition-all duration-300 hover:border-blue-500/40 hover:bg-white hover:shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#0B192C] to-slate-800 text-[#38BDF8]">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <span className="text-2xl font-black text-[#0066FF] font-display">{s.n}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#0B192C] font-display">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
