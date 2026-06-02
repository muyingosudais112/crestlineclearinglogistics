import { useState } from "react";
import { Star, Quote, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";

const reviews = [
  {
    quote: "Exceptional customs clearing services. Our cargo was processed quickly and professionally.",
    name: "Sarah K.",
    location: "Kampala",
    initials: "SK",
  },
  {
    quote: "Reliable freight forwarding partner with excellent customer support throughout the process.",
    name: "David M.",
    location: "Nairobi",
    initials: "DM",
  },
  {
    quote: "Fast, transparent and highly professional logistics solutions. Highly recommended.",
    name: "Grace N.",
    location: "Entebbe",
    initials: "GN",
  },
];

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  company: z.string().trim().max(120).optional(),
  rating: z.number().int().min(1).max(5),
  message: z.string().trim().min(10).max(600),
});

export function TestimonialsBlock() {
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: String(fd.get("name") || ""),
      company: String(fd.get("company") || ""),
      rating,
      message: String(fd.get("message") || ""),
    });
    if (!parsed.success) {
      toast.error("Please fill in your name, rating and a message (10+ characters).");
      return;
    }
    setLoading(true);
    try {
      const key = "pending_testimonials";
      const prev = JSON.parse(localStorage.getItem(key) || "[]");
      prev.push({ ...parsed.data, submittedAt: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(prev));
      setTimeout(() => {
        setLoading(false);
        toast.success("Thank you! Your testimonial was submitted for review.");
        (e.target as HTMLFormElement).reset();
        setRating(5);
      }, 600);
    } catch {
      setLoading(false);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-24 lg:py-28 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs tracking-[0.25em] uppercase text-gold font-semibold mb-4">
            Client Voices
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy leading-tight">
            Trusted by businesses across East Africa
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="relative bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-elegant hover:-translate-y-1 transition-smooth"
            >
              <Quote className="w-10 h-10 text-gold/25 absolute top-6 right-6" />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6">"{r.quote}"</p>
              <div className="border-t border-border pt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-navy text-gold font-bold flex items-center justify-center text-sm">
                  {r.initials}
                </div>
                <div>
                  <div className="font-semibold text-navy">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.location}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-xs tracking-[0.25em] uppercase text-gold font-semibold mb-3">
              Share Your Experience
            </div>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-navy">
              Leave a Testimonial
            </h3>
          </div>

          <form onSubmit={onSubmit} className="bg-card rounded-2xl p-8 shadow-card border border-border space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input name="name" required placeholder="Full name" maxLength={80} className="h-12" />
              <Input name="company" placeholder="Company (optional)" maxLength={120} className="h-12" />
            </div>

            <div>
              <label className="block text-sm font-medium text-navy mb-2">Your rating</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onMouseEnter={() => setHover(n)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setRating(n)}
                    aria-label={`${n} stars`}
                    className="p-1 transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-7 h-7 transition-colors ${
                        (hover || rating) >= n ? "fill-gold text-gold" : "text-muted-foreground/30"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <Textarea
              name="message"
              required
              rows={5}
              maxLength={600}
              placeholder="Tell us about your experience with Crestline..."
            />

            <Button type="submit" variant="gold" size="lg" disabled={loading} className="w-full">
              {loading ? "Submitting..." : "Submit Testimonial"}
              <Send className="w-4 h-4" />
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Submissions are reviewed before being published.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
