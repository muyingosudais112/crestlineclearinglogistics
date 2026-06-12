import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";
import { PageHeader } from "@/components/site/PageHeader";
import {
  FileCheck2, Ship, Plane, Truck, Warehouse, PackageSearch,
  ClipboardList, Globe2, Boxes,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services | Crestline Clearing & Logistics" },
      { name: "description", content: "Customs clearing, freight forwarding, warehousing and supply chain solutions — air, sea and land freight across Uganda and worldwide." },
      { property: "og:title", content: "Logistics Services — Crestline" },
      { property: "og:description", content: "End-to-end logistics services for importers and exporters in Uganda." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Logistics Services — Crestline Clearing & Logistics",
          url: "https://crestlineclearinglogistics.lovable.app/services",
          about: [
            "Customs Clearing","Freight Forwarding","Import & Export Documentation",
            "Cargo Handling","Air Freight","Sea Freight","Land Transportation",
            "Warehousing","Supply Chain Solutions",
          ],
          provider: {
            "@type": "LocalBusiness",
            name: "Crestline Clearing & Logistics (U) Ltd",
            telephone: "+256778370959",
            address: { "@type": "PostalAddress", addressLocality: "Kampala", addressCountry: "UG" },
          },
        }),
      },
    ],
  }),
});

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

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="What We Do"
          title="End-to-end logistics, handled by experts."
          description="From the port to your warehouse — everything you need to move cargo internationally, delivered by a team that knows Ugandan customs inside out."
        />

        <section className="py-20 lg:py-28 bg-secondary/40">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className="group relative bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-1 overflow-hidden animate-fade-up"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="w-14 h-14 rounded-xl bg-navy/5 group-hover:bg-gradient-navy flex items-center justify-center mb-6 transition-smooth">
                    <s.icon className="w-6 h-6 text-navy group-hover:text-gold transition-smooth" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-navy mb-2">{s.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster richColors position="top-right" />
    </div>
  );
}
