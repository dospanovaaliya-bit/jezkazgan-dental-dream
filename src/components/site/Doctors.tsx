import { Award, GraduationCap, Calendar } from "lucide-react";
import { Reveal } from "./Reveal";
import { DOCTORS } from "./data";

export function Doctors() {
  return (
    <section id="doctors" className="bg-white py-20 md:py-28">
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Наша команда</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#0B192C] sm:text-4xl lg:text-5xl font-display">
            Врачи, которым доверили свои улыбки
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Опытные специалисты клиники Dream Smile регулярного повышения квалификации.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {DOCTORS.map((doc, i) => (
            <Reveal as="article" key={doc.id} delay={i * 90}>
              <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/40 hover:shadow-xl">
                <div className="relative overflow-hidden bg-slate-100">
                  <img
                    src={doc.img}
                    alt={doc.name}
                    loading="lazy"
                    width={768}
                    height={960}
                    className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-[#0B192C]/90 px-3 py-1 text-xs font-bold text-[#38BDF8] backdrop-blur-md">
                    <Calendar className="h-3.5 w-3.5" /> {doc.experience}
                  </span>
                </div>

                <div className="p-7">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0066FF]">
                    {doc.role.split("·")[0]}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-[#0B192C] font-display">{doc.name}</h3>
                  <p className="mt-1 text-sm font-medium text-slate-500">{doc.role}</p>

                  <div className="mt-5 space-y-3 border-t border-slate-100 pt-4">
                    <div className="flex items-start gap-2 text-xs text-slate-600">
                      <GraduationCap className="h-4 w-4 shrink-0 text-[#0066FF]" />
                      <span>{doc.education}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {doc.specs.map((s) => (
                        <span
                          key={s}
                          className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-2">
                    <a
                      href="#booking"
                      className="flex h-11 w-full items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-[#0B192C] transition-all group-hover:border-[#0066FF] group-hover:bg-[#0066FF] group-hover:text-white"
                    >
                      Записаться к врачу
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
