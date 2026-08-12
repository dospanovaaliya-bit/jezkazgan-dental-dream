import interior from "@/assets/interior.jpg";
import chair from "@/assets/chair.jpg";
import equipment from "@/assets/equipment.jpg";
import hero from "@/assets/hero.jpg";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <Reveal>
          <p className="text-xs tracking-[0.22em] text-primary-foreground/60 uppercase">
            О клинике
          </p>
          <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Здесь о вашей улыбке действительно заботятся
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/75">
            Dream Smile — стоматология в Жезказгане, где современный подход к лечению сочетается с
            внимательным отношением к каждому пациенту.
          </p>
          <div className="mt-10 grid max-w-md grid-cols-2 gap-8 border-t border-primary-foreground/15 pt-8">
            <div>
              <p className="text-3xl font-extrabold text-gold">5.0</p>
              <p className="mt-1 text-xs text-primary-foreground/60">оценка пациентов</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-gold">09:00—19:00</p>
              <p className="mt-1 text-xs text-primary-foreground/60">ежедневно, без выходных</p>
            </div>
          </div>
          <a
            href="#booking"
            className="mt-10 inline-flex h-13 items-center rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
          >
            Записаться на консультацию
          </a>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          <Reveal className="col-span-2">
            <img
              src={interior}
              alt="Интерьер клиники Dream Smile"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-64 w-full rounded-2xl object-cover sm:h-80"
            />
          </Reveal>
          <Reveal delay={100} className="translate-y-0 sm:-translate-y-6">
            <img
              src={chair}
              alt="Стоматологическое кресло"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-44 w-full rounded-2xl object-cover sm:h-56"
            />
          </Reveal>
          <Reveal delay={180}>
            <img
              src={equipment}
              alt="Современное стоматологическое оборудование"
              loading="lazy"
              width={1024}
              height={768}
              className="h-44 w-full rounded-2xl object-cover sm:h-56"
            />
          </Reveal>
          <Reveal delay={240} className="col-span-2 sm:-translate-y-6">
            <img
              src={hero}
              alt="Врач и пациент в клинике"
              loading="lazy"
              width={1200}
              height={1440}
              className="h-48 w-full rounded-2xl object-cover object-top sm:h-60"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
