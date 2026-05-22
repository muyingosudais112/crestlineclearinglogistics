import heroImage from "@/assets/hero-port.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cargo ship at international port"
          width={1920}
          height={1088}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/80 to-navy-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-32 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-gold/30 backdrop-blur-sm mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs tracking-[0.2em] uppercase text-gold font-medium">
              Kampala · Uganda · Worldwide
            </span>
          </div>

          <h1
            className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Reliable Customs Clearing &{" "}
            <span className="text-gradient-gold">Logistics Solutions</span> in Uganda
          </h1>

          <p
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Efficient, secure, and stress-free freight forwarding. We move your cargo across borders
            with precision, speed, and uncompromising integrity.
          </p>

          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button asChild variant="gold" size="xl">
              <a href="#contact">
                Get a Quote <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <a href="tel:+256778370959">
                <Phone className="w-4 h-4" /> +256 778 370959
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
