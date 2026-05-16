import { useEffect, useRef, useState } from "react";

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - start) / duration, 1);
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

const stats = [
  { v: 500, suffix: "+", label: "Shipments Cleared" },
  { v: 98, suffix: "%", label: "Client Satisfaction" },
  { v: 24, suffix: "/7", label: "Customer Support" },
  { v: 15, suffix: "+", label: "Years of Experience" },
];

export function Stats() {
  return (
    <section className="py-20 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((s) => (
          <div key={s.label} className="text-center lg:text-left">
            <div className="font-display text-5xl lg:text-6xl font-bold text-navy">
              <Counter end={s.v} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-sm tracking-wider uppercase text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
