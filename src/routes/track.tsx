import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { PageHeader } from "@/components/site/PageHeader";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  FileText,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Truck,
  PackageCheck,
  Bike,
  Home,
  MapPin,
  Calendar,
  Clock,
  Package,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/track")({
  component: TrackPage,
  head: () => ({
    meta: [
      { title: "Track Shipment | Crestline Clearing & Logistics" },
      { name: "description", content: "Track your shipment status in real time with Crestline Clearing & Logistics. Enter your tracking ID to see progress from clearance to delivery." },
      { property: "og:title", content: "Track Shipment — Crestline Logistics" },
      { property: "og:description", content: "Real-time shipment tracking across Uganda and beyond." },
    ],
    links: [{ rel: "canonical", href: "/track" }],
  }),
});

const STAGES = [
  { key: "documents", label: "Documents Received", icon: FileText },
  { key: "customs", label: "Customs Processing", icon: Building2 },
  { key: "inspection", label: "Under Inspection", icon: ShieldCheck },
  { key: "cleared", label: "Cleared", icon: CheckCircle2 },
  { key: "transit", label: "In Transit", icon: Truck },
  { key: "arrived", label: "Arrived at Destination", icon: PackageCheck },
  { key: "out", label: "Out for Delivery", icon: Bike },
  { key: "delivered", label: "Delivered", icon: Home },
] as const;

type TrackResult = {
  id: string;
  currentIndex: number;
  origin: string;
  destination: string;
  weight: string;
  mode: string;
  eta: string;
  lastUpdated: string;
};

function deriveResult(id: string): TrackResult {
  // Deterministic mock so demo IDs always show the same result
  let hash = 0;
  for (let i = 0; i < id.length; i++) hash = (hash * 31 + id.charCodeAt(i)) | 0;
  const idx = Math.abs(hash) % STAGES.length;
  const days = (Math.abs(hash) % 6) + 2;
  const eta = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
  return {
    id: id.toUpperCase(),
    currentIndex: idx,
    origin: ["Shanghai, CN", "Dubai, AE", "Mombasa, KE", "Guangzhou, CN"][Math.abs(hash) % 4],
    destination: "Kampala, UG",
    weight: `${(Math.abs(hash) % 800) + 50} kg`,
    mode: ["Sea Freight", "Air Freight", "Road Freight"][Math.abs(hash) % 3],
    eta: eta.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" }),
    lastUpdated: new Date().toLocaleString(undefined, {
      day: "numeric", month: "short", hour: "2-digit", minute: "2-digit",
    }),
  };
}

function TrackPage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<TrackResult | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = input.trim();
    if (id.length < 4) return;
    setLoading(true);
    setTimeout(() => {
      setResult(deriveResult(id));
      setLoading(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Shipment Tracking"
          title="Track your cargo, every step of the way."
          description="Enter your tracking ID below to view live status, location and estimated delivery."
        />

        <section className="py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <form
              onSubmit={onSubmit}
              className="bg-card rounded-2xl shadow-card border border-border p-4 md:p-5 flex flex-col sm:flex-row gap-3"
            >
              <div className="relative flex-1">
                <Package className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter your tracking ID (e.g. CRL-2026-0042)"
                  className="h-14 pl-12 text-base"
                  maxLength={40}
                />
              </div>
              <Button type="submit" variant="gold" size="xl" disabled={loading || input.trim().length < 4}>
                <Search className="w-4 h-4" />
                {loading ? "Searching..." : "Track Shipment"}
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-3 text-center">
              Tip: try a sample ID like <span className="font-semibold text-navy">CRL-2026-0042</span>
            </p>

            {result && (
              <div className="mt-10 animate-fade-up space-y-8">
                {/* Summary card */}
                <div className="bg-gradient-navy rounded-2xl p-6 lg:p-8 shadow-elegant text-white">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="text-[11px] tracking-[0.2em] uppercase text-gold mb-1">Tracking ID</div>
                      <div className="font-display text-2xl lg:text-3xl font-bold">{result.id}</div>
                    </div>
                    <div className="px-4 py-2 rounded-full bg-gold text-navy-deep text-sm font-semibold">
                      {STAGES[result.currentIndex].label}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    <Detail icon={MapPin} label="Origin" value={result.origin} />
                    <Detail icon={MapPin} label="Destination" value={result.destination} />
                    <Detail icon={Truck} label="Mode" value={result.mode} />
                    <Detail icon={Package} label="Weight" value={result.weight} />
                    <Detail icon={Calendar} label="Estimated Delivery" value={result.eta} />
                    <Detail icon={Clock} label="Last Updated" value={result.lastUpdated} />
                  </div>
                </div>

                {/* Progress bar */}
                <div>
                  <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-gold transition-[width] duration-700"
                      style={{ width: `${((result.currentIndex + 1) / STAGES.length) * 100}%` }}
                    />
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground text-right">
                    Stage {result.currentIndex + 1} of {STAGES.length}
                  </div>
                </div>

                {/* Timeline */}
                <ol className="relative border-l-2 border-border ml-3 space-y-6">
                  {STAGES.map((stage, i) => {
                    const completed = i < result.currentIndex;
                    const current = i === result.currentIndex;
                    const Icon = stage.icon;
                    return (
                      <li key={stage.key} className="pl-8 relative">
                        <span
                          className={`absolute -left-[18px] top-0 w-9 h-9 rounded-full flex items-center justify-center border-2 transition-smooth ${
                            current
                              ? "bg-gold border-gold text-navy-deep shadow-gold animate-pulse"
                              : completed
                                ? "bg-navy border-navy text-gold"
                                : "bg-background border-border text-muted-foreground"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </span>
                        <div
                          className={`font-semibold ${
                            current ? "text-navy" : completed ? "text-navy/80" : "text-muted-foreground"
                          }`}
                        >
                          {stage.label}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {completed
                            ? "Completed"
                            : current
                              ? `In progress · updated ${result.lastUpdated}`
                              : "Pending"}
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster richColors position="top-right" />
    </div>
  );
}

function Detail({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-[11px] tracking-wider uppercase text-white/60 mb-1">
        <Icon className="w-3.5 h-3.5" /> {label}
      </div>
      <div className="text-sm font-semibold text-white">{value}</div>
    </div>
  );
}
