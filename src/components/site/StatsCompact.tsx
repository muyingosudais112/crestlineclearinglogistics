import { useEffect, useRef, useState } from "react";
import { Package, ShieldCheck, Headphones, Globe, Award } from "lucide-react";

type Stat = {
  icon: typeof Package;
  value: number;
  suffix: string;
  label: string;
  display?: string;
};

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - start) / 1600, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setV(Math.floor(eased * end));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);
  return <span ref={ref}>{v}{suffix}</span>;
}

const stats: Stat[] = [
  { icon: Package, value: 500, suffix: "+", label: "Shipments Cleared" },
  { icon: ShieldCheck, value: 98, suffix: "%", label: "Clearance Success Rate" },
  { icon: Headphones, value: 24, suffix: "/7", label: "Customer Support" },
  { icon: Globe, value: 0, suffix: "", display: "East Africa", label: "Coverage" },
  { icon: Award, value: 5, suffix: "+", label: "Years Experience" },
];

export function StatsCompact() {
  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="rounded-2xl bg-gradient-navy shadow-elegant p-6 lg:p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group rounded-xl bg-white/5 border border-white/10 px-4 py-5 text-center hover:bg-white/10 hover:-translate-y-0.5 transition-smooth"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-gold/15 flex items-center justify-center group-hover:bg-gold/25 transition-smooth">
                <s.icon className="w-5 h-5 text-gold" />
              </div>
              <div className="font-display text-2xl lg:text-3xl font-bold text-white">
                {s.display ? s.display : <Counter end={s.value} suffix={s.suffix} />}
              </div>
              <div className="mt-1 text-[11px] tracking-wider uppercase text-white/65">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
