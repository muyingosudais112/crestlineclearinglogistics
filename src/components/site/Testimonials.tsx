import { Quote, Star } from "lucide-react";

const reviews = [
  {
    quote:
      "Crestway cleared our consignment in record time. Their team kept us updated at every stage — truly a professional outfit.",
    name: "Sarah Nakimuli",
    role: "Procurement Lead, Kampala Trading Co.",
  },
  {
    quote:
      "We've moved over 40 containers with Crestway. Zero delays, zero surprises. They feel like an extension of our team.",
    name: "David Okello",
    role: "Operations Director, EastAfri Imports",
  },
  {
    quote:
      "From documentation to last-mile delivery, the experience was seamless. Highly recommended for any serious importer.",
    name: "Patricia Mwangi",
    role: "CEO, Lumira Distributors",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs tracking-[0.25em] uppercase text-gold font-semibold mb-4">
            Client Voices
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy leading-tight">
            Trusted by businesses across <span className="group relative bg-card rounded-2xl p-8 border-border shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-1 overflow-hidden border-0 bg-gray-900">East Africa</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-elegant transition-smooth relative"
            >
              <Quote className="w-10 h-10 text-gold/30 absolute top-6 right-6" />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6">"{r.quote}"</p>
              <div className="border-t border-border pt-5">
                <div className="font-semibold text-navy">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
