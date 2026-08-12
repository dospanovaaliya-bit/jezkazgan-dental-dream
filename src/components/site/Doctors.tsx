import doctorPlaceholder from "@/assets/doctor-placeholder.jpg";
import { Reveal } from "./Reveal";

const DOCTORS = [1, 2, 3];

export function Doctors() {
  return (
    <section id="doctors" className="py-20 md:py-28">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Команда</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
            Врачи, которым можно доверять
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Данные специалистов — временные placeholders, их легко заменить на реальные фото и
            информацию.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DOCTORS.map((n, i) => (
            <Reveal as="article" key={n} delay={i * 90}>
              <div className="group overflow-hidden rounded-2xl border border-border/70 bg-card transition-all duration-500 hover:shadow-float">
                <img
                  src={doctorPlaceholder}
                  alt="Placeholder — фотография специалиста"
                  loading="lazy"
                  width={768}
                  height={960}
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="p-6">
                  <p className="text-xs tracking-[0.18em] text-gold uppercase">Placeholder</p>
                  <h3 className="mt-2 text-lg font-bold text-primary">Имя специалиста</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Специализация</p>
                  <p className="mt-4 text-sm text-muted-foreground">Опыт работы — укажите позже</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
