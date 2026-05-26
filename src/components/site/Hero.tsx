import heroVideo from "@/assets/hero-port.mp4.asset.json";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ transform: `translate3d(0, ${scrollY * 0.3}px, 0)` }}
      >
        <video
          ref={videoRef}
          src={heroVideo.url}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="w-full h-full object-cover will-change-transform animate-hero-zoom"
        />
        <div className="absolute inset-0 bg-navy-deep/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-32 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 backdrop-blur-sm mb-8 animate-fade-up bg-slate-400">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs tracking-[0.2em] uppercase text-gold font-medium">
              Kampala · Uganda · Worldwide
            </span>
          </div>

          <h1
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-gold text-navy-deep font-semibold shadow-gold hover:brightness-110 hover:-translate-y-0.5 transition-smooth h-14 rounded-lg px-8 text-sm"
            style={{ animationDelay: "0.1s" }}
          >
            Reliable Customs Clearing & Logistics in Uganda
          </h1>

          <p
            className="text-lg md:text-xl text-white max-w-2xl mb-10 leading-relaxed animate-fade-up drop-shadow-lg"
            style={{ animationDelay: "0.2s" }}
          >
            We provide comprehensive customs clearance, freight forwarding, and logistics management solutions designed to simplify global trade, optimize cargo movement, and ensure seamless delivery across borders with efficiency and precision.
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
