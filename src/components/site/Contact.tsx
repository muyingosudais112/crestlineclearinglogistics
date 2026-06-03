import { useState } from "react";
import { Phone, MapPin, Mail, Send, Navigation, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function Contact() {
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
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-gold font-semibold mb-4">
              Get In Touch
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy leading-tight mb-6">
              Let's move your cargo <span className="group relative bg-card rounded-2xl p-8 border-border shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-1 overflow-hidden border-0 bg-gray-900">forward</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Reach out for a free quote or speak directly with our team. We respond within one
              business day.
            </p>

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

            <div className="rounded-2xl overflow-hidden shadow-card border border-border h-64">
              <iframe
                title="Crestline office map"
                src="https://www.google.com/maps?q=Kampala,Uganda&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="bg-gradient-navy rounded-2xl p-8 lg:p-10 shadow-elegant"
          >
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
      </div>
    </section>
  );
}
