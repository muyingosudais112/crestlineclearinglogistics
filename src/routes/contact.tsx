import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail, Navigation, Clock } from "lucide-react";

const mapEmbedUrl =
  "https://www.google.com/maps?q=Crestway%20Clearing%20%26%20Logistics%20%28U%29%20Ltd%20Kampala%2C%20Uganda&z=14&output=embed";
const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Crestway%20Clearing%20%26%20Logistics%20%28U%29%20Ltd%20Kampala%2C%20Uganda";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us | Crestway Clearing & Logistics" },
      { name: "description", content: "Contact Crestway Clearing & Logistics in Kampala, Uganda for customs clearing and freight forwarding quotes. We respond within one business day." },
      { property: "og:title", content: "Contact Crestway Clearing & Logistics" },
      { property: "og:description", content: "Get in touch for a freight or customs clearing quote." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Crestway Clearing & Logistics (U) Ltd",
          url: "https://crestwayclearinglogistics.lovable.app/contact",
          telephone: "+256778370959",
          email: "info@crestwaylogistics.co.ug",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kampala",
            addressCountry: "UG",
          },
          areaServed: "Uganda",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
              opens: "08:00",
              closes: "18:00",
            },
          ],
        }),
      },
    ],
  }),
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Get In Touch"
          title="Let's move your cargo forward."
          description="Reach out for a free quote or speak directly with our team. We respond within one business day."
        />

        <section className="py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            <div>
              <div className="space-y-5 mb-10">
                <a href="tel:+256778370959" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-navy flex items-center justify-center shadow-card group-hover:shadow-gold transition-smooth">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Call us</div>
                    <div className="font-semibold text-navy">+256 778 370959</div>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-navy flex items-center justify-center shadow-card">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Office</div>
                    <div className="font-semibold text-navy">Kampala, Uganda</div>
                  </div>
                </div>
                <a href="mailto:info@crestwaylogistics.co.ug" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-navy flex items-center justify-center shadow-card group-hover:shadow-gold transition-smooth">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                    <div className="font-semibold text-navy">info@crestwaylogistics.co.ug</div>
                  </div>
                </a>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-card border border-border bg-card">
                <div className="relative aspect-[16/9] bg-secondary">
                  <iframe
                    src={mapEmbedUrl}
                    title="Crestway Clearing & Logistics location map"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    tabIndex={-1}
                    className="absolute inset-0 h-full w-full border-0"
                  />
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open Crestway location in Google Maps"
                    className="absolute inset-0"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-navy flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="font-semibold text-navy">Crestway Clearing & Logistics (U) Ltd</div>
                      <div className="text-sm text-muted-foreground">Kampala, Uganda</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground pl-12">
                    <Clock className="w-3.5 h-3.5" /> Mon – Sat · 8:00 AM – 6:00 PM
                  </div>
                  <Button asChild variant="gold" className="w-full">
                    <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
                      <Navigation className="w-4 h-4" /> Get Directions
                    </a>
                  </Button>
                </div>
              </div>
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
