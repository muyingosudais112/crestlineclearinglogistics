import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";


import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Crestline Clearing & Logistics (U) Ltd | Customs & Freight in Uganda" },
      {
        name: "description",
        content:
          "Trusted customs clearing, freight forwarding & logistics in Kampala, Uganda. Air, sea & land freight, warehousing and supply chain solutions.",
      },
      { property: "og:title", content: "Crestline Clearing & Logistics (U) Ltd" },
      { property: "og:description", content: "Reliable customs clearing and logistics solutions in Uganda." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Crestline Clearing & Logistics (U) Ltd",
          image: "",
          telephone: "+256778370959",
          address: { "@type": "PostalAddress", addressLocality: "Kampala", addressCountry: "UG" },
          areaServed: "Uganda",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />

        
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}
