import heroVideo from "@/assets/hero-port.mp4.asset.json";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Truck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
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
          preload="metadata"
          width={1920}
          height={1080}
          aria-hidden="true"
          className="w-full h-full object-cover will-change-transform animate-hero-zoom"
        />
        <div className="absolute inset-0 bg-navy-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-32 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 backdrop-blur-sm mb-8 animate-fade-up bg-amber-400">
            <span className="w-2 h-2 rounded-full bg-navy-deep animate-pulse" />
            <span className="text-xs tracking-[0.2em] uppercase text-slate-900 font-semibold">
              Kampala · Uganda · Worldwide
            </span>
          </div>

          <h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-up drop-shadow-lg"
            style={{ animationDelay: "0.1s" }}
          >
            Reliable Customs Clearing & Logistics in Uganda
          </h1>

          <p
            className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 leading-relaxed animate-fade-up drop-shadow"
            style={{ animationDelay: "0.2s" }}
          >
            Crestway Clearing & Logistics simplifies global trade — from customs documentation to
            doorstep delivery — with the speed, accuracy and accountability modern supply chains demand.
          </p>

          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button asChild variant="gold" size="xl">
              <Link to="/contact">
                Get a Quote <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <Link to="/track">
                <Truck className="w-4 h-4" /> Track Shipment
              </Link>
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
