import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Mail, Send, Navigation, Clock } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us | Crestline Clearing & Logistics" },
      { name: "description", content: "Contact Crestline Clearing & Logistics in Kampala, Uganda for customs clearing and freight forwarding quotes. We respond within one business day." },
      { property: "og:title", content: "Contact Crestline Clearing & Logistics" },
      { property: "og:description", content: "Get in touch for a freight or customs clearing quote." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent — we'll respond within one business day.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

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
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
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
                <a href="mailto:info@crestlinelogistics.co.ug" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-navy flex items-center justify-center shadow-card group-hover:shadow-gold transition-smooth">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                    <div className="font-semibold text-navy">info@crestlinelogistics.co.ug</div>
                  </div>
                </a>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-card border border-border bg-card p-6">
                <div className="space-y-3 mb-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-navy flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="font-semibold text-navy">Crestline Clearing & Logistics (U) Ltd</div>
                      <div className="text-sm text-muted-foreground">Kampala, Uganda</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground pl-12">
                    <Clock className="w-3.5 h-3.5" /> Mon – Sat · 8:00 AM – 6:00 PM
                  </div>
                </div>
                <Button asChild variant="gold" className="w-full">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Crestline+Clearing+%26+Logistics+%28U%29+Ltd+Kampala"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="w-4 h-4" /> Get Directions
                  </a>
                </Button>
              </div>
            </div>

            <form onSubmit={onSubmit} className="bg-gradient-navy rounded-2xl p-8 lg:p-10 shadow-elegant h-fit">
              <h3 className="font-display text-2xl font-bold text-white mb-1">Request a Quote</h3>
              <p className="text-white/70 text-sm mb-8">Tell us about your shipment.</p>

              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input required placeholder="Full name" className="bg-white/10 border-white/15 text-white placeholder:text-white/50 h-12" />
                  <Input required type="email" placeholder="Email" className="bg-white/10 border-white/15 text-white placeholder:text-white/50 h-12" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="Phone" className="bg-white/10 border-white/15 text-white placeholder:text-white/50 h-12" />
                  <Input placeholder="Service needed" className="bg-white/10 border-white/15 text-white placeholder:text-white/50 h-12" />
                </div>
                <Textarea
                  required
                  rows={5}
                  placeholder="Briefly describe your cargo, origin and destination..."
                  className="bg-white/10 border-white/15 text-white placeholder:text-white/50"
                />
                <Button type="submit" variant="gold" size="xl" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send Inquiry"}
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster richColors position="top-right" />
    </div>
  );
}
