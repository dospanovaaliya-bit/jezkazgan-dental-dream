import { useState, useRef, useCallback } from "react";
import smile from "@/assets/smile.jpg";
import svcWhitening from "@/assets/svc-whitening.jpg";
import svcAesthetic from "@/assets/svc-aesthetic.jpg";
import { Reveal } from "./Reveal";
import { MoveHorizontal, Sparkles } from "lucide-react";

const CASES = [
  {
    before: svcAesthetic,
    after: smile,
    title: "Эстетическая керамическая реставрация",
    category: "Виниры",
  },
  {
    before: svcWhitening,
    after: smile,
    title: "Профессиональное отбеливание эмали",
    category: "Отбеливание",
  },
];

function ImageCompareSlider({ before, after, title }: { before: string; after: string; title: string }) {
  const [sliderPos, setSliderPos] = useState(50);
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percent = (x / rect.width) * 100;
    if (percent < 0) percent = 0;
    if (percent > 100) percent = 100;
    setSliderPos(percent);
  }, []);

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const onMouseDown = () => {
    isDragging.current = true;
  };

  const onMouseLeave = () => {
    isDragging.current = false;
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      className="relative h-72 w-full cursor-ew-resize select-none overflow-hidden rounded-3xl border border-slate-200 shadow-lg sm:h-80 lg:h-96"
    >
      {/* After Image (Background) */}
      <img
        src={after}
        alt={`${title} — После`}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span className="absolute bottom-4 right-4 z-10 rounded-full bg-[#0066FF] px-3.5 py-1 text-xs font-bold text-white shadow-md">
        ПОСЛЕ
      </span>

      {/* Before Image (Clipped overlay) */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white shadow-2xl"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={before}
          alt={`${title} — До`}
          className="absolute inset-y-0 left-0 h-full max-w-none object-cover"
          style={{ width: containerRef.current ? containerRef.current.clientWidth : "100%" }}
        />
        <span className="absolute bottom-4 left-4 z-10 rounded-full bg-[#0B192C]/90 px-3.5 py-1 text-xs font-bold text-white backdrop-blur-md">
          ДО
        </span>
      </div>

      {/* Drag Divider Bar */}
      <div
        className="pointer-events-none absolute inset-y-0 z-20 flex items-center justify-center"
        style={{ left: `calc(${sliderPos}% - 18px)` }}
      >
        <div className="grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-[#0066FF] text-white shadow-[0_0_15px_rgba(0,102,255,0.6)]">
          <MoveHorizontal className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

export function BeforeAfter() {
  return (
    <section id="before-after" className="bg-slate-50/80 py-20 md:py-28">
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">До / После</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#0B192C] sm:text-4xl lg:text-5xl font-display">
            Впечатляющие результаты лечения
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Потяните бегунок влево или вправо, чтобы сравнить результат до и после процедуры.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {CASES.map((c, i) => (
            <Reveal as="article" key={c.title} delay={i * 120}>
              <div className="space-y-4">
                <ImageCompareSlider before={c.before} after={c.after} title={c.title} />
                <div className="flex items-center justify-between px-2">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0066FF]">
                      {c.category}
                    </span>
                    <h3 className="text-lg font-bold text-[#0B192C] font-display">{c.title}</h3>
                  </div>
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0066FF] hover:underline"
                  >
                    Хочу такой же результат
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
