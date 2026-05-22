import {
  FileCheck2,
  Ship,
  Plane,
  Truck,
  Warehouse,
  PackageSearch,
  ClipboardList,
  Globe2,
  Boxes,
} from "lucide-react";

const services = [
  { icon: FileCheck2, title: "Customs Clearing", desc: "Fast, compliant clearance through URA and all major border posts." },
  { icon: Globe2, title: "Freight Forwarding", desc: "Door-to-door international forwarding with full visibility." },
  { icon: ClipboardList, title: "Import & Export Docs", desc: "Accurate documentation, permits, and regulatory compliance." },
  { icon: Boxes, title: "Cargo Handling", desc: "Professional handling for general, oversized, and special cargo." },
  { icon: Plane, title: "Air Freight", desc: "Time-critical air shipments with priority routing worldwide." },
  { icon: Ship, title: "Sea Freight", desc: "FCL & LCL ocean freight via Mombasa, Dar es Salaam and beyond." },
  { icon: Truck, title: "Land Transportation", desc: "Reliable trucking across Uganda, EAC and the Great Lakes region." },
  { icon: Warehouse, title: "Warehousing", desc: "Secure storage, inventory management and distribution hubs." },
  { icon: PackageSearch, title: "Supply Chain Solutions", desc: "Tailored end-to-end strategies that lower cost and lead times." },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <div className="text-xs tracking-[0.25em] uppercase text-gold font-semibold mb-4">
            What We Do
          </div>
          <p className="text-muted-foreground text-lg mt-5">
            From the port to your warehouse — everything you need to move cargo internationally,
            handled by an experienced team that knows Ugandan customs inside out.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-1 overflow-hidden"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="w-14 h-14 rounded-xl bg-navy/5 group-hover:bg-gradient-navy flex items-center justify-center mb-6 transition-smooth">
                <s.icon className="w-6 h-6 text-navy group-hover:text-gold transition-smooth" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
