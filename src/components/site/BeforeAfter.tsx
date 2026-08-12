import smile from "@/assets/smile.jpg";
import svcWhitening from "@/assets/svc-whitening.jpg";
import svcAesthetic from "@/assets/svc-aesthetic.jpg";
import { Reveal } from "./Reveal";

const CASES = [
  { before: svcAesthetic, after: smile, title: "Эстетическая реставрация" },
  { before: svcWhitening, after: smile, title: "Отбеливание эмали" },
];

export function BeforeAfter() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">До / После</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
            Результат, который видно
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Изображения ниже — демонстрационные placeholders. Их заменят реальные фотографии
            пациентов клиники.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {CASES.map((c, i) => (
            <Reveal as="article" key={c.title} delay={i * 100}>
              <div className="overflow-hidden rounded-2xl border border-border/70 bg-card">
                <div className="grid grid-cols-2 gap-px bg-border">
                  {(
                    [
                      ["До", c.before],
                      ["После", c.after],
                    ] as const
                  ).map(([label, img]) => (
                    <div key={label} className="relative bg-card">
                      <img
                        src={img}
                        alt={`${c.title} — ${label} (демонстрационное изображение)`}
                        loading="lazy"
                        width={900}
                        height={700}
                        className="h-56 w-full object-cover sm:h-64"
                      />
                      <span className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-[11px] font-semibold tracking-wide text-primary uppercase">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-4 p-5">
                  <h3 className="text-base font-bold text-primary">{c.title}</h3>
                  <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold text-secondary-foreground">
                    Демо
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
