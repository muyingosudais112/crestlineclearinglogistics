import warehouse from "@/assets/warehouse.jpg";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const points = [
    "Licensed customs clearing agents in Uganda",
    "End-to-end freight forwarding by air, sea & land",
    "Trusted by importers, exporters and corporates",
    "Transparent pricing and real-time updates",
  ];
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src={warehouse}
            alt="Crestline warehouse operations"
            loading="lazy"
            width={1280}
            height={800}
            className="rounded-2xl shadow-elegant w-full object-cover aspect-[5/4]"
          />
          <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-gradient-navy text-white p-8 rounded-2xl shadow-elegant max-w-xs">
            <div className="font-display text-5xl font-bold group relative bg-card rounded-2xl p-8 border-border shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-1 overflow-hidden border-0">98%</div>
            <div className="text-sm text-white/80 mt-2">
              Client satisfaction across hundreds of shipments cleared annually.
            </div>
          </div>
        </div>

        <div>
          <div className="text-xs tracking-[0.25em] uppercase text-gold font-semibold mb-4">
            About Crestline
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
            Your trusted partner in <span className="group relative bg-card rounded-2xl p-8 border-border shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-1 overflow-hidden border-0">customs & logistics</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Crestline Clearing & Logistics (U) Ltd helps businesses navigate customs procedures and
            transport cargo smoothly across Uganda and internationally. From documentation to
            doorstep delivery, we handle the complexity so you can focus on growing your business.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Based in Kampala with a strong regional network, we serve SMEs, corporates, and
            international trade partners with the speed, accuracy and accountability modern supply
            chains demand.
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            {points.map((p) => (
              <div key={p} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/90">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
