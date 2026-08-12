import { Box, Syringe, Shield, FileText } from "lucide-react";
import { Reveal } from "./Reveal";
import { TRUST_ITEMS } from "./data";

const ICON_MAP = {
  box: Box,
  syringe: Syringe,
  shield: Shield,
  "file-text": FileText,
};

export function Trust() {
  return (
    <section className="bg-[#0B132B] pb-20 pt-6 md:pb-28">
      <div className="container-x">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_ITEMS.map((item, i) => {
            const IconComponent = ICON_MAP[item.iconName as keyof typeof ICON_MAP] || Box;
            return (
              <Reveal key={item.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-slate-800/90 bg-[#142038] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#2563EB] text-white shadow-md">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white font-display">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-slate-400">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
