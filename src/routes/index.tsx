import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe2, ShieldCheck, Zap } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Crestline Clearing & Logistics (U) Ltd | Customs & Freight in Uganda" },
      {
        name: "description",
        content:
          "Trusted customs clearing, freight forwarding & logistics in Kampala, Uganda. Air, sea & land freight, warehousing and supply chain solutions.",
      },
      { property: "og:title", content: "Crestline Clearing & Logistics (U) Ltd" },
      { property: "og:description", content: "Reliable customs clearing and logistics solutions in Uganda." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Crestline Clearing & Logistics (U) Ltd",
          telephone: "+256778370959",
          address: { "@type": "PostalAddress", addressLocality: "Kampala", addressCountry: "UG" },
          areaServed: "Uganda",
        }),
      },
    ],
  }),
});

const highlights = [
  { icon: Globe2, title: "Global Reach", desc: "International freight by air, sea and land — door to door." },
  { icon: ShieldCheck, title: "Fully Compliant", desc: "Licensed URA clearing agents with zero shortcuts." },
  { icon: Zap, title: "Fast Turnaround", desc: "Cargo cleared and moving in record time." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navbar />
      <main>
        <Hero />

        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="text-xs tracking-[0.25em] uppercase text-gold font-semibold mb-4">
                Who We Are
              </div>
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-navy leading-tight mb-6">
                A premium logistics partner for businesses that move the world.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Based in Kampala with a strong regional network, Crestline delivers end-to-end
                customs clearing, freight forwarding and supply chain solutions for importers,
                exporters and corporates across Uganda and beyond.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="gold" size="lg">
                  <Link to="/about">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 grid gap-4">
              {highlights.map((h, i) => (
                <div
                  key={h.title}
                  className="group flex items-start gap-4 p-6 rounded-2xl border border-border bg-card shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-navy flex items-center justify-center shrink-0 group-hover:shadow-gold transition-smooth">
                    <h.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-navy mb-1">{h.title}</div>
                    <div className="text-sm text-muted-foreground">{h.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-20 lg:py-28 bg-gradient-navy overflow-hidden">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_30%_30%,hsl(var(--gold)/0.4),transparent_40%),radial-gradient(circle_at_70%_70%,hsl(var(--gold)/0.25),transparent_40%)]" />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to move your cargo with confidence?
            </h2>
            <p className="text-white/75 text-lg mb-10 max-w-2xl mx-auto">
              Get a tailored quote from our team within one business day.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild variant="gold" size="xl">
                <Link to="/contact">
                  Request a Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outlineLight" size="xl">
                <Link to="/why-us">Why Choose Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}
