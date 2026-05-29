import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Partners } from "@/components/site/Partners";
import { Toaster } from "@/components/ui/sonner";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import warehouse from "@/assets/warehouse.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us | Crestline Clearing & Logistics" },
      { name: "description", content: "Learn about Crestline Clearing & Logistics — a Kampala-based customs and freight forwarding partner trusted across Uganda and the region." },
      { property: "og:title", content: "About Crestline Clearing & Logistics" },
      { property: "og:description", content: "Your trusted partner in customs and logistics across Uganda and beyond." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const points = [
  "Licensed customs clearing agents in Uganda",
  "End-to-end freight forwarding by air, sea & land",
  "Trusted by importers, exporters and corporates",
  "Transparent pricing and real-time updates",
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="About Crestline"
          title="Your trusted partner in customs & logistics."
          description="From documentation to doorstep delivery, we handle the complexity so you can focus on growing your business."
        />

        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={warehouse}
                alt="Crestline warehouse operations in Kampala, Uganda"
                loading="lazy"
                width={1280}
                height={800}
                className="rounded-2xl shadow-elegant w-full object-cover aspect-[5/4]"
              />
              <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-gradient-navy text-white p-8 rounded-2xl shadow-elegant max-w-xs">
                <div className="font-display text-5xl font-bold text-gold">98%</div>
                <div className="text-sm text-white/80 mt-2">
                  Client satisfaction across hundreds of shipments cleared annually.
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-6 leading-tight">
                Built on accuracy, speed and accountability.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Crestline Clearing & Logistics (U) Ltd helps businesses navigate customs procedures
                and transport cargo smoothly across Uganda and internationally. We serve SMEs,
                corporates and international trade partners with the speed and precision modern
                supply chains demand.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Based in Kampala with a strong regional network across the East African Community,
                we combine deep local expertise with global freight reach.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-10">
                {points.map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/90">{p}</span>
                  </div>
                ))}
              </div>

              <Button asChild variant="gold" size="lg">
                <Link to="/contact">
                  Work With Us <ArrowRight className="w-4 h-4" />
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
