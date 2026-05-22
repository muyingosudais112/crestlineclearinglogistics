import trucks from "@/assets/trucks.jpg";
import { Zap, ShieldCheck, Users, BadgeCheck, Clock } from "lucide-react";

const items = [
  { icon: Zap, title: "Fast Clearance", desc: "Our seasoned agents push your cargo through customs in record time." },
  { icon: ShieldCheck, title: "Trusted Logistics Partner", desc: "Years of consistent delivery have made us a name importers rely on." },
  { icon: Users, title: "Experienced Team", desc: "Specialists in URA procedures, INCOTERMS and international shipping." },
  { icon: BadgeCheck, title: "Compliance & Reliability", desc: "Full regulatory compliance with zero shortcuts. Ever." },
  { icon: Clock, title: "Timely Delivery", desc: "We commit to deadlines and protect your supply chain rhythm." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={trucks} alt="" loading="lazy" width={1280} height={800} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-navy opacity-95" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <div className="text-xs tracking-[0.25em] uppercase text-gold font-semibold mb-4">
            Why Choose Crestline
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
            Built for businesses that <span className="group relative bg-card rounded-2xl p-8 border-border shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-1 overflow-hidden border-0">​</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gold/40 rounded-2xl p-7 transition-smooth hover:bg-white/10"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-smooth shadow-gold">
                <it.icon className="w-5 h-5 text-navy-deep" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">{it.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
