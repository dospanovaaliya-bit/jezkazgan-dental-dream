import { Sparkles, HeartHandshake, ShieldCheck, Cpu } from "lucide-react";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    icon: Cpu,
    title: "Инновационное оборудование",
    text: "Используем цифровые 3D-сканеры и микроскопы европейского производства.",
  },
  {
    icon: HeartHandshake,
    title: "Безболезненность и комфорт",
    text: "Современная компьютерная анестезия гарантирует отсутствие боли.",
  },
  {
    icon: Sparkles,
    title: "Опытные врачи-эксперты",
    text: "Доктора регулярных стажировок с практическим опытом от 8 до 15 лет.",
  },
  {
    icon: ShieldCheck,
    title: "Прозрачная стоимость",
    text: "Фиксируем полную стоимость в плане лечения до начала манипуляций.",
  },
];

export function Trust() {
  return (
    <section className="relative bg-white py-20 md:py-28 border-b border-slate-200">
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Доверие и стандарты</p>
          <h2 className="mt-4 text-3xl font-extrabold text-[#0B192C] sm:text-4xl lg:text-5xl font-display">
            Почему пациенты выбирают Dream Smile
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Мы объединили передовую стоматологическую науку, заботу и высочайший комфорт.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 90}>
              <div className="group h-full rounded-2xl border border-slate-200/80 bg-slate-50/50 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/40 hover:bg-white hover:shadow-xl">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#0B192C] to-slate-800 text-[#38BDF8] shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:from-[#0066FF] group-hover:to-[#0284C7] group-hover:text-white">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#0B192C] font-display">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
