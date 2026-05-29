import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Partners } from "@/components/site/Partners";
import { Toaster } from "@/components/ui/sonner";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Zap, ShieldCheck, Users, BadgeCheck, Clock, ArrowRight } from "lucide-react";
import trucks from "@/assets/trucks.jpg";

export const Route = createFileRoute("/why-us")({
  component: WhyUsPage,
  head: () => ({
    meta: [
      { title: "Why Choose Us | Crestline Clearing & Logistics" },
      { name: "description", content: "Why importers and exporters trust Crestline — fast customs clearance, full compliance, experienced agents and reliable delivery across Uganda." },
      { property: "og:title", content: "Why Choose Crestline" },
      { property: "og:description", content: "Built for businesses that move the world." },
    ],
    links: [{ rel: "canonical", href: "/why-us" }],
  }),
});

const items = [
  { icon: Zap, title: "Fast Clearance", desc: "Our seasoned agents push your cargo through customs in record time." },
  { icon: ShieldCheck, title: "Trusted Partner", desc: "Years of consistent delivery have made us a name importers rely on." },
  { icon: Users, title: "Experienced Team", desc: "Specialists in URA procedures, INCOTERMS and international shipping." },
  { icon: BadgeCheck, title: "Compliance First", desc: "Full regulatory compliance with zero shortcuts. Ever." },
  { icon: Clock, title: "Timely Delivery", desc: "We commit to deadlines and protect your supply chain rhythm." },
  { icon: ShieldCheck, title: "Cargo Security", desc: "Insured handling and tracked movements end to end." },
];

function WhyUsPage() {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Why Choose Crestline"
          title="Built for businesses that move the world."
          description="A premium logistics partner combining deep local expertise with international freight reach."
        />

        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <img src={trucks} alt="" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-navy opacity-95" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((it, i) => (
                <div
                  key={it.title}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gold/40 rounded-2xl p-7 transition-smooth hover:bg-white/10 animate-fade-up"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-smooth shadow-gold">
                    <it.icon className="w-5 h-5 text-navy-deep" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">{it.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{it.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button asChild variant="gold" size="xl">
                <Link to="/contact">
                  Start Your Shipment <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Partners />
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}
